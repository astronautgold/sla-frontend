import { useEffect, useState } from "react"


const Todotable = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
 const fetchData= async()=>{

    const res = await fetch("https://dummyjson.com/todos")
    const data=await res.json()
    setData(data.todos)
 }
fetchData()
    },[])
    console.log(data)
  return (
    <><div>
      <table border={1} >
        <thead><tr>
            <th>S.No</th> 
            <th>todo</th>
            <th>completed</th>
            <th>userId</th>
        </tr></thead>
        <tbody>
            {data.map((e)=>(
 <tr  key={e.id}>
                <td>{e.id}</td> 
            <td>{e.todo}</td>
            <td>{e.completed}</td>
            <td>{e.userId}</td>
            </tr>
            ))}
           
        </tbody>
      </table>
    </div></>
  )
}

export default Todotable
