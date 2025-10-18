import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import useCompress from "@/hooks/useCompress";

type Props = {
  file: File | null;
  quality: number;
};

function CompressButton({ file, quality }: Props) {
  const { compressedUrl, loading, error, compress } = useCompress();

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
        <div className="mt-5 flex justify-center">
          <img
            src={compressedUrl}
            alt="Compressed result"
            className="max-h-60 rounded-md"
          />
        </div>
      )}
    </>
  );
}

export default CompressButton;
