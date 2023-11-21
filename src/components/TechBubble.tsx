import { ReactNode } from "react"

type TechBubbleProps = {
  children: ReactNode
}

function TechBubble({children}:TechBubbleProps){
  return(
    <div className="rounded-3xl text-orange-600 bg-orange-600/20 p-1.5 px-3 w-min mx-1 my-1 text-sm">
      {children}
    </div>
  )
}

export default TechBubble