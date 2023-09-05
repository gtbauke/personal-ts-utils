export class UnwrappedNoneMaybe extends Error {
  public constructor() {
    super("Cannot unwrap None variant of Maybe");
  }
}
