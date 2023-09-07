/**
 * Class that represents a value that can be one of two variants.
 * @template L Type of the value the Left variant contains.
 * @template R Type of the value the Right variant contains.
 */
export class Either<L, R> {
  protected tag: "Left" | "Right";
  protected value: L | R;

  public constructor(value: L | R, tag: "Left" | "Right") {
    this.value = value;
    this.tag = tag;
  }

  /**
   * Creates a Either value of the Left variant.
   * @param value The value that the container will assume.
   * @returns The value provided wrapped in a Either that is a Left variant.
   */
  public static Left<L, R>(value: L): Either<L, R> {
    return new Either<L, R>(value, "Left");
  }

  /**
   * Creates a Either value of the Right variant.
   * @param value The value that the container will assume.
   * @returns The value provided wrapped in a Either that is a Right variant.
   */
  public static Right<L, R>(value: R): Either<L, R> {
    return new Either<L, R>(value, "Right");
  }

  /**
   * Matches the variant of the Either and executes the corresponding function.
   * @param onLeft Function to be executed if the Either is a Left variant.
   * @param onRight Function to be executed if the Either is a Right variant.
   * @returns The value returned by the function that was executed.
   * @throws If the Either is neither a Left nor a Right variant.
   */
  public match<Result>(
    onLeft: (value: L) => Result,
    onRight: (value: R) => Result,
  ): Result {
    switch (this.tag) {
      case "Left": {
        return onLeft(this.value as L);
      }
      case "Right": {
        return onRight(this.value as R);
      }
      default: {
        throw new Error("Unreachable code");
      }
    }
  }
}

/**
 * Creates a Either value of the Left variant.
 * @param value The value that the container will assume.
 * @returns The value provided wrapped in a Either that is a Left variant.
 */
export function Left<L, R>(value: L): Either<L, R> {
  return Either.Left(value);
}

/**
 * Creates a Either value of the Right variant.
 * @param value The value that the container will assume.
 * @returns The value provided wrapped in a Either that is a Right variant.
 */
export function Right<L, R>(value: R): Either<L, R> {
  return Either.Right(value);
}
