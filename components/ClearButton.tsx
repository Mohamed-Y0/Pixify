import { Button } from "@/components/ui/button";
import { LucideBrushCleaning } from "lucide-react";

type Props = {
  onClear: () => void;
};

const ClearButton = ({ onClear }: Props) => {
  return (
    <div className="self-end">
      <Button
        variant={"ghost"}
        size={"icon"}
        className="cursor-pointer p-5"
        onClick={onClear}
      >
        <LucideBrushCleaning className="size-5" />
      </Button>
    </div>
  );
};

export default ClearButton;
