#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports basic arithmetic operations:
 *   - addition
 *   - subtraction
 *   - multiplication
 *   - division
 * Extended operations:
 *   - modulo
 *   - power (exponentiation)
 *   - squareRoot
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws on division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws on division by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot take square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Usage: node calculator.js <operation> <num1> [num2]');
    console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    process.exit(1);
  }

  const [op, ...nums] = args;
  const [a, b] = nums.map(Number);

  try {
    let result;
    switch (op) {
      case 'add':        result = add(a, b); break;
      case 'subtract':   result = subtract(a, b); break;
      case 'multiply':   result = multiply(a, b); break;
      case 'divide':     result = divide(a, b); break;
      case 'modulo':     result = modulo(a, b); break;
      case 'power':      result = power(a, b); break;
      case 'sqrt':       result = squareRoot(a); break;
      default:
        console.error(`Unknown operation: ${op}`);
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
