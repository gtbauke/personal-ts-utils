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
});
