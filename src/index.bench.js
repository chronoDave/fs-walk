const { performance } = require('perf_hooks');
const path = require('path');

const walk = require('..');

const getAvg = (times, n) => times
  .reduce((acc, { ts, te }) => acc + (te - ts), 0) / n;

const formatResult = ({
  type,
  avg,
  n,
  size
}) => [
  `type: ${type}`,
  `avg: ${avg.toFixed(3)} ms (${n} runs)`,
  `files: ${size}`,
  `speed: ${(avg / size).toFixed(3)} ms / file`
].join('\n');

const runSync = (root, n) => {
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
