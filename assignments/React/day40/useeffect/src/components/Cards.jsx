import { useEffect, useState } from "react"



const Cards = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData =async()=>{
    const res = await fetch("https://dummyjson.com/users")
    const data= await res.json()
    setData(data.users)
}   
fetchData()
})
  return (
   <>
  <div className="max-w-7xl mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((e) => (
      <div
        key={e.id}
        className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl hover:scale-105 transition overflow-hidden"
      >
        <img
          src={e.image}
          alt={e.firstName}
          className="w-20 h-20 rounded-full mx-auto"
        />

        <h2 className="text-lg font-bold text-center mt-2">
          {e.firstName} {e.lastName}
        </h2>

        <p className="text-sm text-gray-600 text-center truncate">
          {e.email}
        </p>

        <div className="mt-3 text-sm space-y-1">
          <p><strong>Age:</strong> {e.age}</p>
          <p><strong>Gender:</strong> {e.gender}</p>
          <p><strong>Phone:</strong> {e.phone}</p>
          <p><strong>Blood Group:</strong> {e.bloodGroup}</p>
          <p><strong>Eye:</strong> {e.eyeColor}</p>
          <p><strong>Hair:</strong> {e.hair?.color} ({e.hair?.type})</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Cards
 