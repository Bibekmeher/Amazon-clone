import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPaga from "./Pages/ProductPaga";
import Context from "./ContextApi/Context";
import CheckoutPage from "./Pages/CheckoutPage";
import SearchResults from "./Compoenents/SearchResults";
import React from "react";
function App() {
  return (
    <>
    <Context>
      <Header />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/CartPage" element={<CartPage />}/>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path={`/ProductPaga/:id`} element={<ProductPaga />}/>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      <Footer />
      </Context>
    </>
  );
}

export default App;

CartPage