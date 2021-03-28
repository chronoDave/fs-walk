import { performance } from 'perf_hooks';
import path from 'path';

import walk from '..';

const getAvg = (times: { ts: number, te: number }[], n: number) => times
  .reduce((acc, { ts, te }) => acc + (te - ts), 0) / n;

const formatResult = ({
  type,
  avg,
  n,
  size
}: {
  type: string,
  avg: number,
  n: number,
  size: number
}) => [
  `type: ${type}`,
  `avg: ${avg.toFixed(3)} ms (${n} runs)`,
  `files: ${size}`,
  `speed: ${(avg / size).toFixed(3)} ms / file`
].join('\n');

const runSync = (root: string, n: number) => {
  const times = [];

  let files = [];
  for (let i = 0; i < n; i += 1) {
    const ts = performance.now();
    files = walk(root);
    const te = performance.now();

    times.push({ ts, te, size: files.length });
  }

  return formatResult({
    type: 'sync',
    avg: getAvg(times, n),
    n,
    size: files.length
  });
};

console.log(runSync(
  path.resolve(__dirname, '../'),
  100
));
