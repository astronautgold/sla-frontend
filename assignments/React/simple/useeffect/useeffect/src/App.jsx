
import {  useEffect, useState } from 'react';

const App = () => {
  const[data,setData]=useState([])

useEffect(()=>{

const fetchdata= async()=>{
   const res= await fetch("https://dummyjson.com/users")
  const mydata= await res.json()
  setData(mydata.users)
}
fetchdata()
},[])

  return (
    <div>

<table border={1} >

  <tr>
  <th>S.No</th>
  <th>firstName</th>
  <th>lastName</th>
  </tr>
<tbody >
  {data.map((e)=>(
     <tr key={e.id}><td>{e.id}</td>
   <td>{e.firstName}</td>
    <td>{e.lastName}</td></tr>
  
  ))}
 
</tbody>

</table>


    {data.map((e)=>(
      <p key={e.id}>{e.firstName}</p>
    ))}



    </div>
  )
}

export default App
