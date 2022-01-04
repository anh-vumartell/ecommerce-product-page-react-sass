import "../styles/components/_productProfile.scss";
import CartIcon from "../images/icon-cart.svg";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import Popup from "../UI/Popup";

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
  const {
    itemsCount,
    decreaseItems,
    increaseItems,
    addItem,
    isPopupShown,
    setAlert,
    setIsPopupShown,
  } = useCartCtx();

  const popUpHandler = (type, message) => {
    setIsPopupShown(true);
    setAlert({ type: type, message: message });
    setTimeout(() => {
      setIsPopupShown(false);
    }, 5000);
  };

  const addToCartHandler = () => {
    //only add to cart if user increase itemsCount
    if (itemsCount === 0) {
      popUpHandler("alert", "Please add more items!");
      return;
    } else {
      addItem({
        ...DUMMY_PRODUCT,
        amount: itemsCount,
      });
      popUpHandler("success", "Items successfully added!");
    }
  };
  const discountPercent = DUMMY_PRODUCT.discount * 100;
  const discountedPrice = DUMMY_PRODUCT.originalPrice * DUMMY_PRODUCT.discount;
  return (
    <section className="profile-container">
      {isPopupShown && <Popup />}
      <div className="product-intro">
        <h1>Sneaker Company</h1>
        <h2>{DUMMY_PRODUCT.productName}</h2>
        <p>{DUMMY_PRODUCT.productDesc}</p>
      </div>
      <div className="product-price">
        <span className="product-price__discounted">${discountedPrice}.00</span>
        <span className="product-price__percent">{discountPercent}%</span>

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
          <img className="cart-icon" src={CartIcon} alt="cart icon" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
export default ProductProfile;
