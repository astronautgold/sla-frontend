import { useState } from "react";


const Showhidetext = () => {
    const[Hidetext,setHidetext] = useState(false);
  return (
   <>
   <div>
   <h1>Show and hide text</h1>
    <button onClick={()=>{setHidetext(!Hidetext)}}>
        
   {Hidetext?"Hide":"Show"}</button>
<p>{Hidetext?"Hello, this text is hidden!":" "}</p>
   </div>
   </>
  )
}

export default Showhidetext
