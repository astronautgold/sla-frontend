import { useState } from "react"

const Multicount = () => {

    const [count1,setCount1]=useState(0)
const [count2,setCount2]=useState(0)
  return (
   <> <div>
      <p>Count1:{count1}</p>
      <button onClick={()=>{setCount1(count1+1)}}>Increment</button>
      <button onClick={()=>{setCount1(count1-1)}}>Decrement</button>
    </div>
     <div>
      <p>Count2:{count2}</p>
      <button onClick={()=>{setCount2(count2+1)}}>Increment</button>
      <button onClick={()=>{setCount2(count2-1)}}>Decrement</button>
    </div>
    
    </>
  )
}

export default Multicount
