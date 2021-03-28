<div align="center">
  <h1>@chronocide/fs-walk</h1>

  <a href="https://www.npmjs.com/package/@chronocide/fs-walk">
    <img alt="npm" src="https://img.shields.io/npm/v/@chronocide/fs-walk?label=npm">
  </a>
  <a href="https://github.com/chronoDave/fs-walk/actions/workflows/ci.yml">
    <img alt="CI" src="https://github.com/chronoDave/fs-walk/workflows/@chronocide/fs-walk/badge.svg?branch=main">
  </a>
  <a href="https://bundlephobia.com/result?p=@chronocide/fs-walk@latest">
    <img alt="size" src="https://img.shields.io/bundlephobia/minzip/@chronocide/fs-walk@latest.svg">
  </a>

  <p><b>@chronocide/fs-walk</b>, a fast and tiny zero-depedency directory walker for <a href="https://nodejs.org/en/">node.js</a></p>
</div>

# Features

 - **Zero depedency**, only **552 B** minzipped.
 - **Modern**, written in TypeScript using the newest node features (`10.12+`)
 - **Fast**, `0.015 ms / file` on a _Samsung SSD 850 EVO_

## Installation

```
// Yarn
yarn add @chronocide/fs-walk

// Npm
npm i @chronocide/fs-walk
```

## Getting started

```JS
const walk = require('@chronocide/fs-walk'); // ES5
import walk from '@chronocide/fs-walk'; // ES6
import path from 'path';

const files = walk(path.resolve(__dirname)); // Return all absolute file paths in current directory
```

## Sync / Async

`@chronocide/fs-walk` uses an interative, synchronous approach to scanning directories. Speed and memory wise, the performance is [roughly](https://www.quora.com/Is-recursion-faster-than-loops) [the](https://stackoverflow.com/questions/15688019/recursion-versus-iteration) [same](https://github.com/chronoDave/fs-walk/issues/1) compared to an asyc recursive approach. Code should be simple and easy to use, so an iterative approach works better for this scenario.

## Donating

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y41E23T)
