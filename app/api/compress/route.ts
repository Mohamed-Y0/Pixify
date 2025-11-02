import { qualityToPngLevel } from "@/utils/qualityToPngLevel";
import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const quality = formData.get("quality") || 75;

    if (!file) return NextResponse.json({ error: "No files" }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const image = sharp(buffer);
    const imageFormat = (await image.metadata()).format || "jpeg";

    const compressed = await image
      .toFormat(imageFormat, {
        quality: Number(quality),
        compressionLevel:
          imageFormat === "png"
            ? qualityToPngLevel(Number(quality))
            : undefined,
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
