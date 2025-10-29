/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import useCompress from "@/hooks/useCompress";
import { FileInfo } from "@/types/uploadingTypes";

type Props = {
  files: FileInfo[];
  quality: number;
};

function CompressButton({ files, quality }: Props) {
  const { compressedUrls, loading, error, compress } = useCompress();

  return (
    <>
      <CardFooter>
        <div className="border-gray2 w-full border-t pt-5 text-end">
          <Button
            disabled={loading || !files.length}
            onClick={() => files && compress(files, quality)}
            className="bg-blue1 hover:bg-blue-hover cursor-pointer p-6 tracking-wider"
          >
            {loading ? "Compressing..." : "Compress"}
          </Button>
        </div>
      </CardFooter>

      {error && <p className="mt-3 text-center text-red-500">{error}</p>}

      {compressedUrls && (
        <div className="mt-5 flex justify-center">
          <img
            src={compressedUrls}
            alt="Compressed result"
            className="max-h-60 rounded-md"
          />
        </div>
      )}
    </>
  );
}

export default CompressButton;
