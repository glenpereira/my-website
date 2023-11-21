import Image from "next/image";
import Link from "next/link";

function Socials() {
  return (
    <div className="flex lg:mx-20 ml-10 lg:mt-20 mt-10 items-center">
      <Link href="https://github.com/glenpereira" target="_blank">
        <div className="mx-2">
          <Image src="/github.svg" alt="Github" width={35} height={34.1} />
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/glen-pereira/" target="_blank">
        <div className="mx-2">
          <Image src="/linkedin.svg" alt="Linkedin" width={35} height={34.1} />
        </div>
      </Link>
      <Link href="mailto:glenv.pereira@gmail.com" target="_blank">
        <div className="mx-2">
          <Image src="/mail.svg" alt="Linkedin" width={35} height={34.1} />
        </div>
      </Link>
    </div>
  );
}

export default Socials;
