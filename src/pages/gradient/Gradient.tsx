import { useEffect, useRef } from "react"
// to implement later

function Gradient(){
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if(!heroRef.current) return
      const {clientX, clientY} = ev;
      console.log(clientX, clientY)
      heroRef.current.style.setProperty('--x', `${clientX}px`)
      heroRef.current.style.setProperty('--y', `${clientY}px`)
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  })

  return(
    <>
      <style jsx>
        {`
          .parent {
            height: 100vh;
            width:100%;
            background-image: radial-gradient(
              circle farthest-side at var(--x, 100px) var(--y, 100px),
              #1250aa 0%,
              transparent 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <div ref={heroRef} className="parent">
        hello
      </div>
    </>
  )
}

export default Gradient