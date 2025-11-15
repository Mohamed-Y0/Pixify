/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileInfo } from "@/types/uploadingTypes";
import { formatFileSize, getFileName } from "@/utils/helpers";
import { LucideDownload } from "lucide-react";
import Link from "next/link";

type Props = {
  url: string;
  file: FileInfo;
};

function CompressedPreview({ url, file }: Props) {
  return (
    <>
      <Separator />
      <div className="flex items-center justify-between">
        <div className="flex max-h-15 w-1/2 items-center gap-2.5 overflow-hidden rounded-lg border py-5">
          <img height={100} width={100} src={url} alt="Compressed result" />
          <div className="flex flex-col truncate">
            <p className="text-sm">{getFileName(file.name)}</p>
            {/* <span className="text-[10px]">{formatFileSize(file.size)}</span> */}
          </div>
        </div>

        <Button asChild>
          <Link href={url} download={`${getFileName(file.name)}-pixify`}>
            <LucideDownload className="size-5" />
          </Link>
        </Button>
      </div>
    </>
  );
}

export default CompressedPreview;
