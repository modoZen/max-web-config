# Max Web Config

A library to configure your development tools.

This library provides the Eslit, Prettier, Lint-staged and Jest configuration for proyects with
TypeScript, React, Vite, SWC and Dotenv.

# Table of Contents

- [Development tools](#development-tools)
- [Installation](#installation)

## Development tools

- Prettier
- Eslint
- Lint-staged and Husky
- Jest

## Installation

```
npm install --save-dev max-web-config
```

## Usage

### Prettier

```js
module.exports = require('max-web-config').getPrettierConfig();
```

### Eslint

```js
module.exports = require('max-web-config').getEslintConfig();
```

### Lint-staged

```js
module.exports = require('./src').getLintStagedConfig();
```

### Jest

```js
module.exports = require('./src').getJestConfig();
```
