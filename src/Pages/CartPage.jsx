import "./CartPage.css";
import { CartButton } from "./ProductPaga";
import React from "react";
import { useContext } from "react";
import CartContext from "../ContextApi/CartContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { productList, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div id="container">
      <div className="product-cart-section">
        <div className="product-list">
          <h2>{productList.length > 0 ? "Shopping Cart" : "Your Amazon Cart is empty."}</h2>
          <div className="divider"></div>
          {productList.map((product) => (
            <Cart key={product.id} {...product} />
          ))}
          <div className="divider"></div>
          <p className="cart-total">
            Subtotal ({productList.length} items): $<b>{getTotalPrice()}</b>
          </p>
        </div>
        <div className="product-cart">
          <span>
            <span className="green">Your order is eligible for FREE Delivery.</span> Select this option at checkout. Details
          </span>
          <p className="cart-total">
            Subtotal ({productList.length} items): $<b>{getTotalPrice()}</b>
          </p>
          <CartButton name="Proceed to Pay"  onClick={() => navigate("/checkout")} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

const Cart = ({ id, name, price, status, image, quantity }) => {
  const { removeCart, handleQytChange } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart-img">
        <img src={`../image/ProductImage/${image}`} alt={name} />
      </div>
      <div style={{ flexGrow: "1" }}>
        <div className="cart-detail">
          <p className="cart-title">{name}</p>
          <span className="cart-stock">In {status}</span>
          <span className="cart-shipping">Eligible for FREE Shipping</span>
          <div className="cart-quantity">
            <button className="cart-btn" onClick={() => handleQytChange(id, Math.max(1, quantity - 1))}>
              <FaMinus />
            </button>
            <span className="cart-qty">{quantity}</span>
            <button className="cart-btn" onClick={() => handleQytChange(id, quantity + 1)}>
              <FaPlus />
            </button>
            <span className="cart-Qts" onClick={() => removeCart(id)}><FaTrash /> Delete</span>
          </div>
        </div>
      </div>
      <div className="cart-price">
        <span>$ {price * quantity}</span>
      </div>
    </div>
  );
};
