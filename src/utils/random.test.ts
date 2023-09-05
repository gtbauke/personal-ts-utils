import { describe, it, expect } from "vitest";

import { range, rangeInt } from "./random";

describe("range", () => {
  it("should return a number between min and max", () => {
    const min = 1;
    const max = 10;
    const result = range(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("should return a number between min and max", () => {
    const min = 1;
    const max = 10;
    const result = rangeInt(min, max);

    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
