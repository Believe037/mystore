import { useState, useEffect } from "react"
import ProductItem from "./components/ProductItem";
import Nav from "./components/Nav";
import styles from './css/app.module.css'


function App() {

  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(()=>{

    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      setProducts(data.products)
      console.log(data.products)
    };

    fetchProducts();
    setIsLoading(false)
  }, []);

  return (
    <>
    <div>
      <Nav />
      <ProductItem products={products} isLoading={isLoading} />
    </div>
    </>
  )
}

export default App
