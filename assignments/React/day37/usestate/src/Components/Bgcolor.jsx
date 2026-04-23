import { useState } from "react"

const Bgcolor = () => {
    const[bgcolor,setBgcolor]=useState("white")
  return (
    <div>
     <h1 style={{backgroundColor:bgcolor}}> BackgroundColor</h1>
<button onClick={()=>setBgcolor("red")}>Red</button>
<button onClick={()=>setBgcolor("green")}>Green</button>
<button onClick={()=>setBgcolor("blue")}>blue</button>


    </div>
  )
}

export default Bgcolor
