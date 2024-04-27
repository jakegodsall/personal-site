import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skills from "./components/SkillsPage/Skills";

export default function Home() {
  return (
    <main>
      <div className="px-[2.4rem] py-[6.4rem]">
        <Hero />
      </div>
      <div className="px-[2.4rem] bg-grey-primary py-[6.4rem]">
        <AboutMe />
      </div>
      <div className="px-[2.4rem] bg-white py-[6.4rem] mb-[6rem] py-[6.4rem]">
        <Skills />
      </div>
      <div className="px-[2.4rem] ">
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
    </main>
  );
}
