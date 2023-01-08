// Accepts a string and returns it reversed
export const reverseString = (str) => {  
  if (typeof str !== 'string' || null) return ('');
  return [...str].reverse().join('');
}