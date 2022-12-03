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
    const response = await commerce.cart.add(product,quantity)
    setCart(response)
  }
  // to get cart data from commerce 
    const fetchCart= async()=>{
      const cart =await commerce.cart.retrieve()
      setCart(cart)
    } 

  // function to update the product quantity
    const updateCartProductQuantity= async (itemId,quantity)=>{
      const cart=await commerce.cart.update(itemId,{quantity})
      setCart(cart)
    }

     // function to remove the product from cart
    const removeCartProduct= async (itemId)=>{
      const {cart}=await commerce.cart.remove(itemId)
      setCart(cart)
    }
    // function to make cart empty
    const HandleEmptyCart= async ()=>{
      const {cart}=await commerce.cart.empty()
      setCart(cart)
    }

  useEffect(()=>{
    getData()
    fetchCart()
  },[])

  
  
  return (
    <div className="App">
      <Navbar cartItemNumper={cart.total_items}/>
      
      <Routes>
        <Route path="/" element={<Products products={products} additem={addItemHandelr}/> } />
        <Route path="/Cart" element={<Cart cart={cart} updateCartProductQuantity={updateCartProductQuantity} removeCartProduct={removeCartProduct} HandleEmptyCart={HandleEmptyCart}/> } />
      </Routes>
    </div>
  )
}

export default App
