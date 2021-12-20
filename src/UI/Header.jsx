import React from "react";
import MenuIcon from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import { useToggle } from "../contexts/toggle-context";
import "../styles/layouts/_header.scss";
const Header = () => {
  const { openSideNav, toggleHandler } = useToggle();

  const openSideNavHandler = () => {
    toggleHandler();
    openSideNav();
  };

  return (
    <>
      <div className="header">
        <div className="header-section">
          <button className="btn-menu">
            <img src={MenuIcon} alt="menu icon" onClick={openSideNavHandler} />
          </button>
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-section">
          <img src={CartIcon} alt="cart icon" />
          <img className="avatar" src={Avatar} alt="avatar" />
        </div>
      </div>
    </>
  );
};
export default Header;
