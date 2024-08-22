import React,{useEffect,useState} from 'react'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {
    const [productList, setProductList]=useState([])
   
    const getProducts=async()=>{
        let url= `http://localhost:4000/products`
        let response = await fetch(url)
        let data = await response.json();
        setProductList(data)
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
    {productList.map(product => (
        <ProductCard key={product.id} product={product} />
    ))}
</div>
  )
}

export default ProductAll
