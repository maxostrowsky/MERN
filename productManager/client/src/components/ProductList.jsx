import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className='text-center'>
            <h1>All Products: </h1>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <button className='btn btn-primary ml-5' onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;