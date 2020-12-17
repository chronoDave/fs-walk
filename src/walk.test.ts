import path from 'path';
import test from 'tape';

import walk from './walk';

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
