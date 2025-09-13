import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h4>{name}</h4>
            {
                name === 'Nishat' && <Special asset={asset}></Special>
            }

            {
                name === 'Himel' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;