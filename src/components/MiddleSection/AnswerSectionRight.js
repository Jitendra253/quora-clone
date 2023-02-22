import React, { useState } from 'react';
import './AnswerSectionRight.css'
import { NavLink } from 'react-router-dom'

import create from '../assets/asset31.svg'
import create1 from '../assets/create1.jpeg'
import create2 from '../assets/create2.jpeg'
import create3 from '../assets/create3.jpeg'
import create4 from '../assets/create4.jpeg'
import create5 from '../assets/create5.jpeg'
import create6 from '../assets/create6.jpeg'
import create8 from '../assets/create8.jpeg'
import edit from '../assets/asset5.svg'
function AnswerSectionRight() {
    const [linksToCreate, setLinksToCreate] = useState([

        { image: create1, text: 'New Delhi' },
        { image: create2, text: 'Celebrity Gossip' },
        { image: create3, text: 'Technology' },
        { image: create4, text: 'Narendra Modi' },
        { image: create5, text: 'Falling in Love' },
        { image: create6, text: 'Science' },
        { image: create8, text: 'Hand Guns' }
    ]);
    return (
        <div className='ans-right-container'>
            <div className='ans-right-header'><p>Topics You May Know About</p><img src={edit} /></div>
            <div className='ans-right'>
                {linksToCreate.map(link => (
                    <div className="ans-right-link" key={link.text}>
                        <NavLink to="/" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <img src={link.image} alt={link.text} style={{ borderRadius: '50%' }} />
                            <span>{link.text}</span>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default AnswerSectionRight;