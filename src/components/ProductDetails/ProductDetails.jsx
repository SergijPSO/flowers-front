import React from 'react';

export default function ProductDetails({ product, onClose }) {
  if (!product) return null;

  const goBack = () => {
    onClose(); // Call the onClose function passed from parent
  };

  return (
    <div className="product-details">
      <div className="product-details__header">
        <h2>{product.product_name}</h2>
        <button onClick={goBack}>Go Back</button>
      </div>
      <p>Price: {product.currency}{product.prices[0]}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}
