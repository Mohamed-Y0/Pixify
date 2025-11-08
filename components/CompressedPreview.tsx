/* eslint-disable @next/next/no-img-element */
import { FileInfo } from "@/types/uploadingTypes";
import { getFileName } from "@/utils/getFileName";
import Link from "next/link";

type Props = {
  url: string;
  file: FileInfo;
};

function CompressedPreview({ url, file }: Props) {
  return (
    <div className="flex items-center gap-5">
      <img src={url} alt="Compressed result" className="max-h-30 rounded-md" />
      <div>
        <Link href={url} download={`${getFileName(file.name)}-pixify`}>
          Download
        </Link>
        <p>{file.name}</p>
      </div>
    </div>
  );
}

export default CompressedPreview;
