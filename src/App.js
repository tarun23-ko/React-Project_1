
import ProductUI from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import {commerce} from './lib/Commerce'
import { useEffect, useState } from "react";

// import {ProductUI,Navbar} from "./components";
function App() {
const [products,setData]=useState([])
  const [cart, setcart] = useState({})
  const fetchData= async ()=>{

    const {...getdata} = await commerce.products.list()

   setData(getdata.data)
  
  }
  const fetchCart=async ()=>{

    const cartresponse=await commerce.cart.retrieve()
    setcart(cartresponse)
    
  }
  const handleToCart=async (productID,quantity)=>{
     alert("I am from handle")
    const Addcart= await commerce.cart.add(productID,quantity)
    setcart(Addcart.cart)

  }
  useEffect(()=>{
fetchData()
fetchCart()
    
  },[])
  console.log(cart);
  return (
    <div>
    <Navbar totalItems={cart.total_unique_items}></Navbar>
      <ProductUI products={products} onAddToCart={handleToCart}></ProductUI>
    </div>
  );
}

export default App;
