# hades

a tiny utility ☘️ supports downloading file from URL.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/103cuong/hades.svg?branch=master)](https://travis-ci.com/103cuong/hades)
![npm](https://img.shields.io/npm/v/hades-ts.svg)
![david](https://img.shields.io/david/103cuong/hades.svg)
[![Hits-of-Code](https://hitsofcode.com/github/103cuong/hades)](https://hitsofcode.com/view/github/103cuong/hades)
[![GitHub](https://img.shields.io/github/license/103cuong/hades.svg)](https://github.com/103cuong/hades/blob/master/LICENSE)

## 🧰 installation

```sh
yarn add hades-ts
```

## 🌳 usage

```ts
import { hades } from 'hades-ts';

await hades({
    url: 'https://raw.githubusercontent.com/103cuong/uid/master/uid.go',
    path: 'uid.go',
});
```

## 🚀 API

```ts
type Options = {
  url: string;
  path: string;
  timeout?: number;
};
hades(options: Options): Promise<unknown>
```

## 🤝 contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://github.com/103cuong"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Tran"/><br /><sub><b>Cuong Tran</b></sub></a><br /><a href="https://github.com/103cuong/hades/commits?author=103cuong" title="Code">💻</a> <a href="https://github.com/103cuong/hades/commits?author=103cuong" title="Documentation">📖</a> <a href="https://github.com/103cuong/hades/commits?author=103cuong" title="Tests">⚠️</a> <a href="#review-103cuong" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 📜 license

MIT © [Cuong Tran](https://github.com/103cuong)
