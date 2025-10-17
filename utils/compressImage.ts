import { qualityToPngLevel } from "@/lib/qualityToPngLevel";
import sharp from "sharp";

export async function compressImage(
  buffer: Buffer,
  format: string,
  quality: number,
): Promise<Buffer> {
  const image = sharp(buffer);

  switch (format) {
    case "jpeg":
    case "jpg":
      return image.jpeg({ quality }).toBuffer();

    case "png":
      return image
        .png({ compressionLevel: qualityToPngLevel(quality) })
        .toBuffer();

    case "webp":
      return image.webp({ quality }).toBuffer();

    case "avif":
      return image.avif({ quality }).toBuffer();

    case "tiff":
      return image.tiff({ quality }).toBuffer();

    default:
      return image.jpeg({ quality }).toBuffer();
  }
}
