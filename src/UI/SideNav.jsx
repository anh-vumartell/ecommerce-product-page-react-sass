import { useToggle } from "../contexts/toggle-context";
import "../styles/layouts/_sidenav.scss";
import Overlay from "./Overlay";
const SideNav = () => {
  const { closeSideNav, toggleHandler, isToggle } = useToggle();

  const closeSideNavHandler = () => {
    toggleHandler();
    closeSideNav();
  };
  // const sideNavClass = `side-nav ${isToggle === true ? "opened" : ""}`;

  return (
    <>
      {isToggle === true && <Overlay onCloseSideNav={closeSideNavHandler} />}
      <div id="sideNav" className="side-nav">
        <button onClick={closeSideNavHandler} className="btn-close">
          X
        </button>
        <a href="#collections">Collections</a>
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
};
export default SideNav;
