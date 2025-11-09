export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes.toFixed(2)} Bytes`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function getFileName(fileName: string): string {
  return fileName.split(".").slice(0, -1).join(".");
}

/**
 * Converts JPEG-style quality (1–100)
 * to PNG compressionLevel (0–9)
 * Direct relationship: higher quality → higher PNG level
 */
export function qualityToPngLevel(quality: number): number {
  const clamped = Math.min(Math.max(Math.round(quality), 1), 100);
  const level = Math.ceil(((clamped - 1) * 9) / 99);
  return level;
}
