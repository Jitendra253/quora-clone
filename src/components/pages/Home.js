import React from 'react';
import './Home.css'
import CreateSpace from '../leftNavBar/CreateSpace';
import Main from '../MiddleSection/Main';
import Add from '../advertise/Add';

function Home() {
    return (
        <div className='home-page'>
            <CreateSpace />
            <Main />
            <Add />
        </div>
    );

}
export default Home;