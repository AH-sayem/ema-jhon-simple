
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10= fakeData.slice(0,15);
    const [products ,setProducts] = useState(first10);
  

    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                products.map(pd => <Product Product={pd} ></Product>)
                }
           
            </div>
            <div className='card-container'>
                <h3>Thia is card</h3>

            </div>
            
          
        </div>
    );
};

export default Shop;