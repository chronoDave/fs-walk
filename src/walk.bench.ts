import { performance } from 'perf_hooks';
import path from 'path';

import walk from './walk';

const getAvg = (times: { ts: number, te: number }[]) => times
  .reduce((acc, { ts, te }) => acc + (te - ts), 0) / times.length;

const times = [];
const runs = 10;
let files = [];

for (let i = 0; i < runs; i += 1) {
  const ts = performance.now();
  files = walk(path.resolve(__dirname, '../'));
  const te = performance.now();

  times.push({ ts, te });
}

const avg = getAvg(times);
console.log([
  `avg: ${avg.toFixed(3)} ms (${runs} runs)`,
  `files: ${files.length}`,
  `speed: ${(avg / files.length).toFixed(3)} ms / file`
].join('\n'));
