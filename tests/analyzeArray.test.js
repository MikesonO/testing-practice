import { analyzeArray } from "../scripts/analyzeArray";

const arr = [1,2,3,4,5];

// Test 1 - Average
test(`analyzeArray-1`, () => {
  expect(analyzeArray(arr).average).toBe(3);
});

// Test 2 - Min
test(`analyzeArray-2`, () => {
  expect(analyzeArray(arr).min).toBe(1);
});

// Test 3 - Max
test(`analyzeArray-3`, () => {
  expect(analyzeArray(arr).max).toBe(5);
});

// Test 4 - Length
test(`analyzeArray-4`, () => {
  expect(analyzeArray(arr).length).toBe(5);
});

// Test 5 - Not an array
test(`analyzeArray-5`, () => {
  expect(analyzeArray(2)).toBe('Invalid');
});

// Test 5 - Not an array of numeric values
test(`analyzeArray-5`, () => {
  expect(analyzeArray(['hello','world'])).toBe('Invalid');
});