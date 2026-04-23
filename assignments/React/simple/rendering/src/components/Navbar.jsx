import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
  return (
   <>
   <div className='bg-blue-300 flex justify-between h-20 items-center'>
<div> Logo</div>
<div className='text-center gap-2 '> 
<Link to="/home">Home</Link>  
<Link to="/render">Rendering</Link>  

</div>

   </div>
   
   </>
  )
}

export default Navbar
