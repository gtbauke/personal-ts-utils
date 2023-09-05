/* eslint-disable unicorn/no-null */
import { describe, it, expect } from "vitest";

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
});
