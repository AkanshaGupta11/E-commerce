import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { IoCartOutline } from "react-icons/io5";
function ProductCard({product}) {
    const {addToCart, cartItem} = useCart()
    const navigate = useNavigate()

  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
        <img src={product.image} alt={product.title}  onClick={()=>navigate(`/products/${product.id}`)}
        className='bg-gray-100 aspect-square' />
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold'>{product.price}</p>
        <button className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold'
        onClick={()=>addToCart(product)}>
        <IoCartOutline className='w-6 h-6'/>Add to Cart</button>
    </div>
  )
}

export default ProductCard