import '@testing-library/jest-dom';
import { howManyNumbersInNumber } from '../../src/utility/math';

describe('math', () => {
  it('how many times a number fits in a number', () => {
    expect(howManyNumbersInNumber(1, 2)).toEqual(0);
    expect(howManyNumbersInNumber(1.5, 1)).toEqual(1);
    expect(howManyNumbersInNumber(2, 1)).toEqual(2);
    expect(howManyNumbersInNumber(400, 360)).toEqual(1);
    expect(howManyNumbersInNumber(-400, 360)).toEqual(-1);
    expect(howManyNumbersInNumber(100, 360)).toEqual(0);
    expect(howManyNumbersInNumber(-100, 360)).toEqual(0);
  });
});
