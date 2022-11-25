import React from 'react';
import Banner from '../../Banner/Banner';
import Bmw from './Bmw/Bmw';
import HomeSection from './HomeSection/HomeSection';
import Tesla from './Tesla/Tesla';
import Toyota from './Toyota/Toyota';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toyota></Toyota>
            <Bmw></Bmw>
            <Tesla></Tesla>
            <HomeSection></HomeSection>
            
        </div>
    );
};

export default Home;