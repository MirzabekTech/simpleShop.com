import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
export const CartItem = (props) => {
    const {id ,title, price, img} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartCount } = useContext(ShopContext)
    return (
        <div className="buyedItem">
            <img src={img} alt="image" />
            <div className="description">
                <p><b>{title}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
        </div>
      </div>
    )
}