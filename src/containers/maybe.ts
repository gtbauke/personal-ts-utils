/* eslint-disable unicorn/no-null */
import { Expect } from "./errors/expect";
import { UnwrappedNoneMaybe } from "./errors/unwrapped-none-maybe";

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
  public static None<A>(): Maybe<A> {
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
   * Checks if the `this` object if Some variant and the value satisfies the predicate.
   * @param predicate Predicate to be checked.
   * @returns True if `this` is a Some variant and the value satisfies the predicate, false otherwise.
   */
  public isSomeAnd(predicate: (value: T) => boolean): boolean {
    return this.value !== null && predicate(this.value);
  }

  /**
   * Checks if the `this` object if None variant.
   * @returns True if `this` is a None variant, false otherwise.
   */
  public isNone(): boolean {
    return this.value === null;
  }

  /**
   * Unwraps the value contained in the Maybe if it is a Some variant.
   * @throws {UnwrappedNoneMaybe} If the Maybe is a None variant.
   * @returns The value contained in the Maybe if it is a Some variant.
   */
  public unwrap(): T {
    if (!this.value) {
      throw new UnwrappedNoneMaybe();
    }

    return this.value;
  }

  /**
   * Unwraps the value contained in the Maybe if it is a Some variant. If the
   * Maybe is a None variant, the provided default value is returned.
   * @param value Default value to be returned if the Maybe is a None variant.
   * @returns The value contained in the Maybe if it is a Some variant, or the
   */
  public unwrapOr(value: T): T {
    return this.value ?? value;
  }

  /**
   * Unwraps the value contained in the Maybe if it is a Some variant. If the
   * Maybe is a None variant, the provided function is executed and its result
   * is returned.
   * @param function_ Function to be executed if the Maybe is a None variant.
   * @return The value contained in the Maybe if it is a Some variant, or the
   * result of the provided function.
   */
  public unwrapOrElse(function_: () => T): T {
    return this.value ?? function_();
  }

  /**
   * Maps the value contained in the Maybe if it is a Some variant. If the Maybe
   * is a None variant, the None variant is returned.
   * @param function_ Function to be executed if the Maybe is a Some variant.
   * @returns A Maybe that is a Some variant if the Maybe is a Some variant, or
   * a Maybe that is a None variant if the Maybe is a None variant.
   */
  public map(function_: (value: T) => T): Maybe<T> {
    return this.value ? Maybe.Some(function_(this.value)) : Maybe.None<T>();
  }

  /**
   * Maps the value contained in the Maybe if it is a Some variant. If the Maybe
   * is a None variant, the provided default value is returned.
   * @param function_ Function to be executed if the Maybe is a Some variant.
   * @param value Default value to be returned if the Maybe is a None variant.
   * @returns The value contained in the Maybe if it is a Some variant, or the
   * provided default value.
   */
  public mapOr(function_: (value: T) => T, value: T): T {
    return this.value ? function_(this.value) : value;
  }

  /**
   * Maps the value contained in the Maybe if it is a Some variant. If the Maybe
   * is a None variant, the provided function is executed and its result is
   * returned.
   * @param onSome Function to be executed if the Maybe is a Some variant.
   * @param onNone Function to be executed if the Maybe is a None variant.
   * @returns The value contained in the Maybe if it is a Some variant, or the
   * result of the provided function.
   */
  public mapOrElse(onSome: (value: T) => T, onNone: () => T): T {
    return this.value ? onSome(this.value) : onNone();
  }

  /**
   * Unwraps the value contained in the Maybe if it is a Some variant.
   * @param message Message to be displayed if the Maybe is a None variant.
   * @returns The value contained in the Maybe if it is a Some variant.
   * @throws {Expect} If the Maybe is a None variant.
   */
  public expect(message: string): T {
    if (!this.value) {
      throw new Expect(message);
    }

    return this.value;
  }

  /**
   * Runs a function depending on the variant of the Maybe.
   * @param onSome Function to run if the Maybe is a Some variant
   * @param onNone Function to run if the Maybe is a None variant
   * @returns The result of the function that was run
   */
  public match<R>(onSome: (value: T) => R, onNone: () => R): R {
    if (this.value === null) {
      return onNone();
    }

    return onSome(this.value);
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
export function None<T = unknown>(): Maybe<T> {
  return Maybe.None<T>();
}
