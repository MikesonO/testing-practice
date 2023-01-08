import { calculator } from "../scripts/calculator";

// Test 1 (Add)
test('calculator-add-1',()=>{
  expect(calculator.add(12,8)).toBe(20);
})

// Test 2 (Add)
test('calculator-add-2',()=>{
  expect(calculator.add(95.5,4.5)).toBe(100);
});

// Test 3 (Subtract)
test('calculator-subtract-1',()=>{
  expect(calculator.subtract(10,45)).toBe(-35);
});

// Test 4 (Subtract)
test('calculator-subtract-2',()=>{
  expect(calculator.subtract(1000,500.25)).toBe(499.75);
});

// Test 5 (Divide)
test('calculator-divide-1',()=>{
  expect(calculator.divide(100,4)).toBe(25);
});

// Test 6 (Divide)
test('calculator-divide-2',()=>{
  expect(calculator.divide(48,5)).toBe(9.6);
});

// Test 7 (Multiply)
test('calculator-multiply-1',()=>{
  expect(calculator.multiply(500,5)).toBe(2500);
});

// Test 8 (Multiply)
test('calculator-multiply-2',()=>{
  expect(calculator.multiply(7.5,20)).toBe(150);
});