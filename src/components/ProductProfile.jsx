import "../styles/components/_productProfile.scss";
import cartIcon from "../images/icon-cart.svg";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";

import { useCartCtx } from "../contexts/cart-context";
const ProductProfile = () => {
  const { itemsCount, addItem, decreaseItemsCount } = useCartCtx();
  return (
    <section className="profile-container">
      <div className="product-intro">
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-price">
        <span className="product-price__discounted">$125.00</span>
        <span className="product-price__percent">50%</span>
        <span className="product-price__origin">$250.00</span>
      </div>
      <div className="product-action">
        <div className="product-action__modify">
          <button onClick={decreaseItemsCount}>
            <img src={minusIcon} alt="minus icon" />
          </button>
          <span>{itemsCount}</span>
          <button onClick={addItem}>
            <img src={plusIcon} alt="plus icon" />
          </button>
        </div>

        <button className="product-action__add">
          <img scr={cartIcon} alt="cart icon" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
export default ProductProfile;
