"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompressButton from "@/components/CompressButton";
import UploadArea from "@/components/UploadArea";
import UploadedPreview from "@/components/UploadedPreview";
import { useState, useEffect } from "react";
import CardOptions from "@/components/CardOptions";
import { FileInfo } from "@/types/uploadingTypes";

function UploadingCard() {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [quality, setQuality] = useState<number>(75);
  console.log(files);

  useEffect(() => {
    return () => {
      files.forEach((f) => URL.revokeObjectURL(f.url));
    };
  }, [files]);

  const handleRemove = (id: string) => {
    setFiles((prev) => {
      const removed = prev.find((f) => f.id === id);
      if (removed) URL.revokeObjectURL(removed.url);
      return prev.filter((f) => f.id !== id);
    });
  };

  return (
    <div className="flex justify-center text-sm md:text-lg">
      <Card className="bg-gray5 w-full max-w-2xl divide-red-50 border-0">
        <CardHeader>Add an image to compress!</CardHeader>

        <CardContent className="flex flex-col gap-5">
          <UploadArea onChangeFile={setFiles} />

          <div className="grid grid-cols-2 gap-2.5">
            {files &&
              files.map((file) => (
                <UploadedPreview
                  key={file.id}
                  id={file.id}
                  imageUrl={file.url}
                  fileName={file.name}
                  onRemove={handleRemove}
                />
              ))}
          </div>
          {files.length > 0 && (
            <CardOptions quality={quality} onQualityChange={setQuality} />
          )}
        </CardContent>

        <CompressButton files={files} quality={quality} />
      </Card>
    </div>
  );
}

export default UploadingCard;
