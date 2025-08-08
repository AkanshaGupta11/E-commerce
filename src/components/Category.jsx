import { useNavigate } from "react-router-dom";
import { getData } from "../context/DataContext";
import { useEffect } from "react";
import React from 'react'

function Category() {
    //const{categoryData} = getData();
    const navigate = useNavigate();
    const {data} = getData();
    
    //console.log(categoryData);

    const getUniqueCategory = (data,property) => {
        let newVal = data?.map((currElm) => {
            return currElm[property]
        })
        newVal = [...new Set(newVal)];
        return newVal;
    }

    const categoryData = getUniqueCategory(data,"category");
  return (
    <div  className='bg-[#101829]'>
        {/* //flex wrap */}
        <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4'>
            {
                categoryData?.map((item,index) => (
                    <div key = {index}>
                        <button 
                        onClick={()=>navigate(`/category/${item}`)}
                        className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>
                            {item}
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category