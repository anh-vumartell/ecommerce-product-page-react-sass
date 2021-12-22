import MenuIcon from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
//import custom hooks
import { useToggle } from "../contexts/toggle-context";
//import styles
import "../styles/layouts/_topnav.scss";
const TopNav = () => {
  const { openSideNav, toggleHandler } = useToggle();

  // const numberOfCartItems = itemsInCart.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  const openSideNavHandler = () => {
    toggleHandler();
    openSideNav();
  };
  return (
    <div className="topnav">
      <button className="btn-menu">
        <img src={MenuIcon} alt="menu icon" onClick={openSideNavHandler} />
      </button>

      <img src={Logo} alt="logo" />

      <ul className="topnav__list">
        <li>
          <a href="#collections" className="active">
            Collections
          </a>
        </li>
        <li>
          <a href="#men">Men</a>
        </li>
        <li>
          <a href="#women">Women</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default TopNav;
