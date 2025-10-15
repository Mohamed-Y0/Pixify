"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUp, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
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
          <Label
            htmlFor="images"
            className="border-gray2 bg-bg-color text-gray1 flex min-h-50 flex-col items-center justify-center gap-5 rounded-md border border-dashed text-sm md:text-lg"
          >
            <FileUp className="text-gray2 size-12" />
            <span>Upload Your Photo</span>
            <Input
              type="file"
              id="images"
              className=""
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Label>
          {imageUrl && (
            <div className="bg-gray3 flex max-h-20 w-fit items-center justify-between gap-2.5 rounded-lg p-2.5">
              <div className="flex items-center gap-2.5">
                <img
                  src={imageUrl}
                  alt={imageUrl}
                  className="h-10 w-10 rounded-sm"
                />
                <p className="w-fit max-w-40 text-sm">{file?.name}</p>
              </div>
              <div className="">
                <X
                  className="bg-gray5 hover:bg-gray4 cursor-pointer rounded-sm duration-200"
                  onClick={handleRemoveImage}
                />
              </div>
            </div>
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
