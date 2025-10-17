import { qualityToPngLevel } from "@/utils/qualityToPngLevel";
import { describe, expect, test } from "@jest/globals";

describe("qualityToPngLevel", () => {
  test("returns 0 for 100 quality", () => {
    expect(qualityToPngLevel(100)).toBe(0);
  });

  test("returns 5 for 50 quality", () => {
    expect(qualityToPngLevel(50)).toBe(5);
  });

  test("returns 9 for 1 quality", () => {
    expect(qualityToPngLevel(1)).toBe(9);
  });

  test("clamps values below 1 to 1", () => {
    expect(qualityToPngLevel(-10)).toBe(9);
  });

  test("clamps values above 100 to 100", () => {
    expect(qualityToPngLevel(200)).toBe(0);
  });
});
