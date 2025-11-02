"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompressButton from "@/components/CompressButton";
import UploadArea from "@/components/UploadArea";
import UploadedPreview from "@/components/UploadedPreview";
import { useState, useEffect } from "react";
import CardOptions from "@/components/CardOptions";
import { FileInfo } from "@/types/uploadingTypes";

function UploadingCard() {
  const [file, setFile] = useState<FileInfo | null>(null);
  const [quality, setQuality] = useState<number>(75);
  console.log(file);

  useEffect(() => {
    if (!file) return;

    return () => {
      URL.revokeObjectURL(file.url);
    };
  }, [file]);

  function handleRemove() {
    setFile(null);
  }

  return (
    <div className="flex justify-center text-sm md:text-lg">
      <Card className="bg-gray5 w-full max-w-2xl divide-red-50 border-0">
        <CardHeader>Add an image to compress!</CardHeader>

        <CardContent className="flex flex-col gap-5">
          <UploadArea onChangeFile={setFile} />

          <div className="flex items-center gap-10">
            {file && (
              <UploadedPreview
                key={file.id}
                size={file.file.size}
                imageUrl={file.url}
                fileName={file.name}
                onRemove={handleRemove}
              />
            )}
            {file && (
              <CardOptions quality={quality} onQualityChange={setQuality} />
            )}
          </div>
        </CardContent>

        {file && <CompressButton file={file} quality={quality} />}
      </Card>
    </div>
  );
}

export default UploadingCard;
