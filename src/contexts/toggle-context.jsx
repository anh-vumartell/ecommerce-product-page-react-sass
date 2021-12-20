import React, { useState, useContext } from "react";

const ToggleContext = React.createContext();
export const useToggle = () => {
  return useContext(ToggleContext);
};
const ToggleContextProvider = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle((prevState) => !prevState);
  };
  const openSideNav = () => {
    console.log(document.getElementById("sideNav"));
    document.getElementById("sideNav").style.width = "70%";
  };
  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0";
    document.body.style.backgroundColor = "white";
  };
  const toggleCtxValue = {
    isToggle,
    toggleHandler,
    openSideNav,
    closeSideNav,
  };
  return (
    <ToggleContext.Provider value={toggleCtxValue}>
      {props.children}
    </ToggleContext.Provider>
  );
};
export default ToggleContextProvider;
