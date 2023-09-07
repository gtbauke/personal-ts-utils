import { describe, it, expect } from "vitest";

import { Left, Right } from "./result";

describe("Result", () => {
  describe("constructors", () => {
    it("should create a Result value of the Left variant", () => {
      const l = Left("foo");

      expect(l).toHaveProperty("tag", "Left");
      expect(l).toHaveProperty("value", "foo");
    });

    it("should create a Result value of the Right variant", () => {
      const r = Right(10);

      expect(r).toHaveProperty("tag", "Right");
      expect(r).toHaveProperty("value", 10);
    });
  });

  describe("match", () => {
    it("should execute the onLeft function if the Result is a Left variant", () => {
      const l = Left<string, number>("foo");

      expect(
        l.match(
          (value) => value,
          (value) => value.toString(),
        ),
      ).toBe("foo");
    });

    it("should execute the onRight function if the Result is a Right variant", () => {
      const r = Right<string, number>(10);

      expect(
        r.match(
          (value) => value,
          (value) => value.toString(),
        ),
      ).toBe("10");
    });
  });
});
