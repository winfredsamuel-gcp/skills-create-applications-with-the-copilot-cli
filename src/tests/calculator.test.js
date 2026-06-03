const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator - Basic Operations', () => {
  // Addition
  describe('add()', () => {
    test('adds two positive numbers', () => expect(add(2, 3)).toBe(5));
    test('adds a positive and negative number', () => expect(add(5, -3)).toBe(2));
    test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
    test('adds zero', () => expect(add(7, 0)).toBe(7));
    test('adds decimals', () => expect(add(1.5, 2.5)).toBeCloseTo(4));
  });

  // Subtraction
  describe('subtract()', () => {
    test('subtracts two positive numbers', () => expect(subtract(10, 4)).toBe(6));
    test('subtracts a larger from smaller', () => expect(subtract(3, 7)).toBe(-4));
    test('subtracts zero', () => expect(subtract(5, 0)).toBe(5));
    test('subtracts negative number', () => expect(subtract(5, -3)).toBe(8));
  });

  // Multiplication
  describe('multiply()', () => {
    test('multiplies two positive numbers', () => expect(multiply(3, 4)).toBe(12));
    test('multiplies by zero', () => expect(multiply(5, 0)).toBe(0));
    test('multiplies two negative numbers', () => expect(multiply(-2, -3)).toBe(6));
    test('multiplies positive and negative', () => expect(multiply(4, -3)).toBe(-12));
    test('multiplies decimals', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
  });

  // Division
  describe('divide()', () => {
    test('divides two positive numbers', () => expect(divide(10, 2)).toBe(5));
    test('divides resulting in decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
    test('divides negative numbers', () => expect(divide(-12, 3)).toBe(-4));
    test('throws on division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});

describe('Calculator - Extended Operations', () => {
  // Modulo
  describe('modulo()', () => {
    test('returns remainder of 10 % 3', () => expect(modulo(10, 3)).toBe(1));
    test('returns 0 when evenly divisible', () => expect(modulo(8, 4)).toBe(0));
    test('works with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
    test('throws on modulo by zero', () => {
      expect(() => modulo(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // Power
  describe('power()', () => {
    test('2 raised to power 3 equals 8', () => expect(power(2, 3)).toBe(8));
    test('any number to power 0 equals 1', () => expect(power(5, 0)).toBe(1));
    test('number to power 1 equals itself', () => expect(power(7, 1)).toBe(7));
    test('handles negative exponent', () => expect(power(2, -1)).toBeCloseTo(0.5));
    test('handles fractional exponent (square root)', () => expect(power(9, 0.5)).toBeCloseTo(3));
  });

  // Square Root
  describe('squareRoot()', () => {
    test('square root of 9 is 3', () => expect(squareRoot(9)).toBeCloseTo(3));
    test('square root of 2 is approximately 1.414', () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));
    test('square root of 0 is 0', () => expect(squareRoot(0)).toBe(0));
    test('square root of 1 is 1', () => expect(squareRoot(1)).toBe(1));
    test('throws for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot take square root of a negative number');
    });
  });
});
