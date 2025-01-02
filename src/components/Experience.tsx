import TechBubble from "./TechBubble";
import Link from "next/link";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

/* eslint-disable react/no-unescaped-entities */
function Experience() {
  return (
    <div>
      <ExperienceCard
        timeline="Jan 2024 - Present"
        title="Software Developer - CCTS Global"
        link="https://www.linkedin.com/company/cctsglobal"
        desc="Working as a .NET Developer at CCTS Global. Helped build a SaaS invoicing 
        software from the ground up. Currently working on rewriting a legacy ASP.NET 1.0 
        application to current .NET standards with new features and better performance."
        skills={["C#", "React", ".NET Framework", "Postgresql", "MS-SQL", "System Design"]}
      />
      <ExperienceCard
        timeline="Dec 2021 - Aug 2022"
        title="Fullstack Developer - Indian Navy"
        link="https://www.ajce.in/cse/insvikrant.html"
        desc="Helped in building Adithi - A digital guestbook for IAC-1 Vikrant.
              Built a React/Electron web app that displays the ship's guests.
              Also built a Node/Mongo REST API to facilitate data transfer
              between the Flutter clients and the web app."
        skills={["React", "CSS", "JavaScript", "Node", "MongoDB", "RaspberryPi"]}
      />
    </div>
  );
}

export default Experience;
