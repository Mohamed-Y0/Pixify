/**
 * Converts JPEG-style quality (1–100)
 * to PNG compressionLevel (0–9)
 */
export function qualityToPngLevel(quality: number): number {
  const clamped = Math.min(Math.max(quality, 1), 100);
  const level = Math.round(((100 - clamped) * 9) / 100);

  return level;
}
