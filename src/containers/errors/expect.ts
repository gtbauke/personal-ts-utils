export class Expect extends Error {
  public constructor(message: string) {
    super(`Expected: ${message}`);
  }
}
