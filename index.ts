import fs from 'fs';
import path from 'path';

const walk = (root: string) => {
  const getStack = (dir: string) => fs.readdirSync(dir, { withFileTypes: true })
    .map(dirEnt => ({ dir, dirEnt }));

  const stack = getStack(root);
  const files = [];

  while (stack.length > 0) {
    const item = stack.pop();

    if (item) {
      const { dir, dirEnt } = item;

      if (dirEnt.isDirectory()) {
        stack.push(...getStack(path.resolve(dir, dirEnt.name)));
      } else {
        files.push(path.resolve(root, dirEnt.name));
      }
    }
  }

  return files;
};

export = walk;
