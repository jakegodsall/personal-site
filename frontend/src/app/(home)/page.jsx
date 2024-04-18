import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skills from "./components/SkillsPage/Skills";

export default function Home() {
  return (
    <main>
      <div className="px-[1.6rem] py-[6.4rem]">
        <Hero />
      </div>
      <div className="px-[1.6rem] bg-grey-primary py-[6.4rem]">
        <AboutMe />
      </div>
      <div className="px-[1.6rem] bg-grey-primary py-[6.4rem]">
        <Skills />
      </div>
    </main>
  );
}
