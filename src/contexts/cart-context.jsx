import React, { useContext, useState } from "react";
const CartContext = React.createContext();

export const useCartCtx = () => {
  return useContext(CartContext);
};

const CartContextProvider = (props) => {
  const [isCartToggled, setIsCartToggled] = useState(false);
  const cartModalHandler = () => {
    setIsCartToggled(true);
  };
  console.log(isCartToggled);
  const cartCtxValue = {
    cartModalHandler,
    isCartToggled,
    // openCart,
    // closeCart,
  };
  return (
    <CartContext.Provider value={cartCtxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
