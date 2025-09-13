import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name, asset }) => {

    const newAsset = useContext(AssetContext)
    console.log(newAsset);
    return (
        <div>
            <h4>Special : {name}</h4>
            <p style={{ color: 'yellow' }}>Hidden Asset : {asset}</p>
            <p>New Asset : <strong style={{ color: 'red' }}>{newAsset}</strong></p>
        </div>
    );
};

export default Special;