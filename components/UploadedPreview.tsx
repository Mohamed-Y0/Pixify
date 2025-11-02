import { formatFileSize } from "@/utils/formatFileSize";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  imageUrl: string;
  fileName: string;
  size: number;
  onRemove: () => void;
};

function UploadedPreview({ imageUrl, fileName, size, onRemove }: Props) {
  console.log(size);
  return (
    <div className="bg-gray3 flex w-1/2 items-center justify-between gap-2.5 overflow-hidden rounded-lg pr-2">
      <div className="flex h-15 items-center gap-2.5">
        <Image
          height={100}
          width={100}
          src={imageUrl}
          alt={imageUrl}
          className="rounded-sm"
        />
        <div className="flex flex-col truncate">
          <p className="text-sm">{fileName}</p>
          <span className="text-[10px]">{formatFileSize(size)}</span>
        </div>
      </div>

      <div>
        <X
          className="bg-gray5 hover:bg-gray4 cursor-pointer rounded-sm duration-200"
          onClick={onRemove}
        />
      </div>
    </div>
  );
}

export default UploadedPreview;
