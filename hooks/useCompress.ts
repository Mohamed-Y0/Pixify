import { FileInfo } from "@/types/uploadingTypes";
import { useEffect, useState } from "react";

function useCompress() {
  const [compressedUrl, setCompressedUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!compressedUrl)
      return () => {
        URL.revokeObjectURL(compressedUrl);
      };
  }, [compressedUrl]);

  const compressFn = async (
    newfile: FileInfo,
    quality: number = 75,
    format: string,
  ) => {
    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("file", newfile.file);
      formData.append("quality", String(quality));
      formData.append("format", format);

      const res = await fetch("/api/compress", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Compression Failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setCompressedUrl(url);
    } catch (err) {
      setError((err as Error).message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const reset = function () {
    setCompressedUrl("");
  };

  return { compressedUrl, loading, error, compressFn, reset };
}

export default useCompress;
