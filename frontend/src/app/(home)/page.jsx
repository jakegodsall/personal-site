import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div className="px-[1.6rem] py-[6.4rem]">
        <Hero />
      </div>
      <div className="px-[1.6rem] bg-grey-primary py-[6.4rem]">
        <AboutMe />
      </div>
    </main>
  );
}
