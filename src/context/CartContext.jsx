import { createContext, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";


export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cartItem,setCartItem] = useState([]);
    const addToCart = (product) => {
        //chk jho product add kr rhe vho already exost ki nhi 
        const itemInCart = cartItem.find((item) => item.id  === product.id)
        if(itemInCart){
            //inc quantity if already in cart 
            const updatedCart = cartItem.map((item)=>
            item.id === product.id ? {...item,quantity : item.quantity + 1} : item);
            setCartItem(updatedCart)
            toast.success("Product quantity increased")
        }
        else{
            //add new item with qty 1 
            setCartItem([...cartItem, {...product,quantity:1}])
            toast.success("Product is Added to cart")
        }
        
        //deconstruct pichle item , phir new product 
        console.log(cartItem);
    }

    //+ - se inc dec kran hian 
    const updateQuantity = (cartItem , productId, action) => {
        setCartItem(cartItem.map(item => {
            if(item.id === productId){
                let newUnit = item.quantity;
                if(action === "increase"){
                    newUnit = newUnit+1;
                    toast.success("Quantity is increased")
                }
                else if(action === "decrease"){
                    newUnit = newUnit-1;
                    toast.success("Quantity decreased")
                }
                return newUnit > 0 ?{...item,quantity:newUnit } : null
            }
            return item;
        }).filter(item => item != null) // remove item will null 1 se - kroge tho apne aap delete
        )
    }

    const deleteItem = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId))
        toast.error("Product deleted from cart")
    }

    return <CartContext.Provider value = {{cartItem, setCartItem,addToCart,updateQuantity,deleteItem}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);