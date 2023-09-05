type Tuple<T, U> = [T, U];

/**
 * Zips two arrays together, returning a new array where the ith element is a tuple containing
 * the ith element of the `as` array and the ith element of the `bs` array
 * @param as First array
 * @param bs Second array
 * @returns An array where each element is a tuple of the corresponding elements of `as` and `bs`
 */
export function zip<T, U>(as: T[], bs: U[]): Array<Tuple<T, U>> {
  const minLength = Math.min(as.length, bs.length);
  const final: Array<Tuple<T, U>> = [];

  for (let index = 0; index < minLength; index++) {
    final.push([as[index], bs[index]]);
  }

  return final;
}
