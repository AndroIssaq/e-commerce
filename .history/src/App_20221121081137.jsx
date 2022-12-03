import { useState , useEffect } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import  {commerce}  from './lib/commerce'
function App() {
  const [products, setProduct] = useState([])

  // to get datat from 
  const getData= async()=>{
    const {data}= await commerce.products.list()
    setProduct(data)
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