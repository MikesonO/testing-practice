import { reverseString } from "../scripts/reverseString";

// Test 1
test('reverseString-1', ()=>{
  expect(reverseString('String')).toBe('gnirtS');
});

// Test 2
test('reverseString-2', ()=>{
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});

// Test 3
test('reverseString-3', ()=>{
  expect(reverseString(123)).toBe('');
});

// Test 4
test('reverseString-4', ()=>{
  expect(reverseString(null)).toBe('');
});