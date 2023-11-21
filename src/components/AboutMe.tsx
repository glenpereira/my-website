import Link from "next/link";

function AboutMe() {
  return (
    <>
      <h1 className="text-5xl text-white font-semibold mt-20 lg:mx-20 ml-10">Glen Pereira</h1>
      <h3 className="text-xl text-white mt-3 lg:mx-20 mb-10 ml-11">Front-end Developer</h3>
      <Link href="https://drive.google.com/file/d/1nSgfLdUbJOeE5oKJxFuAAq6JIQg68D53/view?usp=drive_link" target="_blank">
        <button className="rounded-3xl text-orange-600 hover:bg-orange-600 hover:text-orange-50 bg-orange-600/20 p-2.5 px-4 lg:mx-20 ml-10 lg:mb-20">
          Resume
        </button>
      </Link>
    </>
  );
}

export default AboutMe;
