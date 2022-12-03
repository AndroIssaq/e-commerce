import { useState , useEffect } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import  {commerce}  from './lib/commerce'
import Cart from './components/Cart/Cart'
import { Routes, Route } from "react-router-dom"
function App() {
  const [products, setProduct] = useState([])
  const [cart,setCart] = useState({})
  // to get datat from commerce 
  const getData= async()=>{
    const {data} =await commerce.products.list()
    setProduct(data)
  } 

  // function to add to cart 
  const addItemHandelr=async(product,quantity)=>{
    const item = await commerce.cart.add(product,quantity)
    setCart(item)
  }
  // to get cart data from commerce 
    const fetchCart= async()=>{
    
      setCart( await commerce.cart.retrieve())
    } 

    {
      
    }
  useEffect(()=>{
    getData()
    fetchCart()
  },[])

  {

  }

  
  return (
    <div className="App">
      <Navbar cartItemNumper={cart.total_unique_items}/>
      
      <Routes>
        <Route path="/" element={<Products products={products} additem={addItemHandelr}/> } />
        <Route path="/Cart" element={<Cart cart={cart}/> } />
      </Routes>
    </div>
  )
}

export default App
