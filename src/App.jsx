import { useState } from "react";

import ProductImages from "./components/ProductImages";
import ProductProfile from "./components/ProductProfile";
import Cart from "./components/Cart";
import Header from "./UI/Header";
import SideNav from "./UI/SideNav";
//import context providers
import ToggleContextProvider from "./contexts/toggle-context";
import CartContextProvider from "./contexts/cart-context";
//import styles
import "./styles/main.scss";

function App() {
  const [isShown, setIsShown] = useState(false);

  const openCartHandler = () => {
    setIsShown(true);
  };
  const closeCartHandler = () => {
    setIsShown(false);
  };

  return (
    <ToggleContextProvider>
      <CartContextProvider>
        <div className="app-container" id="app">
          <Header onOpenCart={openCartHandler} />
          <SideNav id="sideNav" />
          {isShown && <Cart onCloseCart={closeCartHandler} />}
          <main id="main">
            <ProductImages />
            <ProductProfile />
          </main>
        </div>
      </CartContextProvider>
    </ToggleContextProvider>
  );
}

export default App;
