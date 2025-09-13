import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Products : {products.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;