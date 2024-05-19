export function createRandomUniqueId(): string {
  return new Date().getTime().toString(36);
}
