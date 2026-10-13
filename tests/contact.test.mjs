import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import * as crypto from 'node:crypto';

function handler({ apiKey = 'test-placeholder', fail = false } = {}) {
  const sent = [];
  const code = ts.transpileModule(fs.readFileSync('src/app/api/contact/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const context = {
    exports: {}, Buffer, Date, URL, process: { env: { NODE_ENV: 'production', RESEND_API_KEY: apiKey } },
    console: { error() {} },
    require(name) {
      if (name === 'node:crypto') return crypto;
      if (name === 'next/server') return { NextResponse: Response };
      if (name === 'resend') return { Resend: class { emails = { send: async (mail) => {
        sent.push(mail); if (fail) throw Error('provider failure'); return { error: null };
      } }; } };
      throw Error(name);
    },
  };
  vm.runInNewContext(code, context);
  return { post: context.exports.POST, sent };
}
const valid = { name: 'Test Person', email: 'person@example.com', message: 'Eine Projektanfrage.', website: '' };
function request(body = valid, headers = {}) {
  return new Request('https://www.cubeon-solutions.de/api/contact', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://www.cubeon-solutions.de', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}
test('rejects malformed JSON and wrong field types without sending', async () => {
  const h = handler();
  for (const body of ['{', null, [], { ...valid, name: {} }, { ...valid, email: 'bad' }, { ...valid, name: 'Header\r\ninjection' }]) {
    assert.equal((await h.post(request(body))).status, 400);
  }
  assert.equal(h.sent.length, 0);
});
test('rejects oversized streamed bodies and long messages', async () => {
  const h = handler();
  assert.equal((await h.post(request('x'.repeat(17000)))).status, 413);
  assert.equal((await h.post(request({ ...valid, message: 'x'.repeat(5001) }))).status, 400);
  assert.equal(h.sent.length, 0);
});
test('rejects foreign origins and non-JSON requests', async () => {
  const h = handler();
  assert.equal((await h.post(request(valid, { origin: 'https://attacker.example' }))).status, 403);
  assert.equal((await h.post(request(valid, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal(h.sent.length, 0);
});
test('honeypot silently discards automated submissions', async () => {
  const h = handler();
  assert.equal((await h.post(request({ ...valid, website: 'https://spam.example' }))).status, 200);
  assert.equal(h.sent.length, 0);
});
test('normal requests send to the fixed recipient, then sender is limited', async () => {
  const h = handler();
  for (let i = 0; i < 3; i++) assert.equal((await h.post(request())).status, 200);
  const denied = await h.post(request());
  assert.equal(denied.status, 429);
  assert.equal(denied.headers.get('retry-after'), '900');
  assert.equal(h.sent.length, 3);
  assert.equal(h.sent[0].to, 'kontakt@cubeon-solutions.de');
  assert.equal(h.sent[0].replyTo, valid.email);
});
test('global cap applies even when senders change', async () => {
  const h = handler();
  for (let i = 0; i < 30; i++) assert.equal((await h.post(request({ ...valid, email: `person${i}@example.com` }))).status, 200);
  assert.equal((await h.post(request({ ...valid, email: 'other@example.com' }))).status, 429);
  assert.equal(h.sent.length, 30);
});
test('optional company names are trimmed and included in the delivered enquiry', async () => {
  const h = handler();
  assert.equal((await h.post(request({ ...valid, company: '  Beispiel GmbH  ' }))).status, 200);
  assert.ok(h.sent[0].text.includes('Unternehmen: Beispiel GmbH\n'));
  assert.equal((await h.post(request({ ...valid, company: '' }))).status, 200);
  assert.equal(h.sent[1].text.includes('Unternehmen:'), false);
});
test('invalid optional company names are rejected before delivery', async () => {
  const h = handler();
  for (const company of [null, {}, 42, 'x'.repeat(161), 'Firma\r\nZusatz', 'Firma\x00']) {
    assert.equal((await h.post(request({ ...valid, company }))).status, 400);
  }
  assert.equal(h.sent.length, 0);
});
test('missing configuration and provider errors return controlled responses', async () => {
  assert.equal((await handler({ apiKey: '' }).post(request())).status, 503);
  const response = await handler({ fail: true }).post(request());
  assert.equal(response.status, 502);
  assert.equal((await response.text()).includes('provider failure'), false);
});
