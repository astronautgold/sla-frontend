import { useState } from "react"


const Evenorodd = () => {
    const[count,setCount]=useState(0)
    const handle=()=>{
        setCount(count +1)
    }
    const handlede=()=>{
        setCount(count-1)
    }
  return (
  <>  <div>
      <h1>{count}</h1>
      <h1>{count%2===0? "Even":"Odd"}</h1>
      <button onClick={handle}>incre</button>
      <button onClick={handlede}>decre</button>
    </div></>
  )
}

export default Evenorodd
