import productOne from "../images/image-product-1.jpg";
import deleteIcon from "../images/icon-delete.svg";
import "../styles/components/_cart.scss";

import { useCartCtx } from "../contexts/cart-context";
const Cart = ({ onCloseCart }) => {
  const { removeItem } = useCartCtx();
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
        <button className="btn-close" onClick={onCloseCart}>
          x
        </button>
      </div>
      <div className="cart-summary">
        <img
          className="cart-summary__image"
          src={productOne}
          alt="product one"
        />

        <div className="cart-summary__detail">
          <p>Autumn Limited Edition...</p>
          <div className="cart-price">
            <span>$125.00</span>
            <span>x</span>
            <span>3</span>
            <span className="cart-price__total">$375.00</span>
          </div>
        </div>
        <button onClick={removeItem}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
      <button className="btn-checkout">Checkout</button>
    </div>
  );
};
export default Cart;
