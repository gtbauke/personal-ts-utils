export function range(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min;
}

export function rangeInt(min: number, max: number): number {
  return Math.floor(range(min, max));
}
