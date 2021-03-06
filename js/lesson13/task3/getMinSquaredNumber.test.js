import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('get null because of empty array', () => {
  const min = getMinSquaredNumber([]);
  expect(min).toEqual(null);
});

it('get null because of string', () => {
  const min = getMinSquaredNumber('string');
  expect(min).toEqual(null);
});

it('min number', () => {
  const min = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(min).toEqual(4);
});
