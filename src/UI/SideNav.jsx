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
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
};
export default SideNav;
