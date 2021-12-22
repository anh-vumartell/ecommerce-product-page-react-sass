import "../styles/components/_productProfile.scss";
import CartIcon from "../images/icon-cart.svg";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";

import { useCartCtx } from "../contexts/cart-context";
const DUMMY_PRODUCT = {
  id: "product 1",
  productName: "Fall Limited Edition Sneakers",
  productDesc:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  originalPrice: 250,
  discount: 0.5,
  amount: 0,
};
const ProductProfile = () => {
  const { itemsCount, decreaseItems, increaseItems, addItem } = useCartCtx();

  const addToCartHandler = () => {
    addItem({
      ...DUMMY_PRODUCT,
      amount: itemsCount,
    });
  };
  return (
    <section className="profile-container">
      <div className="product-intro">
        <h1>Sneaker Company</h1>
        <h2>{DUMMY_PRODUCT.productName}</h2>
        <p>{DUMMY_PRODUCT.productDesc}</p>
      </div>
      <div className="product-price">
        <span className="product-price__discounted">
          ${DUMMY_PRODUCT.originalPrice * DUMMY_PRODUCT.discount}.00
        </span>
        <span className="product-price__percent">
          {DUMMY_PRODUCT.discount * 100}%
        </span>
        <span className="product-price__origin">
          ${DUMMY_PRODUCT.originalPrice}.00
        </span>
      </div>
      <div className="product-action">
        <div className="product-action__modify">
          <button onClick={decreaseItems}>
            <img src={minusIcon} alt="minus icon" />
          </button>
          <span>{itemsCount}</span>
          <button onClick={increaseItems}>
            <img src={plusIcon} alt="plus icon" />
          </button>
        </div>

        <button className="product-action__add" onClick={addToCartHandler}>
          <img src={CartIcon} alt="cart icon" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
export default ProductProfile;
