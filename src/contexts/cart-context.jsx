import React, { useContext, useState } from "react";
const CartContext = React.createContext();

export const useCartCtx = () => {
  return useContext(CartContext);
};

const CartContextProvider = (props) => {
  const [isShown, setIsShown] = useState(false);

  const openCartHandler = () => {
    setIsShown(true);
  };

  const closeCartHandler = () => {
    setIsShown(false);
  };
  const cartCtxValue = {
    isShown,
    openCartHandler,
    closeCartHandler,
  };
  return (
    <CartContext.Provider value={cartCtxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
