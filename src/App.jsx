import NavBar from "./components/NavBar"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import axios from "axios"
import { useEffect, useState } from "react"
function App() {
  const [location , setLocation] = useState()
  const [openDropDown , setOpenDropDown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const{latitude, longitude} = pos.coords
      console.log(latitude,longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try{
        const location = await axios.get(url);
        console.log(location);
        const exactLocation = location.data.address
        setLocation(exactLocation);
        setOpenDropDown(false);
      }

      catch(error){
        console.log(error);
      }
    })
  }


   const[data, setData] = useState();
    //fetching data 
    const fetchAllProducts = async() =>{
        try{
            const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
            console.log(res);
            const productsData = res.data.products;
            setData(productsData);
        }
        catch(error){
            console.log(error);1
        }
    }

  useEffect(()=>{
    getLocation()
    fetchAllProducts()
  },[])
  return (
    <div>
      <div>
        <NavBar location ={location} getLocation = {getLocation} openDropDown ={openDropDown} setOpenDropDown ={setOpenDropDown}/>
      </div>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/products" element ={<Products/>}/>
        <Route path = "/about" element ={<About/>}/>
        <Route path = "/contact" element ={<Contact/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
