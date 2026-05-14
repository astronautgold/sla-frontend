import { useState } from "react"


const Checkbox = () => {
    const[check,setCheck]=useState(false)
    const handle=()=>{
        setCheck(!check)
    }
  return (
   <> <div>
      <input type="checkbox" onChange={handle} placeholder="select one" />
          

      
     <p>{check?"Accepted":"not Accepted"}</p>
    </div></>
  )
}

export default Checkbox
