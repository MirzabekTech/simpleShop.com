import { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext()

const getDefaultCarts = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1 ; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCarts())

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    } 

    const updateCartCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

    } 
    return (
    <ShopContext.Provider value={{cartItems, updateCartCount, addToCart, removeFromCart, getTotalAmount}}>
        {props.children}
    </ShopContext.Provider>
  )
}

