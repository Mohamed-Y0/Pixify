import { formatFileSize } from "@/utils/helpers";
import Image from "next/image";

type Props = {
  imageUrl: string;
  fileName: string;
  size: number;
};

function UploadedPreview({ imageUrl, fileName, size }: Props) {
  console.log(size);
  return (
    <div className="relative flex w-1/2 items-center justify-between gap-2.5 rounded-lg border pr-2">
      <div className="flex h-15 items-center gap-2.5 overflow-hidden rounded-lg">
        <Image height={100} width={100} src={imageUrl} alt={imageUrl} />
        <div className="flex flex-col truncate">
          <p className="text-sm">{fileName}</p>
          <span className="text-[10px]">{formatFileSize(size)}</span>
        </div>
      </div>
    </div>
  );
}

export default UploadedPreview;
