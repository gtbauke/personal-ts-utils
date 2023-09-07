/* eslint-disable unicorn/prevent-abbreviations */
import { Either } from "./either";

/**
 * A container that represents a value that can be either an Ok variant or an Err variant.
 */
export class Result<L, E extends Error> extends Either<L, E> {
  /**
   * Creates a Result value of the Left variant.
   * @param value The value that the container will assume.
   * @returns The value provided wrapped in a Result that is a Left variant.
   */
  public static Ok<L, E extends Error>(value: L): Result<L, E> {
    return new Result<L, E>(value, "Left");
  }

  /**
   * Creates a Result value of the Right variant.
   * @param value The value that the container will assume.
   * @returns The value provided wrapped in a Result that is a Right variant.
   */
  public static Err<L, E extends Error>(value: E): Result<L, E> {
    return new Result<L, E>(value, "Right");
  }

  /**
   * Unwraps the value of the container if it is a Left variant.
   * @returns The value contained in the Left variant.
   * @throws The value contained in the Error variant if the container is not a Left variant.
   */
  public try(): L {
    try {
      if (this.tag === "Left") {
        return this.value as L;
      }

      throw this.value as E;
    } catch (error) {
      if (process.env.NODE_ENV !== "test") {
        console.error(error);
      }

      throw error;
    }
  }
}

/**
 * Creates a Result value of the Left variant.
 * @param value The value that the container will assume.
 * @returns The value provided wrapped in a Result that is a Left variant.
 */
export function Ok<L, E extends Error>(value: L): Result<L, E> {
  return Result.Ok(value);
}

/**
 * Creates a Result value of the Right variant.
 * @param value The value that the container will assume.
 * @returns The value provided wrapped in a Result that is a Right variant.
 */
export function Err<L, E extends Error>(value: E): Result<L, E> {
  return Result.Err(value);
}
