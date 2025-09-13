import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0);

    const asset = "Diamond";
    const newAsset = "Gold";
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money : {money}</h4>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <GrandPa asset={asset}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;