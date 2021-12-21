import React, { useContext, useState } from "react";
const CartContext = React.createContext();

export const useCartCtx = () => {
  return useContext(CartContext);
};

const CartContextProvider = (props) => {
  const [items, setItems] = useState([
    { id: "item 1", item: "Autumn Limited Edition", price: 125, amount: 3 },
  ]);
  const [itemsCount, setItemsCount] = useState(0);

  const addItem = () => {
    setItemsCount((prevItemCounts) => prevItemCounts + 1);
  };

  const decreaseItemsCount = () => {
    itemsCount === 0
      ? setItemsCount(0)
      : setItemsCount((prevItemCounts) => prevItemCounts - 1);
  };

  const removeItem = (id) => {
    console.log("remove fnc called");
    setItems(items.filter((item) => item.id !== id));
  };

  const cartCtxValue = {
    itemsCount,
    addItem,
    decreaseItemsCount,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartCtxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
