"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  quality: number;
  onQualityChange: Dispatch<SetStateAction<number>>;
  format: string;
  onChangeFormat: Dispatch<SetStateAction<string>>;
};

function CardOptions({
  quality,
  onQualityChange,
  format,
  onChangeFormat,
}: Props) {
  function handleFormatSelect(e: React.MouseEvent<HTMLDivElement>) {
    const selectedFormat = e.currentTarget.dataset.format;
    onChangeFormat(selectedFormat || format);
  }

  return (
    <div className="flex w-fit grow items-center justify-center gap-x-5 sm:justify-start">
      <div className="flex w-fit flex-col items-center gap-2">
        {/* - Quality Control - */}
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
      {/* - Format Control - */}
      <div className="flex w-fit flex-col items-center gap-2">
        <Label htmlFor="format">Format</Label>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>{format}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem data-format="webp" onClick={handleFormatSelect}>
                .webp
              </DropdownMenuItem>
              <DropdownMenuItem data-format="jpeg" onClick={handleFormatSelect}>
                .jpeg
              </DropdownMenuItem>
              <DropdownMenuItem data-format="png" onClick={handleFormatSelect}>
                .png
              </DropdownMenuItem>
              <DropdownMenuItem data-format="avif" onClick={handleFormatSelect}>
                .avif
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default CardOptions;
