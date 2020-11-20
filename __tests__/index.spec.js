(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.compose when args === 0', function () {
      var cp = nx.compose();
      var rs = cp(123);
      expect(rs).toBe(123);
    });

    test('nx.compose when args === 1', function () {
      var fn1 = function (inStr) {
        return inStr.toUpperCase();
      };

      var cp = nx.compose(fn1);
      var rs = cp('afei');
      expect(rs).toBe('AFEI');
    });

    test('nx.compose when args > 1', function () {
      var fn1 = function (inStr) {
        return inStr.toUpperCase();
      };

      var fn2 = function (inStr) {
        return ['{', inStr, '}'].join('');
      };

      var fn3 = function (inStr) {
        return '@' + inStr;
      }

      var cp = nx.compose(fn1, fn2, fn3);
      var cp2 = nx.compose(fn3, fn2, fn1);

      var rs = cp('afei');
      var rs2 = cp2('afei');

      expect(rs).toBe('@{AFEI}');
      expect(rs2).toBe( '{@AFEI}');
    });

  });
})();
