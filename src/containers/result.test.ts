/* eslint-disable unicorn/prevent-abbreviations */
import { describe, it, expect } from "vitest";

import { Err, Ok } from "./result";

describe("Result", () => {
  describe("constructors", () => {
    it("should create a Result value of the Ok variant", () => {
      const l = Ok(1);

      expect(l).toHaveProperty("tag", "Left");
      expect(l).toHaveProperty("value", 1);
    });

    it("should create a Result value of the Err variant", () => {
      const r = Err(new Error("test"));

      expect(r).toHaveProperty("tag", "Right");
      expect(r).toHaveProperty("value", new Error("test"));
    });
  });

  describe("try", () => {
    it("should unwrap the value of the container if it is a Left variant", () => {
      const l = Ok(1);

      expect(l.try()).toBe(1);
    });

    it("should throw the value contained in the Error variant if the container is not a Left variant", () => {
      const r = Err(new Error("test"));

      expect(() => r.try()).toThrow(new Error("test"));
    });
  });
});
