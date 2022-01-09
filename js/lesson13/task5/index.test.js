import { test } from 'picomatch';
import { getAdults } from './getAdults';
import { reverseArray } from './reverseArray';
import { withdraw } from './withdraw';

it('everyone who is 18 years old', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('56 years old', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('empty array', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
/* ///
two test
/// */
it('revers 1', () => {
  const result = reverseArray([2, 4, 6, 7, 9, 5, 43]);
  expect(result).toEqual([43, 5, 9, 7, 6, 4, 2]);
});
it('revers 2', () => {
  const result = reverseArray([4, 6, 9, 5, 6, 7, 4]);
  expect(result).toEqual([4, 7, 6, 5, 9, 6, 4]);
});
it('revers !Array.isArray', () => {
  const result = reverseArray('string');
  expect(result).toEqual(null);
});
/* ///
three test
/// */
it('get balance 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('get balance -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
it('get balance 400', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000);
  expect(result).toEqual(400);
});
