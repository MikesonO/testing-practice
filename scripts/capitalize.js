// Accepts a string and returns it with the first character capitalized
export const capitalize = (str) => {
  if (typeof str !== 'string' || null) return ('');
  return str.charAt(0).toUpperCase() + str.slice(1);
}
