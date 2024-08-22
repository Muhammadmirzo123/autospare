import React, { useState } from "react";

const ProductPage = () => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div className="product-page">
      <div className="product-details">
        <h1>MIRAGE MR-AT172 285/65</h1>
        <p>Rs. 50,000.00</p>
        <button onClick={toggleCart}>Add To Cart</button>
      </div>

      {isCartVisible && (
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          <div className="cart-item">
            <p>MIRAGE MR-AT172 285/65</p>
            <p>Rs. 50,000.00</p>
          </div>
          <button onClick={toggleCart}>Close Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
