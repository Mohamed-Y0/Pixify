import { useState } from "react";

function useCompress() {
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const compress = async (file: File, quality: number = 75) => {
    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("quality", String(quality));

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

  return { compressedUrl, loading, error, compress };
}

export default useCompress;
