/* eslint-disable unicorn/no-null */
import { describe, it, expect } from "vitest";

import { Expect } from "./errors/expect";
import { UnwrappedNoneMaybe } from "./errors/unwrapped-none-maybe";
import { None, Some } from "./maybe";

describe("Maybe", () => {
  describe("constructors", () => {
    it("should create a Maybe value of the Some variant", () => {
      const m = Some(10);
      expect(m).toHaveProperty("value", 10);
    });

    it("should create a Maybe value of the None variant", () => {
      const m = None();
      expect(m).toHaveProperty("value", null);
    });
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

  describe("isSomeAnd", () => {
    it("should return true if value is Some and predicate is true", () => {
      const m = Some(10);
      expect(m.isSomeAnd((n) => n > 5)).toBe(true);
    });

    it("should return false if value is Some and predicate is false", () => {
      const m = Some(10);
      expect(m.isSomeAnd((n) => n < 5)).toBe(false);
    });

    it("should return false if value is None", () => {
      const m = None<number>();
      expect(m.isSomeAnd((n) => n > 5)).toBe(false);
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

  describe("unwrapOr", () => {
    it("should return the value if value is Some", () => {
      const m = Some(10);
      expect(m.unwrapOr(20)).toBe(10);
    });

    it("should return the default value if value is None", () => {
      const m = None();
      expect(m.unwrapOr(20)).toBe(20);
    });
  });

  describe("unwrapOrElse", () => {
    it("should return the value if value is Some", () => {
      const m = Some(10);
      expect(m.unwrapOrElse(() => 20)).toBe(10);
    });

    it("should return the result of the function if value is None", () => {
      const m = None();
      expect(m.unwrapOrElse(() => 20)).toBe(20);
    });
  });

  describe("expect", () => {
    it("should throw an error if value is None", () => {
      const m = None();

      function _expect(): Expect | null {
        try {
          m.expect("this is some!");
        } catch (error) {
          return error as Expect;
        }

        return null;
      }

      expect(() => m.expect("this is some!")).toThrowError(Expect);

      expect(_expect()).toHaveProperty(
        "message",
        expect.stringContaining("this is some!"),
      );
    });

    it("should return the value if it is Some", () => {
      const m = Some(10);

      expect(m.expect("this is some!")).toBe(10);
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

  describe("map", () => {
    it("should return a Some variant if value is Some", () => {
      const m = Some(10);
      expect(m.map((n) => n + 10)).toHaveProperty("value", 20);
    });

    it("should return a None variant if value is None", () => {
      const m = None<number>();
      expect(m.map((n) => n + 10)).toHaveProperty("value", null);
    });
  });

  describe("mapOr", () => {
    it("should return the result of the function if value is Some", () => {
      const m = Some(10);
      expect(m.mapOr((n) => n + 10, 20)).toBe(20);
    });

    it("should return the default value if value is None", () => {
      const m = None<number>();
      expect(m.mapOr((n) => n + 10, 20)).toBe(20);
    });
  });

  describe("mapOrElse", () => {
    it("should return the result of the function if value is Some", () => {
      const m = Some(10);
      expect(
        m.mapOrElse(
          (n) => n + 10,
          () => 20,
        ),
      ).toBe(20);
    });

    it("should return the result of the function if value is None", () => {
      const m = None<number>();
      expect(
        m.mapOrElse(
          (n) => n + 10,
          () => 20,
        ),
      ).toBe(20);
    });
  });
});
