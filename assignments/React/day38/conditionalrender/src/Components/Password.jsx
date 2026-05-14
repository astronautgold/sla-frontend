import { useState } from "react"

const Password = () => {
    const[pass,setPass]=useState(" ")
const  handel=(e)=>{
setPass(e.target.value)
}
  return (
<>    <div>
      <input type="text" onChange={handel} value={pass} />
      <p>{pass.length>6?"Password is strong":"Password is weak"}</p>
    </div></>
  )
}

export default Password
