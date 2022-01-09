import { calc } from './calculator';

it('plus', () => {
  const result = calc('3 + 2');
  expect(result).toEqual('3 + 2 = 5');
});
it('minus', () => {
  const result = calc('3 - 2');
  expect(result).toEqual('3 - 2 = 1');
});
it('multiply', () => {
  const result = calc('3 * 2');
  expect(result).toEqual('3 * 2 = 6');
});
it('division', () => {
  const result = calc('6 / 2');
  expect(result).toEqual('6 / 2 = 3');
});
