import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div>
      <ProjectCard
        image="/mariabot.png"
        title="Mariabot - Malayalam TTS using Tacotron2"
        link="https://github.com/glenpereira/mariabot-web"
        desc="Built a custom-trained Tacotron2 Model that generates Malayalam speech from text. Also made a small web app around that model to allow users to type Malayalam text and generate speech audio files."
        skills={["Python", "Flask", "React", "Node", "MongoDB", "AWS"]}
      />
      <ProjectCard
        image="/evolvx.png"
        title="Evolvx - AJCE CSE Techfest Website"
        link="https://github.com/glenpereira/EvolvX_3D"
        desc="Made a website for our department's Tech Fest showcasing all the events taking place."
        skills={["React", "Tailwind CSS", "AWS"]}
      />
      <ProjectCard
        image="/ccp.png"
        title="Crowd Control Protocol - Manage student entry/exit"
        link="https://github.com/glenpereira/ccp"
        desc="Built a simple app to assign activities to participants of our Gaming Lounge. Uses QR tags to control their entry and exit."
        skills={["React Native", "FireBase"]}
      />
      <ProjectCard
        image="/agape.png"
        title="Agape - Orphanage assistance app."
        link="https://github.com/Team-Agape/Agape"
        desc="Made an app that allows you to donate items or money to orphanages near you. My first foray into designing an app from scratch in Figma."
        skills={["React Native", "Figma", "Firebase"]}
      />
      <ProjectCard
        image="/classlog.png"
        title="ClassLog - Attendance using Facial Recognition"
        link="https://github.com/glenpereira/ClassLog"
        desc="Developed a web app that allows you to take the attendance of a classroom with a single camera click. The platform supports the use of both photos and videos for student recognition."
        skills={["Python", "Flask", "AWS", "AWS Rekognition"]}
      />
    </div>
  );
}

export default Projects;
