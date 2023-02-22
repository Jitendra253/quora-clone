import React, { useState } from 'react';
import './MessageContainer.css';
import message from '../assets/asset20.svg'
import dArrow from '../assets/asset30.svg'
import uparrow from '../assets/upArrow.svg'

function MessageContainer() {
    const [visible, setVisible] = useState(false);

    const toggleMessage = () => {
        setVisible(!visible);
    };

    return (
        <div className={`message-container ${visible ? 'visible' : ''}`}>
            <div className='message-header' onClick={toggleMessage} >
                <div>Message</div>
                <div>
                    <img src={message} />
                    <img src={visible ? dArrow : uparrow} />
                </div>
            </div>
            <div className='message-body'>
                <img src='https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png' />
                <h2>No Messages</h2>
                <p>Connect with others on Quora by beginning a new conversation.</p>
                <button><img className='newmessge' src={message} />New Message</button>
            </div>
        </div>
    );
}

export default MessageContainer;
