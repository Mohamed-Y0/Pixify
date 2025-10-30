export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes.toFixed(2)} Bytes`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
