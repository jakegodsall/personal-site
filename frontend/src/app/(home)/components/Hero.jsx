import SocialsBar from "@/app/components/SocialsBar";

export default function Hero() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col mb-[6rem]">
        <h1 className="text-[3.4rem] font-semibold mb-[0.8rem]">
          Hi, I&apos;m Jake
        </h1>
        <p className="text-[1.6rem] leading-[2.4rem] text-gray-600">
          I&apos;m a full-stack developer passionate about engineering
          innovative tools to improve personal productivity.
        </p>
      </div>
      <SocialsBar />
    </section>
  );
}
