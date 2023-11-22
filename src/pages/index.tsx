import Image from "next/image";
import Sidebar from "../components/Sidebar";
import AboutMe from "@/components/AboutMe";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="scroll-smooth flex h-max flex-col lg:flex-row lg:overflow-hidden bg-gradient-to-br from-zinc-800/95 to-neutral-950">
      <div className="lg:hidden mb-10">
        <AboutMe />
        <Socials />
      </div>
      <div className="w-full flex-none lg:w-2/5">
        <Sidebar />
      </div>
      <main className="scroll-smooth snap-y w-screen flex-grow p-6 lg:overflow-y-auto lg:p-12  ">
        <div
          data-section
          id="about"
          className="snap-start text-slate-200 mb-32"
        >
          <AboutSection />
        </div>
        <div
          data-section
          id="experience"
          className="snap-start text-slate-200 mb-32"
        >
          <div className="lg:hidden mb-12 text-2xl">Experience</div>
          <Experience />
        </div>
        <div
          data-section
          id="projects"
          className="snap-start text-slate-200 mb-32"
        >
          <div className="lg:hidden mb-12 text-2xl">Projects</div>
          <Projects />
        </div>
        <div data-section id="skills" className="snap-start text-slate-200 mb-32">
          <Skills/>
        </div>
      </main>
    </div>
  );
}
