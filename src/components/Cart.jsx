import productOne from "../images/image-product-1.jpg";
import deleteIcon from "../images/icon-delete.svg";
import "../styles/components/_cart.scss";

import { useCartCtx } from "../contexts/cart-context";
const Cart = ({ onCloseCart }) => {
  const { removeItem, itemsInCart, setItemsCount } = useCartCtx();
  // console.log(itemsInCart);
  const numberOfCartItems = itemsInCart.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const removeItemHandler = (id) => {
    removeItem(id);
    setItemsCount(0);
  };

  let cartSummaryContent;
  if (itemsInCart.length === 0) {
    cartSummaryContent = <p className="text-alert">Your cart is empty.</p>;
  } else {
    cartSummaryContent = (
      <ul>
        {itemsInCart.map((item) => (
          <li key={item.id}>
            <div className="cart-summary__content">
              <img
                className="cart-summary__image"
                src={productOne}
                alt="product one"
              />

              <div className="cart-summary__detail">
                <p>{item.productName}</p>
                <div className="cart-price">
                  <span>${item.originalPrice * item.discount}</span>
                  <span>x</span>
                  <span>{numberOfCartItems}</span>
                  <span className="cart-price__total">
                    ${item.originalPrice * item.discount * numberOfCartItems}
                  </span>
                </div>
              </div>
              <button onClick={() => removeItemHandler(item.id)}>
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Cart</h3>

        <button className="btn-close" onClick={onCloseCart}>
          x
        </button>
      </div>
      <div className="cart-summary">{cartSummaryContent}</div>
      {itemsInCart.length !== 0 && (
        <button className="btn-checkout">Checkout</button>
      )}
    </div>
  );
};
export default Cart;
