// components/Sidebar.tsx
import React, { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Socials from "./Socials";
import Link from "next/link";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // const observer = useRef<IntersectionObserver | null>(null);
  const sections = useRef<HTMLDivElement[]>([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset + 50;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll<HTMLDivElement>('[data-section]'));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="hidden lg:block text-white h-screen w-2/5 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <AboutMe />
        <ul className="mx-20">
          <div
            className={`mr-10 ${
              activeSection === "about" ? "text-active" : ""
            }`}
          >
            <Link href="#about" scroll={true}>About</Link>
          </div>
          <div
            className={`mr-10 ${
              activeSection === "experience" ? "text-active" : ""
            }`}
          >
            <Link href="#experience">Experience</Link>
          </div>
          <div
            className={`mr-10 ${
              activeSection === "projects" ? "text-active" : ""
            }`}
          >
            <Link href="#projects">Projects</Link>
          </div>
          <div
            className={`mr-10 ${
              activeSection === "skills" ? "text-active" : ""
            }`}
          >
            <Link href="#skills">Skills</Link>
          </div>
        </ul>
        <Socials />
      </div>
    </nav>
  );
};

export default Sidebar;
