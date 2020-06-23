# isenv

[![Maintainability](https://api.codeclimate.com/v1/badges/c4635c8f6d6f2913659c/maintainability)](https://codeclimate.com/github/nitra/isenv/maintainability)

## Installation

```bash
$ npm install @nitra/isenv --save
```

or

```bash
$ yarn add @nitra/isenv
```

## Usage with ES Modules

```javascript
"use strict";

import { isDev, isProd } from "@nitra/isenv";

{
  console.log("is production =", isProd);

  /* ... */

  if (isDev) {
    /* ... */
  }
}
```

## Usage with require

```javascript
"use strict";

const { isDev, isProd } = require("@nitra/isenv");

{
  console.log("is production =", isProd);

  /* ... */

  if (isDev) {
    /* ... */
  }
}
```

## Variables

Available vars

| Signature           | Description                    |
| ------------------- | ------------------------------ |
| `isDev -> boolean`  | True if the env it development |
| `isProd -> boolean` | True if the env is production  |
| `isTest -> boolean` | True if the env is test        |

## License

This software is released under the [MIT License](https://github.com/nitra/isenv/blob/master/LICENSE).
