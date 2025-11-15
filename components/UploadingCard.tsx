"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompressButton from "@/components/CompressButton";
import UploadArea from "@/components/UploadArea";
import UploadedPreview from "@/components/UploadedPreview";
import CardOptions from "@/components/CardOptions";
import usePixify from "@/hooks/usePixify";
import CompressedPreview from "@/components/CompressedPreview";
import { FileInfo } from "@/types/uploadingTypes";
import { Separator } from "@/components/ui/separator";
import ClearButton from "@/components/ClearButton";

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
    format,
    setFormat,
  } = usePixify();

  return (
    <div className="flex justify-center text-sm md:text-lg">
      <Card className="w-full max-w-4xl">
        <CardHeader>Add an image to compress!</CardHeader>

        <CardContent className="flex flex-col gap-5">
          <UploadArea onChangeFile={setFile} inputRef={fileRef} />

          {file && (
            <>
              <UploadedPreview
                key={file.id}
                size={file.file.size}
                imageUrl={file.url}
                fileName={file.name}
                // onRemove={resetAll}
              />

              <Separator />

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:flex-nowrap sm:justify-between">
                <CardOptions
                  quality={quality}
                  onQualityChange={setQuality}
                  format={format}
                  onChangeFormat={setFormat}
                />

                <ClearButton onClear={resetAll} />

                <CompressButton
                  loading={loading}
                  error={error}
                  compress={compress}
                />
              </div>
            </>
          )}

          {compressedUrl && (
            <CompressedPreview url={compressedUrl} file={file as FileInfo} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default UploadingCard;
