"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompressButton from "@/components/CompressButton";
import UploadArea from "@/components/UploadArea";
import UploadedPreview from "@/components/UploadedPreview";
import CardOptions from "@/components/CardOptions";
import usePixify from "@/hooks/usePixify";
import CompressedPreview from "@/components/CompressedPreview";
import { FileInfo } from "@/types/uploadingTypes";

function UploadingCard() {
  const {
    file,
    setFile,
    fileRef,
    quality,
    setQuality,
    compressedUrl,
    loading,
    compress,
    error,
    resetAll,
  } = usePixify();

  return (
    <div className="flex justify-center text-sm md:text-lg">
      <Card className="bg-gray5 w-full max-w-2xl divide-red-50 border-0">
        <CardHeader>Add an image to compress!</CardHeader>

        <CardContent className="flex flex-col gap-5">
          <UploadArea onChangeFile={setFile} inputRef={fileRef} />

          {file && (
            <>
              <div className="flex items-center gap-10">
                <UploadedPreview
                  key={file.id}
                  size={file.file.size}
                  imageUrl={file.url}
                  fileName={file.name}
                  onRemove={resetAll}
                />

                <CardOptions quality={quality} onQualityChange={setQuality} />
              </div>

              <CompressButton
                file={file}
                quality={quality}
                loading={loading}
                error={error}
                compress={compress}
              />
            </>
          )}
          {compressedUrl && (
            <div className="flex max-w-40 gap-2.5 px-5">
              <CompressedPreview url={compressedUrl} file={file as FileInfo} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default UploadingCard;
