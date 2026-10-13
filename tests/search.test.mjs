import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sourceModule } from './helpers/source-module.mjs';

const seo = sourceModule('src/lib/seo.ts');
const { services } = sourceModule('src/lib/data/services.ts');

test('search crawlers may read public pages while every robot group excludes the contact API', () => {
  const robots = sourceModule('src/app/robots.ts').default();
  for (const agent of ['*', 'OAI-SearchBot', 'PerplexityBot']) {
    const rule = robots.rules.find((item) => [item.userAgent].flat().includes(agent));
    assert.ok(rule, `Missing crawler rule: ${agent}`);
    assert.equal(rule.allow, '/');
    assert.equal(rule.disallow, '/api/');
  }
  assert.equal(robots.sitemap, `${seo.BASE_URL}/sitemap.xml`);
});

test('company and service identities agree across the offer catalog and individual pages', () => {
  const business = seo.businessSchema;
  assert.equal(business.legalName, 'Cubeon Solutions UG (haftungsbeschränkt)');
  assert.equal(business.areaServed.name, 'Deutschland');
  assert.equal(business.hasOfferCatalog.itemListElement.length, services.length);
  for (const service of services) {
    const schema = seo.serviceSchema(service);
    assert.equal(schema.provider['@id'], business['@id']);
    assert.equal(schema.url, `${seo.BASE_URL}${service.href}`);
    assert.equal(schema.audience.audienceType, 'Kleine und mittlere Unternehmen (KMU)');
    const listed = business.hasOfferCatalog.itemListElement.find((offer) => offer.itemOffered['@id'] === schema['@id']);
    assert.ok(listed, `Missing service in catalog: ${service.id}`);
    assert.equal(listed.itemOffered.name, service.name);
  }
});

