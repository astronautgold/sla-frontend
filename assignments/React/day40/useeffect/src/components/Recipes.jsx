import { useEffect, useState } from "react"




const Recipes = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        const fetchData= async()=>{
            const res=await fetch("https://dummyjson.com/recipes")
            const data= await res.json()
            setData(data.recipes)
        }
        fetchData()
    })
  return (
    <div>
      {data.map((e)=>(
<p key= {e.id}>{e.id} - {e.name} - {e.ingredients}</p>


      ))}
    </div>
  )
}

export default Recipes
