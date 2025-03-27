import React,{ useState, useEffect } from "react";
import CartContext from "./CartContext";

const Context = (props) => {
  
  const [open, setOpen] = useState(false);
  const openButton = () => setOpen(true);
  const closeButton = () => setOpen(false);

  // Load cart data from LocalStorage when the app starts
  const [productList, setProductList] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart data to LocalStorage whenever productList changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(productList));
  }, [productList]);

  function addtoCart(id, name, price, status, image) {
    setProductList((prevState) => {
      const existingProduct = prevState.find((item) => item.id === id);
      if (existingProduct) {
        return prevState.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevState, { id, name, price, status, image, quantity: 1 }];
    });
  }

  function removeCart(id) {
    setProductList((prevState) => prevState.filter((item) => item.id !== id));
  }

  function handleQytChange(id, quantity) {
    setProductList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, parseInt(quantity)) } : item
      )
    );
  }

  function getTotalPrice() {
    return productList.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ productList, addtoCart, removeCart, handleQytChange, getTotalPrice ,open, openButton, closeButton}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
