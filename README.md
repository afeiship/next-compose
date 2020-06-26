# next-compose
> Compose for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-compose
```

## usage
```js
import '@feizheng/next-compose';

const fn1 = function (inStr) {
  return inStr.toUpperCase();
};

const fn2 = function (inStr) {
  return ['{', inStr, '}'].join('');
};

const fn3 = function (inStr){
  return '@' + inStr;
}

const cp = nx.compose(fn1, fn2, fn3);
const cp2 = nx.compose(fn3, fn2, fn1);

const rs = cp('afei');
// @{AFEI}

const rs2 = cp2('afei');
// {@AFEI}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-compose/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-compose
[version-url]: https://npmjs.org/package/@feizheng/next-compose

[license-image]: https://img.shields.io/npm/l/@feizheng/next-compose
[license-url]: https://github.com/afeiship/next-compose/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-compose
[size-url]: https://github.com/afeiship/next-compose/blob/master/dist/next-compose.min.js

[download-image]: https://img.shields.io/npm/dw/@feizheng/next-compose
[download-url]: https://www.npmjs.com/package/@feizheng/next-compose
