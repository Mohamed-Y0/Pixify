import { Button } from "@/components/ui/button";
import { LucideCheck } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

type Props = {
  loading: boolean;
  error: string;
  compress: () => void;
};

function CompressButton({ loading, error, compress }: Props) {
  return (
    <>
      <div className="self-end">
        <Button
          disabled={loading}
          size={"icon"}
          onClick={compress}
          type="submit"
          className="cursor-pointer p-5"
          variant={"default"}
        >
          {loading ? (
            <Spinner className="size-5" />
          ) : (
            <LucideCheck className="size-5" />
          )}
        </Button>
      </div>

      {error && <p className="mt-3 text-center text-red-500">{error}</p>}
    </>
  );
}

export default CompressButton;
