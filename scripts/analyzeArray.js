// Accepts an array of numbers and returns an object with the following properties: average, min, max, and length

export const analyzeArray = (arr) => {
  // Check if input is an array and if it contains only numeric values
  if (!Array.isArray(arr) || arr.some(isNaN)) return 'Invalid';

  let average = arr.reduce((total, number) => {
    return (total + number)
  });

  average = average / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  const object = {
    average: average,
    min: min,
    max: max,
    length: length
  }
  
  return object
}
