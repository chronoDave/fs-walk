import fs from 'fs';
import path from 'path';

const walk = (dir: string) => {
  const getStack = (directory: string) => fs
    .readdirSync(directory)
    .map(entry => path.resolve(directory, entry));

  const files = [];
  const stack = getStack(dir);

  while (stack.length > 0) {
    const pathLike = stack.pop() as string; // https://github.com/microsoft/TypeScript/issues/30406

    if (fs.lstatSync(pathLike).isDirectory()) {
      stack.push(...getStack(pathLike));
    } else {
      files.push(pathLike);
    }
  }

  return files;
};

export = walk;
