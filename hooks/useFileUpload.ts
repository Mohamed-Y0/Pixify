import { FileInfo } from "@/types/uploadingTypes";
import { useEffect, useRef, useState } from "react";

function useFileUpload() {
  const [file, setFile] = useState<FileInfo | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!file) return;

    return () => {
      URL.revokeObjectURL(file.url);
    };
  }, [file]);

  const removeFile = function () {
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return { file, setFile, fileRef, removeFile };
}

export default useFileUpload;
