import React, { useState } from "react";
import Carousel from "./components/Carousel";
import Header from "./UI/Header";
import "./styles/main.scss";
import ProductProfile from "./components/ProductProfile";
import SideNav from "./UI/SideNav";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle((prevState) => !prevState);
  };
  return (
    <div className="app-container">
      <Header isToggle={isToggle} onToggle={toggleHandler} />
      {isToggle && <SideNav />}
      <main>
        <Carousel />
        <ProductProfile />
      </main>
    </div>
  );
}

export default App;
