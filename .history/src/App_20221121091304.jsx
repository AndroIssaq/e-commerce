import { useState , useEffect } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import  {commerce}  from './lib/commerce'
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
      const {cart}=await commerce.cart.retrieve()
      setCart( )
    } 
  useEffect(()=>{
    getData()
    fetchCart()
  },[])

  {
    console.log(cart);
  }

  return (
    <div className="App">
      <Navbar />
      <Products products={products} additem={addItemHandelr}/>
    </div>
  )
}

export default App
