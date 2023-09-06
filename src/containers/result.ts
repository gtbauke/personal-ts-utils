/**
 * Class that represents a value that can be one of two variants.
 * @template L Type of the value the Left variant contains.
 * @template R Type of the value the Right variant contains.
 */
export class Result<L, R> {
  private tag: "Left" | "Right";
  private value: L | R;

  private constructor(value: L | R, tag: "Left" | "Right") {
    this.value = value;
    this.tag = tag;
  }

  /**
   * Creates a Result value of the Left variant.
   * @param value The value that the container will assume.
   * @returns The value provided wrapped in a Result that is a Left variant.
   */
  public static Left<L, R>(value: L): Result<L, R> {
    return new Result<L, R>(value, "Left");
  }

  /**
   * Creates a Result value of the Right variant.
   * @param value The value that the container will assume.
   * @returns The value provided wrapped in a Result that is a Right variant.
   */
  public static Right<L, R>(value: R): Result<L, R> {
    return new Result<L, R>(value, "Right");
  }
}

/**
 * Creates a Result value of the Left variant.
 * @param value The value that the container will assume.
 * @returns The value provided wrapped in a Result that is a Left variant.
 */
export function Left<L, R>(value: L): Result<L, R> {
  return Result.Left(value);
}

/**
 * Creates a Result value of the Right variant.
 * @param value The value that the container will assume.
 * @returns The value provided wrapped in a Result that is a Right variant.
 */
export function Right<L, R>(value: R): Result<L, R> {
  return Result.Right(value);
}
