import React, { useState } from "react";
import "./CheckOut.css";

const CheckoutPage = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.zip) newErrors.zip = "Zip code is required.";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required.";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required.";
    if (!formData.cvv) newErrors.cvv = "CVV is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setPaymentSuccess(true);
      setCart([]); 
    }
  };

  return (
    <div className="checkout-container">
    {!paymentSuccess ? <h2>Checkout</h2> : ""}  
      {paymentSuccess ? (
        <div className="success-message">🎉 Payment Successful! Thank you for your order.</div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}

          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <span className="error">{errors.city}</span>}

          <label>Zip Code:</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
          {errors.zip && <span className="error">{errors.zip}</span>}

          <label>Card Number:</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}

          <label>Expiry Date:</label>
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
          {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}

          <label>CVV:</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
          {errors.cvv && <span className="error">{errors.cvv}</span>}

          <button type="submit" className="checkout-btn">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
