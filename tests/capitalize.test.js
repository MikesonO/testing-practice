import { capitalize } from "../scripts/capitalize"

// Test 1
test('capitalizeWord-1', ()=>{
  expect(capitalize('testing')).toBe('Testing');
});

// Test 2
test('capitalizeWord-2', ()=>{
  expect(capitalize('hello World')).toBe('Hello World');
});

// Test 3
test('capitalizeWord-3', ()=>{
  expect(capitalize(123)).toBe('');
});

// Test 4
test('capitalizeWord-4', ()=>{
  expect(capitalize(null)).toBe('');
});
