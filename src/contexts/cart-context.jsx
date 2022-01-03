import React, { useContext, useReducer, useState } from "react";

const CartContext = React.createContext({
  itemsInCart: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const initialCartState = { itemsInCart: [], totalAmount: 0 };
//Setup Cart Reducer
const cartReducer = (state, action) => {
  //ADDING ITEM
  if (action.type === "ADD") {
    //Find index of action.item
    const exisitingItemIndex = state.itemsInCart.findIndex(
      (item) => item.id === action.item.id
    );

    //Access the existingItem with index
    const existingCartItem = state.itemsInCart[exisitingItemIndex];

    let updatedCartItems;
    //iF the cart item is already exist, update its total amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.itemsInCart];
      updatedCartItems[exisitingItemIndex] = updatedItem;
    } else {
      //item is added for the first time
      updatedCartItems = state.itemsInCart.concat(action.item);
    }
    const discountedPrice = action.item.originalPrice * action.item.discount;
    const updatedTotalAmount =
      state.totalAmount + discountedPrice * action.item.amount;
    console.log(updatedCartItems);
    return { itemsInCart: updatedCartItems, totalAmount: updatedTotalAmount };
  }

  //REMOVING ITEM
  if (action.type === "REMOVE") {
    //Find index of the item to be removed
    const indexOfCurrentItem = state.itemsInCart.findIndex(
      (item) => item.id === action.id
    );

    //Access the item with above index
    const currentItem = state.itemsInCart[indexOfCurrentItem];

    //Calculate the total amount after decreasing
    const updatedTotalAmount = state.totalAmount - currentItem.price;

    let updatedCartItems;
    // Check currentItem.amount: 2 scenarios
    //current.amount === 1 , remove the item by using filter()
    //current.amount > 1, decrease the amount by 1
    if (currentItem.amount === 1) {
      updatedCartItems = state.itemsInCart.filter(
        (item) => item.id !== action.id
      );
    }
    if (currentItem.amount > 1) {
      const updatedCurrentItem = {
        ...currentItem,
        amount: currentItem.amount - 1,
      };
      updatedCartItems = [...state.itemsInCart];
      updatedCartItems[indexOfCurrentItem] = updatedCurrentItem;
    }
    return { itemsInCart: updatedCartItems, totalAmount: updatedTotalAmount };
  }
};
export const useCartCtx = () => {
  return useContext(CartContext);
};

const CartContextProvider = (props) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [isPopupShown, setIsPopupShown] = useState(false);

  const increaseItemsCount = () => {
    setItemsCount((prevCount) => prevCount + 1);
  };
  const decreaseItemsCount = () => {
    setItemsCount((prevCount) => prevCount - 1);
  };
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  // const [items, setItems] = useState([]);
  // console.log(items);
  // const [itemsCount, setItemsCount] = useState(0);

  // const addItem = () => {
  //   setItemsCount((prevItemCounts) => prevItemCounts + 1);
  // };

  // const decreaseItemsCount = () => {
  //   itemsCount === 0
  //     ? setItemsCount(0)
  //     : setItemsCount((prevItemCounts) => prevItemCounts - 1);
  // };

  // const removeItem = (id) => {
  //   console.log("remove fnc called");
  //   setItems(items.filter((item) => item.id !== id));
  // };

  const cartCtxValue = {
    itemsInCart: cartState.itemsInCart,
    totalAmount: cartState.totalAmount,
    itemsCount: itemsCount,
    isPopupShown: isPopupShown,
    setIsPopupShown,
    alert: alert,
    setAlert,
    setItemsCount: setItemsCount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    increaseItems: increaseItemsCount,
    decreaseItems: decreaseItemsCount,
  };
  return (
    <CartContext.Provider value={cartCtxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
