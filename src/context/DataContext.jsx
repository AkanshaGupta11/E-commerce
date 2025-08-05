import { createContext, useContext } from "react";
import axios from "axios";
import { useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState()

    const fetchAllProducts = async () =>{
        try{
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            const productData = res.data.products;
            setData(productData);
            console.log(productData);
        }
        catch(error){
            console.log(error);
        }
    }

    const getUniqueCategory = (data,property) => {
        let newVal = data?.map((currElm) => {
            return currElm[property]
        })
        newVal = ["All",...new Set(newVal)];
        return newVal;
    }

    const categoryData = getUniqueCategory(data,"category")
    const brandData = getUniqueCategory(data,"brand")
    return <DataContext.Provider value ={{data, setData, fetchAllProducts,categoryData, brandData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)