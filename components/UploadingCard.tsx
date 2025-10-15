"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import UploadArea from "@/components/UploadArea";
import UploadedPreview from "@/components/UploadedPreview";
import { useState, useEffect } from "react";

function UploadingCard() {
  const [file, setFile] = useState<File | null>(null);
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

  const handleUpload = () => {
    if (!file) return alert("Please choose a file first!");
    const formData = new FormData();
    console.log(file.name);
    console.log(file.type);
    formData.append("file", file);
    console.log(formData);
  };

  return (
    <div className="flex justify-center text-sm md:text-lg">
      <Card className="bg-gray5 w-full max-w-2xl divide-red-50 border-0">
        <CardHeader>Add an image to compress!</CardHeader>

        <CardContent className="flex flex-col gap-5">
          <UploadArea onChangeFile={setFile} />

          {imageUrl && (
            <UploadedPreview
              imageUrl={imageUrl}
              file={file}
              onRemove={handleRemoveImage}
            />
          )}
        </CardContent>

        <CardFooter>
          <div className="border-gray2 w-full border-t pt-5 text-end">
            <Button
              onClick={handleUpload}
              className="bg-blue1 hover:bg-blue-hover cursor-pointer p-6 tracking-wider"
            >
              Compress
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default UploadingCard;
