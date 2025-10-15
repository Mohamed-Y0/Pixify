"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { FileUp } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onChangeFile: Dispatch<SetStateAction<File | null>>;
};

function UploadArea({ onChangeFile }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFile(e.target.files?.[0] || null);
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
