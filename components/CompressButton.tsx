import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

type Props = {
  file: File | null;
  quality: number;
};

function CompressButton({ file, quality }: Props) {
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (compressedUrl) URL.revokeObjectURL(compressedUrl);
    };
  }, [compressedUrl]);

  const handleUpload = async () => {
    if (!file) return alert("Please choose a file first!");

    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("quality", String(quality));

    const response = await fetch("/api/compress", {
      method: "POST",
      body: imageData,
    });

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setCompressedUrl(url);
  };

  return (
    <>
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

      {compressedUrl && (
        <div className="mt-5 flex justify-center">
          <img
            src={compressedUrl}
            alt="Compressed result"
            className="max-h-60 rounded-md"
          />
        </div>
      )}
    </>
  );
}

export default CompressButton;
