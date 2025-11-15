/* eslint-disable @next/next/no-img-element */
import { Separator } from "@/components/ui/separator";
import { FileInfo } from "@/types/uploadingTypes";
import { formatFileSize, getFileName } from "@/utils/helpers";
import Link from "next/link";

type Props = {
  url: string;
  file: FileInfo;
};

function CompressedPreview({ url, file }: Props) {
  return (
    <>
      <Separator />

      <div className="flex max-h-15 w-1/2 items-center gap-2.5 overflow-hidden rounded-lg border py-5">
        <img height={100} width={100} src={url} alt="Compressed result" />

        <div className="flex flex-col truncate">
          <p className="text-sm">{getFileName(file.name)}</p>
          <span className="text-[10px]">{formatFileSize(file.size)}</span>
        </div>

        <Link href={url} download={`${getFileName(file.name)}-pixify`}>
          Download
        </Link>
      </div>
    </>
  );
}

export default CompressedPreview;
