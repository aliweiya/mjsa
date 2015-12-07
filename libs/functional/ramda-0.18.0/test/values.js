var R = require('..');
var eq = require('./shared/eq');


describe('values', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it("returns an array of the given object's values", function() {
    var vs = R.values(obj).sort();
    var ts = [[1, 2, 3], 100, 'D', {x: 200, y: 300}, null, undefined];
    eq(vs.length, ts.length);
    eq(vs[0], ts[0]);
    eq(vs[1], ts[1]);
    eq(vs[2], ts[2]);
    eq(vs[3], ts[3]);
    eq(vs[4], ts[4]);
    eq(vs[5], ts[5]);

    eq(R.values({
      /* jshint -W001 */
      hasOwnProperty: false
      /* jshint +W001 */
    }), [false]);
  });

  it("does not include the given object's prototype properties", function() {
    eq(R.values(cobj), [100, 200]);
  });

  it('works for primitives', function() {
    /* jshint elision: true */
    var result = R.map(function(val) {
      return R.keys(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    eq(result, R.repeat([], 10));
  });
});