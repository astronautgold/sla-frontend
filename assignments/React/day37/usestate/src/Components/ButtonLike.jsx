import {  useState } from "react"


const ButtonLike = () => {
    const[like,setLike] = useState(0)
    
      return (
    <div>
      <p>Likes:{like}</p>
      <button onClick={()=>{setLike(like +1)}}>like ❤️</button>
    </div>
  )
}

export default ButtonLike
