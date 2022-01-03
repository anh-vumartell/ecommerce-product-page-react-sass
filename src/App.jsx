import { useState } from "react";

import ProductImages from "./components/ProductImages";
import ProductProfile from "./components/ProductProfile";
import Cart from "./components/Cart";
import Header from "./UI/Header";
import SideNav from "./UI/SideNav";

//import context providers
import ToggleContextProvider from "./contexts/toggle-context";
import CartContextProvider from "./contexts/cart-context";
import ImgSlideContextProvider from "./contexts/imgSlide-context";

//import styles
import "./styles/main.scss";
import Modal from "./UI/Modal";

function App() {
  const [isCartShown, setCartIsShown] = useState(false);
  const [isModalShown, setModalIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  };
  const closeCartHandler = () => {
    setCartIsShown(false);
  };
  const openModal = () => {
    console.log("open modal fnc called");
    setModalIsShown(true);
  };

  const closeModal = () => {
    console.log("close modal fnc called");
    setModalIsShown(false);
  };

  return (
    <ImgSlideContextProvider>
      <ToggleContextProvider>
        <CartContextProvider>
          <div className="app-container" id="app">
            {isModalShown && (
              <Modal isModalShow={isModalShown} onCloseModal={closeModal} />
            )}

            <Header onOpenCart={openCartHandler} />
            <SideNav id="sideNav" />
            {isCartShown && <Cart onCloseCart={closeCartHandler} />}

            <main id="main">
              <ProductImages onOpenModal={openModal} />
              <ProductProfile />
            </main>
          </div>
        </CartContextProvider>
      </ToggleContextProvider>
    </ImgSlideContextProvider>
  );
}

export default App;
