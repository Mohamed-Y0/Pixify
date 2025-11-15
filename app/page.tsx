import UploadingCard from "@/components/UploadingCard";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-10 px-2.5 pt-7 pb-10 md:px-0 md:pt-15">
        <div className="animate-fade-in-from-right-1 flex flex-col items-center text-center">
          <h1 className="py-6 text-3xl font-semibold sm:max-w-xl md:text-5xl">
            Make image optimization & effortless
            <span className={`font-telma animate-remove-blur`}>
              {" "}
              with Pixify
            </span>
          </h1>
          <p className="py-2.5 text-sm tracking-wider text-gray-500 sm:max-w-sm md:text-lg">
            Compress your files, change formats, and keep stunning quality.
          </p>
        </div>
        <div className="animate-fade-in-from-right-2">
          <UploadingCard />
        </div>
      </section>
    </>
  );
}
