import { useState } from "react"


const Buttonclicked = () => {
    const [button,setButton]=useState(false)
    const handle=()=>{
        setButton(!button)
    }
  return (
    <><div>
      <button onClick={handle}>
        {button?"Clicked":"Not CLicked"}
      </button>
    </div></>
  )
}

export default Buttonclicked
