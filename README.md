# next-compose
> Compose for next

## install:
```bash
npm install -S afeiship/next-compose --registry=https://registry.npm.taobao.org
```

## usage:
```js
import nxCompose from 'next-compose';

var fn1 = function (inStr) {
  return inStr.toUpperCase();
};

var fn2 = function (inStr) {
  return ['{', inStr, '}'].join('');
};

var fn3 = function (inStr){
  return '@' + inStr;
}

var cp = nxCompose(fn1, fn2, fn3);
var cp2 = nxCompose(fn3, fn2, fn1);

var rs = cp('afei');
// @{AFEI}

var rs2 = cp2('afei');
// {@AFEI}
```
