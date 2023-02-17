import React from 'react';
import './Home.css'
import CreateSpace from '../leftNavBar/CreateSpace';
import Main from '../MiddleSection/Main';
import Ads from '../advertise/Ads';

function Home() {
    return (
        <div className='home-page'>
            <CreateSpace />
            <Main />
            <Ads />
        </div>
    );

}
export default Home;