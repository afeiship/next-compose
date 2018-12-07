var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-compose');

describe('next/compose args:1/2/3/more', function () {

  it('nx.compose when args === 0', function () {
    var cp = nx.compose();
    var rs = cp(123);
    assert.equal(rs, 123);
  });


  it('nx.compose when args === 1', function () {
    var fn1 = function (inStr) {
      return inStr.toUpperCase();
    };

    var cp = nx.compose(fn1);
    var rs = cp('afei');
    // console.log(rs);

    assert.equal(rs, 'AFEI');
  });

  it('nx.compose when args > 1', function () {
    var fn1 = function (inStr) {
      return inStr.toUpperCase();
    };

    var fn2 = function (inStr) {
      return ['{', inStr, '}'].join('');
    };

    var fn3 = function (inStr){
      return '@' + inStr;
    }

    var cp = nx.compose(fn1, fn2, fn3);
    var cp2 = nx.compose(fn3, fn2, fn1);

    var rs = cp('afei');
    var rs2 = cp2('afei');

    assert.equal(rs, '@{AFEI}');
    assert.equal(rs2, '{@AFEI}');
  });




});
