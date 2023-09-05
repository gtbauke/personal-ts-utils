import fc, { nat } from "fast-check";
import { describe, it, expect } from "vitest";

import { zip } from "./zip";

describe("zip", () => {
  it("should zip two arrays of the same length", () => {
    const first = fc.array(nat(), { minLength: 10, maxLength: 10 });
    const second = fc.array(nat(), { minLength: 10, maxLength: 10 });

    fc.assert(
      fc.property(first, second, (fs, ss) => {
        const zipped = zip(fs, ss);

        expect(zipped).toHaveLength(fs.length);
        expect(zipped).toHaveLength(ss.length);

        for (const [index, [f, s]] of zipped.entries()) {
          expect(f).toBe(fs[index]);
          expect(s).toBe(ss[index]);
        }
      }),
    );
  });

  it("should zip two arrays with different lengths, creating an array with the same length as the minimum length between the two", () => {
    const first = fc.array(nat(), { minLength: 20 });
    const second = fc.array(nat(), { minLength: 10 });

    fc.assert(
      fc.property(first, second, (fs, ss) => {
        const zipped = zip(fs, ss);
        const minLength = Math.min(fs.length, ss.length);

        expect(zipped).toHaveLength(minLength);

        for (const [index, [f, s]] of zipped.entries()) {
          expect(f).toBe(fs[index]);
          expect(s).toBe(ss[index]);
        }
      }),
    );
  });
});
