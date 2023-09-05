/* eslint-disable unicorn/no-null */

/**
 * Class that represents the absence or presence of a value.
 * @template T Type of the value the contains contains.
 */
export class Maybe<T> {
  private readonly value: T | null;

  private constructor(value: T | null = null) {
    this.value = value;
  }

  /**
   * Creates a Some variant of the Maybe class with the provided value
   * @param value The value that the container will assume
   * @returns The value provided wrapped in a Maybe that is a Some variant
   */
  public static Some<A>(value: A): Maybe<A> {
    return new Maybe(value);
  }

  /**
   * Create a None variant of the Maybe class
   * @returns A Maybe that is a None variant
   */
  public static None(): Maybe<unknown> {
    return new Maybe();
  }

  /**
   * Checks if the `this` object if Some variant.
   * @returns True if `this` is a Some variant, false otherwise.
   */
  public isSome(): boolean {
    return this.value !== null;
  }

  /**
   * Checks if the `this` object if None variant.
   * @returns True if `this` is a None variant, false otherwise.
   */
  public isNone(): boolean {
    return this.value === null;
  }
}

/**
 * Creates a Some variant of the Maybe class with the provided value
 * @param value The value that the container will assume
 * @returns The value provided wrapped in a Maybe that is a Some variant
 */
export function Some<T>(value: T): Maybe<T> {
  return Maybe.Some(value);
}

/**
 * Create a None variant of the Maybe class
 * @returns A Maybe that is a None variant
 */
export function None(): Maybe<unknown> {
  return Maybe.None();
}
