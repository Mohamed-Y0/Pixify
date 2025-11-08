import useCompress from "@/hooks/useCompress";
import useFileControl from "@/hooks/useFileControl";
import useFileUpload from "@/hooks/useFileUpload";

function usePixify() {
  const { file, setFile, fileRef, removeFile } = useFileUpload();
  const { quality, setQuality } = useFileControl();
  const { compress, loading, error, compressedUrl, reset } = useCompress();

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
  };
}

export default usePixify;
