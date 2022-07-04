import React from 'react';
import Main from './Main';
import Item from '../service/item';

const item = new Item(process.env.REACT_APP_ALG_SERVER);

const Index = (props) => {
    return (
        <>
            <Main item={item} />
        </>
    );
};

export default Index;