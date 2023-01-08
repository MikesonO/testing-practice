import { caesarCipher } from "../scripts/caesarCipher";

// Test 1 - Lowercase
test(`Cipher-1`, () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

// Test 2 - Uppercase
test(`Cipher-2`, () => {
  expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1)).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA');
});

// Test 3 - Ignore special characters
test('Cipher-3', () => {
  expect(caesarCipher('!@#$%&', 1)).toBe('!@#$%&');
});

// Test 4 - Shift string by 5
test('Cipher-4', () => {
  expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi');
});