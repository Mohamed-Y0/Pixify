import { qualityToPngLevel } from "@/utils/qualityToPngLevel";
import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: Request) {
  try {
    // get the data from formData
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const quality = formData.get("quality") || 75;

    if (!file) return NextResponse.json({ error: "No files" }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const image = sharp(buffer);
    // in case the image is .jpg because sharp doesn't support .jpg type
    const imageFormat = (await image.metadata()).format || "jpeg";

    // Compress the image to the same format (change format is not available now)
    const compressed = await image
      .toFormat(imageFormat, {
        // Change 'quality' from string to number (all data in the formData is string)
        // This line work in case the format is not .png
        quality: Number(quality),

        // compressionLevel is for .png
        // We send the quality to helper function because compressionLevel is from 0 to 9
        // Side note: the default compressionLevel is 6 because it's more commonly use - According to sharp docs (v0.28.0)
        compressionLevel:
          imageFormat === "png"
            ? qualityToPngLevel(Number(quality))
            : undefined,

        // This option for .jpeg images - it's to reduce file size while maintaining quality
        // !! May increase processing time !!
        mozjpeg: true,
      })
      .toBuffer();

    return new NextResponse(new Uint8Array(compressed), {
      headers: { "Content-Type": `image/${imageFormat}` },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${(error as Error).message}` },
      { status: 500 },
    );
  }
}
