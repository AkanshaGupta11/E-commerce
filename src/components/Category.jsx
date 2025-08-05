import { getData } from "../context/DataContext";

import React, { useEffect } from 'react'

function Category() {
    const{data, fetchAllProducts} = getData();

    console.log(data);
    const getUniqueCategory = (data,property) => {
        let newVal = data?.map((currElm) => {
            return currElm[property]
        })
        newVal = [...new Set(newVal)];
        return newVal;
    }

    const categoryData = getUniqueCategory(data,"category")
    console.log(categoryData);

    useEffect(()=>{
        fetchAllProducts();
    },[])
  return (
    <div  className='bg-[#101829]'>
        <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-around md:justify-around py-7 px-4'>
            {
                categoryData?.map((item,index) => (
                    <div key = {index}>
                        <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>
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