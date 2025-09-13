import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h4>My Self</h4>
            <Special asset={asset}></Special>
        </div>
    );
};

export default MySelf;