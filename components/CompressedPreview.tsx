/* eslint-disable @next/next/no-img-element */
import { getFileName } from "@/utils/getFileName";
import Link from "next/link";

type Props = {
  url: string;
  name: string;
};

function CompressedPreview({ url, name }: Props) {
  return (
    <div className="flex items-center gap-5">
      <img src={url} alt="Compressed result" className="max-h-30 rounded-md" />
      <div>
        <Link href={url} download={`${getFileName(name)}-pixify`}>
          Download
        </Link>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CompressedPreview;
