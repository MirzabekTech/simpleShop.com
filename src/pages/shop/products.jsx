import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"

export const  Products = (props) => {
    const { id, title, price, img } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemsAmount = cartItems[id]
  return (
    <div className="product">
        <img src={img} alt="image" />
      <div className="description">
        <p><b>{title}</b></p>
        <hr />
        <p>${price}</p>
      </div>
      <button className="addBtn" onClick={() => addToCart(id)}>Add to Cart ({cartItemsAmount > 0 && <>{(cartItemsAmount)}</>})</button>
    </div>
  )
}
