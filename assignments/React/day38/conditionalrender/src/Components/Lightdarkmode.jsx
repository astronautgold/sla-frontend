
import { useState } from 'react';

const Lightdarkmode = () => {

    const[mode,setMode]= useState(false)


  return (
    <>
    <div style={{background : mode === true?"black":"white"
,color:mode===false?"black":"white"}}>

<button onClick={()=>{setMode(!mode)} 
}>{mode?"dark":"light"}</button>


    </div>
    
    
    
    </>
  )
}

export default Lightdarkmode
