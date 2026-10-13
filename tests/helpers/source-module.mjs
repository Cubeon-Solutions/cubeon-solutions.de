import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const cache = new Map();

export function sourceModule(filename) {
  if (cache.has(filename)) return cache.get(filename);
  const context = {
    exports: {}, URL,
    require(name) {
      if (name.startsWith('@/')) return sourceModule(`src/${name.slice(2)}.ts`);
      throw new Error(`Unexpected dependency: ${name}`);
    },
  };
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(code, context);
  cache.set(filename, context.exports);
  return context.exports;
}
