import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { PRODUCTS } from "../../products"
import { CartItem } from "./cart-item"
import { useNavigate } from 'react-router-dom'
import './cart.css'

export const Cart = () => {
    const { cartItems,getTotalAmount } = useContext(ShopContext)
    const totalAmount = getTotalAmount()
    const navigate = useNavigate()
   
    return (
        <div className="cart">
            <div className="title">
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            <div className="checkout">
                <div className="total">
                    <p><b>Subtotal: ${totalAmount}</b></p>
                </div>
                {totalAmount > 0 ? 
                    <div className="buttons">
                    <button onClick={() => navigate("/")}>Shopping More</button>
                    <button>Checkout</button>
                </div>
                : <h1>Your Cart list is Empty </h1>
            }
            </div>
        </div>
    )
}