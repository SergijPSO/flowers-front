import React from 'react';
import products_data from '../../data/products_data.json';
import './ProductsList.scss';
import { Link } from 'react-router-dom';

export default function ProductsList({ onProductClick }) {
  return (
    <div className='app-product-list'>
      {products_data.products.map((item) => (
        <div
          key={item.id}
          className='app-product-list__product-card'
          onClick={() => onProductClick(item)}
        >
          <img className='app-product-list__product-card_image' src={item.images[0]} alt="product" />
          <h2 className='app-product-list__product-card_name'>{item.product_name}</h2>
          <div className="app-product-list__product-card_order">
            <span className='app-product-list__product-card_price'>{item.currency}{item.prices[0]}</span>
            <button className='app-product-list__product-card_button'>Замовити</button>
          </div>
        </div>
      ))}
    </div>
  );
}
