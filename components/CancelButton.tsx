"use client";

import { X } from "lucide-react";

type Props = {
  onRemove: () => void;
};

function CancelButton({ onRemove }: Props) {
  return (
    <div>
      <X
        className="bg-gray5 hover:bg-gray4 cursor-pointer rounded-sm duration-200"
        onClick={onRemove}
      />
    </div>
  );
}

export default CancelButton;
