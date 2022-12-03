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
    setProduct(await commerce.products.list())
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
  useEffect(()=>{
    getData()
    fetchCart()
  },[])

  {
    const arrProducts=Object.keys(products)
    console.log(arrProductsdata);
  }

  return (
    <div className="App">
      <Navbar />
      <Products products={products} />
    </div>
  )
}

export default App
