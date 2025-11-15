import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <div className="flex w-full items-center gap-x-1">
      <Spinner /> Loading...
    </div>
  );
}

export default Loading;
