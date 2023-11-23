import Link from "next/link"
import Image from "next/image";
import TechBubble from "./TechBubble";

type ProjectCardProps = {
  image: string;
  title: string;
  link: string;
  desc: string;
  skills: Array<string>;
};

function ProjectCard({image, title, link, desc, skills}: ProjectCardProps){
  return(
    <Link href={link} target="_blank">
      <div className="rounded group lg:flex lg:hover:bg-slate-50/5 p-3 my-8">
        <div className="max-lg:flex  lg:w-1/6 lg:mr-5 lg:ml-3 mb-5 mr-2 text-slate-50/50 justify-center text-center">
          <Image src={image} alt="project-image" width={200} height={150} className="rounded border-orange-600 mt-2"/>
        </div>
        <div className="lg:w-5/6 lg:ml-4">
          <div className="flex mb-5 items-center">
            <span className="text-xl group-hover:text-orange-400">{title}</span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:mx-2 fill-white lg:group-hover:fill-orange-400 w-10"
            >
              <path d="M45.9 25.245C45.2913 25.245 44.7076 25.4868 44.2772 25.9172C43.8468 26.3476 43.605 26.9313 43.605 27.54V41.31C43.605 41.9187 43.3632 42.5024 42.9328 42.9328C42.5024 43.3632 41.9187 43.605 41.31 43.605H13.77C13.1613 43.605 12.5776 43.3632 12.1472 42.9328C11.7168 42.5024 11.475 41.9187 11.475 41.31V13.77C11.475 13.1613 11.7168 12.5776 12.1472 12.1472C12.5776 11.7168 13.1613 11.475 13.77 11.475H27.54C28.1487 11.475 28.7324 11.2332 29.1628 10.8028C29.5932 10.3724 29.835 9.78867 29.835 9.18C29.835 8.57133 29.5932 7.98759 29.1628 7.55719C28.7324 7.12679 28.1487 6.885 27.54 6.885H13.77C11.944 6.885 10.1928 7.61038 8.90157 8.90157C7.61038 10.1928 6.885 11.944 6.885 13.77V41.31C6.885 43.136 7.61038 44.8872 8.90157 46.1784C10.1928 47.4696 11.944 48.195 13.77 48.195H41.31C43.136 48.195 44.8872 47.4696 46.1784 46.1784C47.4696 44.8872 48.195 43.136 48.195 41.31V27.54C48.195 26.9313 47.9532 26.3476 47.5228 25.9172C47.0924 25.4868 46.5087 25.245 45.9 25.245Z" />
              <path d="M36.72 11.475H40.3461L25.9106 25.8876C25.6954 26.101 25.5247 26.3548 25.4082 26.6344C25.2917 26.9141 25.2317 27.2141 25.2317 27.5171C25.2317 27.82 25.2917 28.12 25.4082 28.3997C25.5247 28.6793 25.6954 28.9332 25.9106 29.1465C26.1239 29.3616 26.3777 29.5323 26.6574 29.6489C26.9371 29.7654 27.237 29.8254 27.54 29.8254C27.843 29.8254 28.1429 29.7654 28.4226 29.6489C28.7023 29.5323 28.9561 29.3616 29.1695 29.1465L43.605 14.7339V18.36C43.605 18.9687 43.8468 19.5524 44.2772 19.9828C44.7076 20.4132 45.2913 20.655 45.9 20.655C46.5087 20.655 47.0924 20.4132 47.5228 19.9828C47.9532 19.5524 48.195 18.9687 48.195 18.36V9.18C48.195 8.57133 47.9532 7.98759 47.5228 7.55719C47.0924 7.12679 46.5087 6.885 45.9 6.885H36.72C36.1113 6.885 35.5276 7.12679 35.0972 7.55719C34.6668 7.98759 34.425 8.57133 34.425 9.18C34.425 9.78867 34.6668 10.3724 35.0972 10.8028C35.5276 11.2332 36.1113 11.475 36.72 11.475Z" />
            </svg>
          </div>
          <div className="text-slate-50/60 text-sm">{desc}</div>
          <ul className="flex flex-wrap mt-5">
            {skills.map((skill) => (
              <li key="id">
                <TechBubble>{skill}</TechBubble>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard