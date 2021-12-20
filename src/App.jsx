import Carousel from "./components/Carousel";
import ProductProfile from "./components/ProductProfile";
import Cart from "./components/Cart";
import Header from "./UI/Header";
import SideNav from "./UI/SideNav";
//import context providers
import ToggleContextProvider from "./contexts/toggle-context";
import CartContextProvider from "./contexts/cart-context";
//import styles
import "./styles/main.scss";

//import custom hooks
import { useCartCtx } from "./contexts/cart-context";
import { useState } from "react";
function App() {
  const [isShown, setIsShown] = useState(false);

  const cartModalHandler = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <ToggleContextProvider>
      <CartContextProvider>
        <div className="app-container" id="app">
          <Header onOpenCart={cartModalHandler} />
          <SideNav id="sideNav" />
          {isShown && <Cart />}
          <main id="main">
            <Carousel />
            <ProductProfile />
          </main>
        </div>
      </CartContextProvider>
    </ToggleContextProvider>
  );
}

export default App;
