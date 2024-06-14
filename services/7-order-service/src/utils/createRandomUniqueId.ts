export function createRandomNumber(): number {
  const min = 100000000; // Minimum value for a 9-digit number
  const max = 999999999; // Maximum value for a 9-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
