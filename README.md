<div align="center">
  <h1>@chronocide/fs-walk</h1>

  <a href="https://www.npmjs.com/package/@chronocide/fs-walk">
    <img alt="npm" src="https://img.shields.io/npm/v/@chronocide/fs-walk?label=npm">
  </a>
  <a href="https://github.com/chronoDave/fs-walk/actions/workflows/ci.yml">
    <img alt="CI" src="https://github.com/chronoDave/fs-walk/actions/workflows/ci.yml/badge.svg">
  </a> 
  <a href="https://bundlephobia.com/result?p=@chronocide/fs-walk@latest">
    <img alt="size" src="https://img.shields.io/bundlephobia/minzip/@chronocide/fs-walk@latest.svg">
  </a>

  <p><b>@chronocide/fs-walk</b>, a fast and tiny zero-depedency directory walker for <a href="https://nodejs.org/en/">node.js</a></p>
</div>

## Installation

```
$ npm i @chronocide/fs-walk
```

## Getting started

```JS
const walk = require('@chronocide/fs-walk'); // ES5
import walk from '@chronocide/fs-walk'; // ES6

import path from 'path';

const files = walk(path.resolve(__dirname)); // Return all absolute file paths in current directory
```

## Donating

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y41E23T)
