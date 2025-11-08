import { Button } from "@/components/ui/button";
import { FileInfo } from "@/types/uploadingTypes";

type Props = {
  file: FileInfo;
  quality: number;
  loading: boolean;
  error: string;
  compress: (newFile: FileInfo, quality: number) => void;
};

function CompressButton({ file, quality, loading, error, compress }: Props) {
  return (
    <>
      <div className="border-gray2 w-full border-t pt-5 text-end">
        <Button
          disabled={loading || !file}
          onClick={() => file && compress(file, quality)}
          className="bg-blue1 hover:bg-blue-hover cursor-pointer p-6 tracking-wider"
        >
          {loading ? "Compressing..." : "Compress"}
        </Button>
      </div>

      {error && <p className="mt-3 text-center text-red-500">{error}</p>}
    </>
  );
}

export default CompressButton;
