import React from 'react';
import Header from '../components/Header/Header';
import Main from './Main';
import Item from '../service/item';

const item = new Item(process.env.REACT_APP_ALG_SERVER);

const Index = (props) => {
    return (
        <>
            <Header />
            <Main item={item} />
        </>
    );
};

export default Index;