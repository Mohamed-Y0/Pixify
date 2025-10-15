import CancelButton from "@/components/CancelButton";
import Image from "next/image";

type Props = {
  imageUrl: string;
  file: File | null;
  onRemove: () => void;
};

function UploadedPreview({ imageUrl, file, onRemove }: Props) {
  return (
    <div className="bg-gray3 flex max-h-20 w-fit items-center justify-between gap-2.5 rounded-lg p-2">
      <div className="flex items-center gap-2.5">
        <Image
          height={60}
          width={60}
          src={imageUrl}
          alt={imageUrl}
          className="rounded-sm"
        />
        <p className="w-fit max-w-40 text-xs">{file?.name}</p>
      </div>

      <CancelButton onRemove={onRemove} />
    </div>
  );
}

export default UploadedPreview;
