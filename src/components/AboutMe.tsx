import Link from "next/link";
import { Inter_Tight } from "next/font/google";

const inter_tight = Inter_Tight({subsets: ['latin']})

function AboutMe() {
  return (
    <div className={inter_tight.className}>
      <h1 className="text-5xl text-white font-semibold mt-20 lg:mx-[76px] ml-10 antialiased">Glen Pereira</h1>
      <h3 className="text-xl text-white mt-3 font-sans lg:mx-20 mb-10 ml-11">Fullstack Developer</h3>
      <Link href="https://drive.google.com/file/d/1nSgfLdUbJOeE5oKJxFuAAq6JIQg68D53/view?usp=drive_link" target="_blank">
        <button className="rounded-3xl font-sans text-orange-600 hover:bg-orange-600 hover:text-orange-50 bg-orange-600/20 p-2.5 px-4 lg:mx-20 ml-10 lg:mb-20">
          Resume
        </button>
      </Link>
    </div>
  );
}

export default AboutMe;
