import CompressedPreview from "@/components/CompressedPreview";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import useCompress from "@/hooks/useCompress";
import { FileInfo } from "@/types/uploadingTypes";

type Props = {
  file: FileInfo;
  quality: number;
  // loading: boolean;
  // error: string;
  // compressedUrl: string;
  // compress: (newFile: FileInfo, quality: number) => void;
};

function CompressButton({ file, quality }: Props) {
  const { compressedUrl, loading, error, compress, reset } = useCompress();
  console.log(file);
  if (!file) reset();
  return (
    <>
      <CardFooter>
        <div className="border-gray2 w-full border-t pt-5 text-end">
          <Button
            disabled={loading || !file}
            onClick={() => file && compress(file, quality)}
            className="bg-blue1 hover:bg-blue-hover cursor-pointer p-6 tracking-wider"
          >
            {loading ? "Compressing..." : "Compress"}
          </Button>
        </div>
      </CardFooter>

      {error && <p className="mt-3 text-center text-red-500">{error}</p>}

      {compressedUrl && (
        <div className="flex max-w-40 gap-2.5 px-5">
          <CompressedPreview url={compressedUrl} name={file.name} />
        </div>
      )}
    </>
  );
}

export default CompressButton;
