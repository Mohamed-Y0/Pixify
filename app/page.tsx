import UploadingCard from "@/components/UploadingCard";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-10 px-2.5 md:px-0">
        <div className="flex flex-col items-center pt-8 text-center md:pt-16">
          <h1 className="max-w-xl py-6 text-2xl font-semibold md:text-5xl">
            Make image optimization & effortless{" "}
            <span className={`font-telma`}> with Pixify</span>
          </h1>
          <p className="max-w-sm py-2.5 text-sm tracking-wider text-gray-500 md:text-lg">
            Compress your files, change formats, and keep stunning quality.
          </p>
        </div>
        <UploadingCard />
      </section>
    </>
  );
}
