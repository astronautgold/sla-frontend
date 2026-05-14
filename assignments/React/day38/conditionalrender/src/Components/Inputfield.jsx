import { useState } from "react"


const Inputfield = () => {
    const [input,setInput]=useState("")
    const handle=()=>{
        setInput("")
    }
    const hanclein=(e)=>{
        setInput(e.target.value)
    }


  return (
   <> <div>
      <input placeholder="enter something" value={input} onChange={hanclein}/>
      <p>{input?"Typing...":"Empty"}</p>
      <button onClick={handle}> click</button>
    </div></>
  )
}

export default Inputfield
