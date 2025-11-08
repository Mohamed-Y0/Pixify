"use client";

import { Input } from "@/components/ui/input";
import { FileInfo } from "@/types/uploadingTypes";
import { Label } from "@radix-ui/react-label";
import { FileUp } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onChangeFile: Dispatch<SetStateAction<FileInfo | null>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

function UploadArea({ onChangeFile, inputRef }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const selectedFile = e.target.files[0];
    console.log(selectedFile);

    const newUrl = URL.createObjectURL(selectedFile);

    onChangeFile({
      id: crypto.randomUUID(),
      file: selectedFile,
      name: selectedFile.name,
      size: selectedFile.size,
      url: newUrl,
    });
  };

  return (
    <>
      <Label
        htmlFor="images"
        className="border-gray2 bg-bg-color text-gray1 flex min-h-50 flex-col items-center justify-center gap-5 rounded-md border border-dashed text-sm md:text-lg"
      >
        <FileUp className="text-gray2 size-12" />
        <span>Upload Your Photo</span>
        <Input
          ref={inputRef}
          type="file"
          id="images"
          className=""
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Label>
    </>
  );
}

export default UploadArea;
