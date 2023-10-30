import React, {useEffect, useState} from 'react'

export default function Product() {

    let[product, setproduct]= useState([]);

    const getProduct = async()=>{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data);
        setproduct(data);
    }
    useEffect(()=>{
        getProduct();
    },[] )
    return (
        <>
        <div className='row'>
    {
        product.map((ele)=>{
            return(
                <div className='col-md-4' key={ele.id}>
                    <img src={ele.image} alt="image" className='w-50'/>
                    <p>{ele.title}</p>
                    <p className=''>price :{ele.price}</p>
                    <p className='text-danger'>Description : {ele.description}</p>
                </div>
            )
        })
    }
    </div>
    </>
    )
}
