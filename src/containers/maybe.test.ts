/* eslint-disable unicorn/no-null */
import { describe, it, expect } from "vitest";

import { UnwrappedNoneMaybe } from "./errors/unwrapped-none-maybe";
import { None, Some } from "./maybe";

describe("Maybe", () => {
  it("should create a Maybe value of the Some variant", () => {
    const m = Some(10);
    expect(m).toHaveProperty("value", 10);
  });

  it("should create a Maybe value of the None variant", () => {
    const m = None();
    expect(m).toHaveProperty("value", null);
  });

  describe("isSome", () => {
    it("should return true if value is Some", () => {
      const m = Some(10);
      expect(m.isSome()).toBe(true);
    });

    it("should return false if value is None", () => {
      const m = None();
      expect(m.isSome()).toBe(false);
    });
  });

  describe("isNone", () => {
    it("should return true if value is None", () => {
      const m = None();
      expect(m.isNone()).toBe(true);
    });

    it("should return false if value is Some", () => {
      const m = Some(10);
      expect(m.isNone()).toBe(false);
    });
  });

  describe("unwrap", () => {
    it("should return the value if value is Some", () => {
      const m = Some(10);
      expect(m.unwrap()).toBe(10);
    });

    it("should throw an error if value is None", () => {
      const m = None();
      expect(() => m.unwrap()).toThrowError(UnwrappedNoneMaybe);
    });
  });

  describe("match", () => {
    it("should return the stringified value if value is Some", () => {
      const m = Some(10);
      expect(
        m.match(
          (n) => n.toString(),
          () => "none",
        ),
      ).toBe("10");
    });

    it("should return the stringified value if value is None", () => {
      const m = None<number>();
      expect(
        m.match(
          (n) => n.toString(),
          () => "none",
        ),
      ).toBe("none");
    });
  });
});
