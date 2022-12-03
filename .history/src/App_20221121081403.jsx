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
    const {data}= await commerce.products.list()
    setProduct(data)
  } 

  // to get cart data from commerce 
    const fetchCart= async()=>{
      const response = await commerce.cart.retrieve()
    } 
  useEffect(()=>{
    getData()
  },[])


  console.log(products);
  return (
    <div className="App">
      <Navbar />
      <Products products={products}/>
    </div>
  )
}

export default App
