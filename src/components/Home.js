import React, {useState,useEffect} from "react";
import Product from "./Product";
import Search from "./Search";

function Home() {

    const [products, setProducts] = useState([]);
   
    const getData = (text) => {
        console.log('text cha', text);
    }
    
    const handleSearch = (keyword) => {
        var newArray = products.filter(product => {
            return product.name.toLowerCase().includes(keyword.toLowerCase());
        })
        setProducts(newArray);
    }

    let list = [
        {
            id: 1,
            name: 'Samsung Galaxy Note 20 Ultra 5G',
            price: '20.000.000',
            madeIn: 'USA',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg'
        },
        {
            id: 2,
            name: 'iPhone 12 Pro Max I Chính hãng VN/A',
            price: '29.100.000',
            madeIn: 'VN',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7_1.jpg'
        },
        {
            id: 3,
            name: 'iPhone 11 128GB I Chính hãng VN/A',
            price: '20.000.000',
            madeIn: 'VN',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/i/p/iphone-11_2__1.jpg'
        }
    ]

    useEffect(() => {
        setProducts(list);
    }, [])

    return(
        <div className="container">
            <div className="row">
                <Search getDataSearch={handleSearch}/>
                {products.map(product => {
                    return <Product item={product} getDataParent={getData} key={product.id}/>
                })}
            </div>
        </div>
    )
}

export default Home;