import UploadingCard from "@/components/UploadingCard";

export default function Home() {
  return (
    <>
      <section className="flex min-h-80 flex-col gap-10 px-2.5 md:px-0">
        <div className="flex flex-col items-center pt-8 text-center md:pt-16">
          <h1 className="text-gradient py-6 text-2xl font-semibold md:text-5xl">
            Crush. Convert. Create.
          </h1>
          <p className="max-w-3xl py-5 text-sm tracking-wider md:text-lg">
            Crusher makes image optimization effortless — compress your files,
            change formats, and keep stunning quality.
          </p>
        </div>
        <UploadingCard />
      </section>
    </>
  );
}
