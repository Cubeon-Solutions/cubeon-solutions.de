import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sourceModule } from './helpers/source-module.mjs';

const { appsData } = sourceModule('src/lib/data/apps.ts');
const { services: serviceData } = sourceModule('src/lib/data/services.ts');
const { clients } = sourceModule('src/lib/data/clients.ts');

test('editable products and references retain unique identities and valid internal relationships', () => {
  const unique = (items, key) => {
    const ids = items.map((item) => item[key]);
    assert.ok(ids.every((id) => typeof id === 'string' && id.length > 0));
    assert.equal(new Set(ids).size, ids.length, `Duplicate ${key}`);
    return new Set(ids);
  };
  unique(appsData, 'slug');
  const services = unique(serviceData, 'id');
  const references = unique(clients, 'id');
  assert.deepEqual([...services].sort(), ['apps', 'beratung', 'software']);
  for (const service of serviceData) assert.ok(references.has(service.referenceId), `Unknown reference: ${service.referenceId}`);
  const servicePaths = new Set(serviceData.map((service) => service.href));
  for (const reference of clients) assert.ok(servicePaths.has(reference.serviceHref), `Unknown service: ${reference.serviceHref}`);
});
