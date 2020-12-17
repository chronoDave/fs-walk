# fs-walk

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE)

A zero-depedency directory walker for [node.js](https://nodejs.org/en/).

## Installation

```
// Yarn
yarn add leaf-db

// Npm
npm i leaf-db
```

## Getting started

```JS
// ES5
const walk = require('@chronocide/fs-walk').default;
// ES6
import walk from '@chronocide/fs-walk';

const files = walk('some/directory')
```

## Testing

```
yarn test

$ tsc --project tsconfig.production.json && ts-node src/walk.test.ts
TAP version 13
# [walk] should return files from directory
ok 1 should be strictly equal
# [walk] should return files from directory, recursively
ok 2 should be strictly equal

1..2
# tests 2
# pass  2

# ok

Done in 3.87s.
```

## Benchmark

```
yarn bench

$ tsc --project tsconfig.production.json && ts-node src/walk.bench.ts
avg: 953.242 ms (10 runs)
files: 8680
speed: 0.110 ms / file
Done in 11.06s.
```

## License

[MIT License](./LICENSE)

## Donating

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y41E23T)
