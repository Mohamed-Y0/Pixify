import { compressImage } from "@/utils/compressImage";
import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const quality = formData.get("quality");

    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const image = sharp(buffer);

    const imageFormat = (await image.metadata()).format || "jpeg";

    const compressed = await compressImage(
      buffer,
      imageFormat,
      Number(quality),
    );

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
