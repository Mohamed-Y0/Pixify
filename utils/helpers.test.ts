import { qualityToPngLevel } from "@/utils/helpers";
import { describe, expect, test } from "@jest/globals";

describe("qualityToPngLevel", () => {
  test("returns 9 for 100 quality", () => {
    expect(qualityToPngLevel(100)).toBe(9);
  });

  test("returns 5 for 50 quality", () => {
    expect(qualityToPngLevel(50)).toBe(5);
  });

  test("returns 0 for 1 quality", () => {
    expect(qualityToPngLevel(1)).toBe(0);
  });

  test("clamps values below 1 to 0", () => {
    expect(qualityToPngLevel(-10)).toBe(0);
  });

  test("clamps values above 100 to 9", () => {
    expect(qualityToPngLevel(200)).toBe(9);
  });
});
