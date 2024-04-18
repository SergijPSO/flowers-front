import React from 'react';

export default function ProductDetails  ({ product }) {
  if (!product) return null; // Return null if no product is selected
  return (
    <div className="product-details">
      <h2>{product.product_name}</h2>
      <p>Price: {product.currency}{product.prices[0]}</p>
      <p>Description: {product.description}</p>
      {/* Add other details as needed */}
    </div>
  );
};
