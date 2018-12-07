(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.compose = function () {
    var funcs = nx.slice(arguments);
    if (funcs.length === 0) {
      return nx.returnValue;
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduceRight(function (fn1, fn2) {
      return function () {
        // real function arguments:
        return fn1(fn2.apply(null, arguments));
      };
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compose;
  }

}());
