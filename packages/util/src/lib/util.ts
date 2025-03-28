export function getRandomItem<T>(arr: T[]): T {
  // TODO: Use a better random number generator
  return arr[Math.floor(Math.random() * arr.length)];
}
