import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  quality: number;
  onQualityChange: Dispatch<SetStateAction<number>>;
};

function CardOptions({ quality, onQualityChange }: Props) {
  return (
    <div className="flex w-20 flex-col items-center gap-2.5">
      <Label htmlFor="quality">Quality</Label>
      <Input
        type="number"
        id="quality"
        defaultValue={quality}
        onChange={(e) => onQualityChange(Number(e.target.value))}
        min={1}
        max={100}
        className=""
      />
    </div>
  );
}

export default CardOptions;
