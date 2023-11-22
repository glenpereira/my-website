import TechBubble from "./TechBubble"

function Skills(){
  return(
    <div>
      <div className="">
        <div>Skills</div>
        <div className="flex flex-wrap">
          <TechBubble>React</TechBubble>
          <TechBubble>HTML</TechBubble>
          <TechBubble>CSS</TechBubble>
          <TechBubble>JavaScript</TechBubble>
        </div>
      </div>
      <div>
        <div>Familiar With</div>
        <div className="flex flex-wrap">
          <TechBubble>React Native</TechBubble>
          <TechBubble>TypeScript</TechBubble>
          <TechBubble>Next.js</TechBubble>
          <TechBubble>Python</TechBubble>
          <TechBubble>Flask</TechBubble>
          <TechBubble>Node.js</TechBubble>
          <TechBubble>MongoDB</TechBubble>
          <TechBubble>MySQL</TechBubble>
        </div>
      </div>
      <div>
        <div>Currently Learning</div>
        <div className="flex flex-wrap">
          <TechBubble>Next.js</TechBubble>
          <TechBubble>TypeScript</TechBubble>
          <TechBubble>Go</TechBubble>
        </div>
      </div>
    </div>
  )
}

export default Skills