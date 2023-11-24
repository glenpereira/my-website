import Sidebar from "../components/Sidebar";
import AboutMe from "@/components/AboutMe";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="scroll-smooth flex h-max flex-col lg:flex-row lg:overflow-hidden bg-gradient-to-br from-zinc-800/95 to-neutral-950 subpixel-antialiased">
      <Head>
        <title>Glen Pereira</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2e2e31"></meta>
        <meta name="description" content="Glen Pereira is a Fullstack Developer building cool software for the web." key="desc" />
        <meta property="og:title" content="Glen Pereira" />
        <meta
          property="og:description"
          content="Glen Pereira is a Fullstack Developer building cool software for the web."
        />
        <meta
          property="og:image"
          content="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
          <div className="lg:hidden mb-12 text-3xl font-medium">Experience</div>
          <Experience />
        </div>
        <div
          data-section
          id="projects"
          className="snap-start text-slate-200 mb-32"
        >
          <div className="lg:hidden mb-12 text-3xl font-medium">Projects</div>
          <Projects />
        </div>
        <div
          data-section
          id="skills"
          className="snap-start text-slate-200 mb-40"
        >
          <Skills />
        </div>
        <div className="text-slate-200/50 text-sm lg:text-right text-center">
          <Footer />
        </div>
      </main>
    </div>
  );
}
