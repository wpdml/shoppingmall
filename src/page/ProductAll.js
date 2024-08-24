import React,{useEffect,useState} from 'react'
import ProductCard from '../component/ProductCard'
import {Col} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList]=useState([])
    const [query] = useSearchParams()

    const getProducts = async () => {
        let searchQuery = query.get('q' || "");
        let categoryQuery = query.get("category") || "";

        console.log("searchQuery", searchQuery);
        let url = "https://my-json-server.typicode.com/wpdml/shoppingmall/products";

        if (searchQuery && categoryQuery&&categoryQuery !== "All") {
            url += `?q=${searchQuery}&category=${categoryQuery}`;
        } else if (searchQuery) {
            url += searchQuery? `?q=${searchQuery}`:``
        } else if (categoryQuery && categoryQuery !== "All") {
            url += `?category=${categoryQuery}`;
        }     
        console.log("Fetching URL:", url);
        let response = await fetch(url);
        let data = await response.json();
        console.log("Fetched data:", data);
        setProductList(data);
    };

    useEffect(()=>{
        getProducts()
    },[query])
  return (
    <div>
        <div className="product-grid">
            {productList.length > 0 ? (
                productList.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
</div>
  )
}

export default ProductAll
