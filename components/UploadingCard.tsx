"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompressButton from "@/components/CompressButton";
import UploadArea from "@/components/UploadArea";
import UploadedPreview from "@/components/UploadedPreview";
import { useState, useEffect } from "react";
import CardOptions from "@/components/CardOptions";

function UploadingCard() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<number>(75);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;

    const newUrl = URL.createObjectURL(file);
    setImageUrl(newUrl);

    return () => {
      URL.revokeObjectURL(newUrl);
    };
  }, [file]);

  const handleRemoveImage = () => {
    setFile(null);
    setImageUrl(null);
  };

  return (
    <div className="flex justify-center text-sm md:text-lg">
      <Card className="bg-gray5 w-full max-w-2xl divide-red-50 border-0">
        <CardHeader>Add an image to compress!</CardHeader>

        <CardContent className="flex flex-col gap-5">
          <UploadArea onChangeFile={setFile} />

          {imageUrl && (
            <div className="flex items-center justify-between gap-8">
              <UploadedPreview
                imageUrl={imageUrl}
                file={file}
                onRemove={handleRemoveImage}
              />
              <CardOptions quality={quality} onQualityChange={setQuality} />
            </div>
          )}
        </CardContent>

        <CompressButton file={file} quality={quality} />
      </Card>
    </div>
  );
}

export default UploadingCard;
