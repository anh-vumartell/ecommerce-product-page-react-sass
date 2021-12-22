import React from "react";
import TopNav from "./TopNav";
import CartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import { useCartCtx } from "../contexts/cart-context";
import "../styles/layouts/_header.scss";

const Header = ({ onOpenCart }) => {
  const { itemsInCart } = useCartCtx();
  const numberOfCartItems = itemsInCart.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <div className="header">
        <TopNav />
        <div>
          <button className="btn-cart">
            <span>{numberOfCartItems}</span>
            <img src={CartIcon} alt="cart icon" onClick={onOpenCart} />
          </button>
          <button className="btn-avatar">
            <img className="avatar" src={Avatar} alt="avatar" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
