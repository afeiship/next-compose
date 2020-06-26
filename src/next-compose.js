(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var RETURN_VALUE = function(value) { return value; };

  nx.compose = function () {
    var fns = nx.slice(arguments);

    if (fns.length === 0) return RETURN_VALUE;
    if (fns.length === 1) return fns[0];

    return fns.reduceRight(function (fn1, fn2) {
      return function () {
        return fn1(
          fn2.apply(null, arguments)
        );
      };
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compose;
  }
})();
