const path = require('path');
const test = require('tape');

const walk = require('..');

test('[walk] should return files from directory', t => {
  const files = walk(__dirname);

  t.equal(files.length, 3);

  t.end();
});

test('[walk] should return files from directory, recursively', t => {
  const files = walk(path.resolve(__dirname, '../.github'));

  t.equal(files.length, 1);

  t.end();
});

test('[walk] should return full file paths', t => {
  const files = walk(path.resolve(__dirname, '../.github'));
  const fullPath = path.resolve(__dirname, '../', '.github', 'workflows', 'ci.yml');

  t.true(files.some(file => file === fullPath));

  t.end();
});
