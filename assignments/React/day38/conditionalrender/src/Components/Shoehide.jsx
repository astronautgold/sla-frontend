import { useState } from "react"
 import heroImg from "../assets/hero.png"

const Shoehide = () => {
    const[show,setShow]=useState(false)
  
    const handle=()=>{
setShow(!show)
    }
  return (
   <> <div>
  


      <button onClick={handle}>{show?"Show image ":"hide image"}</button>
      {show&& <img src={heroImg} alt="hero"   />}
    </div></>
  )
}

export default Shoehide
