// test/index.test.js

const { compact } = require('../src/index');

describe('compact function', () => {
  test('removes all falsy values from an array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('handles array with only falsy values', () => {
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual([]);
  });

  test('handles empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('keeps truthy values that are not strictly true', () => {
    expect(compact(['0', 'false', true, [], {}])).toEqual(['0', 'false', true, [], {}]);
  });
});
