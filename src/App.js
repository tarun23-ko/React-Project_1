
import ProductUI from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import {commerce} from './lib/Commerce'
import { useEffect, useState } from "react";

// import {ProductUI,Navbar} from "./components";
function App() {
const [products,setData]=useState([])
  const fetchData= async ()=>{

    const {...getdata} = await commerce.products.list()

   setData(getdata.data)
  
  }
  useEffect(()=>{
fetchData()
    
  },[])
  console.log(products); 
  return (
    <div>
    <Navbar></Navbar>
    <ProductUI></ProductUI>
    </div>
  );
}

export default App;
