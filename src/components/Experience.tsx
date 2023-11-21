import TechBubble from "./TechBubble";
import Link from "next/link";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

/* eslint-disable react/no-unescaped-entities */
function Experience() {
  return (
    <div>
      <ExperienceCard
        timeline="Dec 2021 - Aug 2022"
        title="Fullstack Developer - Indian Navy"
        desc="Helped in building Adithi - A digital guestbook for IAC-1 Vikrant.
              Built a React/Electron web app that displays the ship's guests.
              Also built a Node/Mongo REST API to facilitate data transfer
              between the Flutter clients and the web app."
        skills={["hi"]}
      />
    </div>
  );
}

export default Experience;
