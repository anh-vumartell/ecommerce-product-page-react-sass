import React from "react";
import MenuIcon from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
//import custom hooks
import { useCartCtx } from "../contexts/cart-context";
import { useToggle } from "../contexts/toggle-context";

import "../styles/layouts/_header.scss";

const Header = ({ onOpenCart }) => {
  const { openSideNav, toggleHandler } = useToggle();
  const { itemsCount } = useCartCtx();
  // const numberOfCartItems = itemsInCart.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  const openSideNavHandler = () => {
    toggleHandler();
    openSideNav();
  };

  return (
    <>
      <div className="header">
        <div>
          <button className="btn-menu">
            <img src={MenuIcon} alt="menu icon" onClick={openSideNavHandler} />
          </button>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <button className="btn-cart">
            <span>{itemsCount}</span>
            <img src={CartIcon} alt="cart icon" onClick={onOpenCart} />
          </button>

          <img className="avatar" src={Avatar} alt="avatar" />
        </div>
      </div>
    </>
  );
};
export default Header;
