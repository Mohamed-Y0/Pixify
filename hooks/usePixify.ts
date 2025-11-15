import useCompress from "@/hooks/useCompress";
import useFileControl from "@/hooks/useFileControl";
import useFileUpload from "@/hooks/useFileUpload";

function usePixify() {
  const { file, setFile, fileRef, removeFile } = useFileUpload();
  const { quality, setQuality, format, setFormat } = useFileControl();
  const { compressFn, loading, error, compressedUrl, reset } = useCompress();

  function compress() {
    if (!file) return;
    compressFn(file, quality, format);
  }

  function resetAll() {
    reset();
    removeFile();
    setQuality(75);
  }

  return {
    file,
    setFile,
    fileRef,
    quality,
    setQuality,
    loading,
    error,
    compress,
    compressedUrl,
    resetAll,
    format,
    setFormat,
  };
}

export default usePixify;
