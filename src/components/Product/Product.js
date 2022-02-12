import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.Product);
    const { img, name, seller, price, stock } = props.Product;
    return (
        <div className='Product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='Product-name'>{name}</h4>
                <br />
                <p>
                    <small>
                        by:{seller}
                    </small>
                </p>
                <p>${price}</p>
                <br />

                <p><small>Only {stock} left in stock- Order soon </small></p>
                <button className='main-button'>Add to card</button>


            </div>

        </div>
    );
};

export default Product;