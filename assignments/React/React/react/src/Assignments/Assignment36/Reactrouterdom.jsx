import { Link } from "react-router-dom";
import Props from "./Props";


const Assignment36 = () => {
   console.log("Assignment36 loaded");
  
  return (
    <>
   <div className="bg-blue-100 p-4 flex justify-between">
     <div> <h1>Assignment 36</h1>
      </div>
    <div className="text-center flex gap-2 "> <Link to="/assignment36/about" className="text-Black-500 ">AboutUs</Link>
     <Link to="/assignment36/contact" className="text-Black-500 ">ContactUs</Link></div>
    </div>

    <h1 className="text-center m-8">Hello !!</h1>

     {/* parent to child */}

 <Props name="Ramya" />
  <Props age= "22"/>
   <Props study="10th" />
   


    </>
  )
}

export default Assignment36


