import './NewPost.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import search from '../assets/asset28.svg'
import ask from '../assets/asset3.svg'
import answer from '../assets/asset4.svg'
import post from '../assets/asset5.svg'
import Modal from '../otherComponents/Modal';
import cross from '../assets/asset6.svg'



function NewPost() {
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState('question');
    const handleModal = () => {
        console.log('Modal clicked');
        setFormType('question');
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }
    return (
        <>
            <div className='middle-post'>
                <div className='new-post'>
                    <div className='top'>
                        <div className='profile'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile' />
                        </div>
                        <div className='input'>
                            What do you want to ask or share?
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='item'>
                            <NavLink onClick={() => { handleModal(); setFormType('question') }} to='/' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} ><img src={ask} /><span>Ask</span></NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to='/' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} ><img src={answer} /><span>Answer</span></NavLink>
                        </div>
                        <div className='item'>
                            <NavLink onClick={() => { handleModal(); setFormType('post') }} to='/' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} ><img src={post} /><span>Post</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {showModal && (
                    <Modal onClose={handleClose} formType={formType}>
                        <div onClick={handleClose} defaultFormType="question"><img src={cross
                        } alt='corss'
                        ></img></div>
                    </Modal>
                )}
            </div>
        </>

    );
}
export default NewPost;