import MenuIcon from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import "../styles/layouts/_header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <img src={MenuIcon} alt="menu icon" />
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-section">
        <img src={CartIcon} alt="cart icon" />
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};
export default Header;
