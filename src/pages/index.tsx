import Image from "next/image";
import Sidebar from "../components/Sidebar";
import AboutMe from "@/components/AboutMe";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="flex h-max flex-col lg:flex-row lg:overflow-hidden bg-gradient-to-br from-zinc-800/95 to-neutral-950">
      <div className="lg:hidden mb-10">
        <AboutMe />
        <Socials/>
      </div>
      <div className="w-full flex-none lg:w-2/5">
        <Sidebar />
      </div>
      <main className="snap-y flex-grow p-6 lg:overflow-y-auto lg:p-12">
        <div data-section id="about" className="snap-start text-slate-200 mb-20">
          <AboutSection />
        </div>
        <div data-section id="experience" className="snap-start text-slate-200 mb-4">
          <Experience/>
        </div>
        <div data-section id="projects" className="snap-start h-96 bg-gray-500 mb-4">
          <h2>Projects Section</h2>
        </div>
        <div data-section id="skills" className="snap-start h-96 bg-gray-600">
          <h2>Skills Section</h2>
        </div>
      </main>
    </div>
  );
}
