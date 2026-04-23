import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Rendering from './components/Rendering';




const App = () => {
  return (
    <>
    <Navbar/>
   
   <Routes>
    <Route Path="/" element={<Home/>}/>
     <Route Path="/rendering" element={<Rendering/>}/>
    </Routes></>
  )
}

export default App
