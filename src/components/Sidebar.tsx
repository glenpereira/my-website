// components/Sidebar.tsx
import React, { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Socials from "./Socials";
import Link from "next/link";
import Line from "./Line";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sections = useRef<HTMLDivElement[]>([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset + 230;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = Array.from(
      document.querySelectorAll<HTMLDivElement>("[data-section]")
    );
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden lg:block text-slate-50/40 h-screen w-2/5 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <AboutMe />
        <ul className="mx-20">
          <div
            className={`mr-10 my-3 ${
              activeSection === "about" ? "text-slate-50" : ""
            }`}
          >
            <Link href="#about" scroll={true}>
              <div className="flex items-center">
                <Line action={activeSection === "about" ? "about" : ""}/>
                <div>About</div>
              </div>
            </Link>
          </div>
          <div
            className={`mr-10 my-3 ${
              activeSection === "experience" ? "text-slate-50" : ""
            }`}
          >
            <Link href="#experience">
              <div className="flex items-center">
                <Line action={activeSection === "experience" ? "experience" : ""}/>
                <div>Experience</div>
              </div>
            </Link>
          </div>
          <div
            className={`mr-10 my-3 ${
              activeSection === "projects" ? "text-slate-50" : ""
            }`}
          >
            <Link href="#projects">
              <div className="flex items-center">
                <Line action={activeSection === "projects" ? "projects" : ""}/>
                <div>Projects</div>
              </div>
            </Link>
          </div>
          <div
            className={`mr-10 my-3 ${
              activeSection === "skills" ? "text-slate-50" : ""
            }`}
          >
            <Link href="#skills">
              <div className="flex items-center">
                <Line action={activeSection === "skills" ? "skills" : ""}/>
                <div>Skills</div>
              </div>
            </Link>
          </div>
        </ul>
        <Socials />
      </div>
    </nav>
  );
};

export default Sidebar;
