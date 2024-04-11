import React from 'react';
import products_data from '../../data/products_data.json';
import './ProductsList.scss';

export default function ProductsList() {
  console.log(products_data.products[0])
  return (
    <div className='app-product-list'>
      {products_data.products.map((item) => (
        <div className='app-product-list__product-card' key={item.id}>
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
