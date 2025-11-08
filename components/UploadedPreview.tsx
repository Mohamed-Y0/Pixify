import { formatFileSize } from "@/utils/formatFileSize";
import { Trash2 } from "lucide-react";
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
    <div className="bg-gray3 relative flex w-1/2 items-center justify-between gap-2.5 rounded-lg pr-2">
      <div className="flex h-15 items-center gap-2.5 overflow-hidden rounded-lg">
        <Image height={100} width={100} src={imageUrl} alt={imageUrl} />
        <div className="flex flex-col truncate">
          <p className="text-sm">{fileName}</p>
          <span className="text-[10px]">{formatFileSize(size)}</span>
        </div>
      </div>

      {onRemove && (
        <div className="absolute -top-2.5 -right-2.5 rounded-lg bg-red-800 p-1 duration-200 hover:bg-red-700">
          <Trash2 className="cursor-pointer rounded-sm" onClick={onRemove} />
        </div>
      )}
    </div>
  );
}

export default UploadedPreview;
