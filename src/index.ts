import fs from 'fs';
import path from 'path';

export default (root: string) => {
  const getStack = (dir: string) => fs.readdirSync(dir, { withFileTypes: true })
    .map(dirEnt => ({ dirPath: path.resolve(dir, dirEnt.name), dirEnt }));

  const stack = getStack(root);
  const files = [];

  while (stack.length > 0) {
    const item = stack.pop();

    if (item) {
      const { dirPath, dirEnt } = item;

      if (dirEnt.isDirectory()) {
        stack.push(...getStack(dirPath));
      } else {
        files.push(dirPath);
      }
    }
  }

  return files;
};
