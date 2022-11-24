import React from 'react';
import Banner from '../../Banner/Banner';
import Bmw from './Bmw/Bmw';
import Tesla from './Tesla/Tesla';
import Toyota from './Toyota/Toyota';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toyota></Toyota>
            <Bmw></Bmw>
            <Tesla></Tesla>
            
        </div>
    );
};

export default Home;