import React, { useState } from 'react';
import { Link, NavLink, } from 'react-router-dom'
import './Header.css';
import ProfileDropdown from '../otherComponents/ProfileDropdown';
import Modal from '../otherComponents/Modal';


import quoraLogo from '../assets/quoraLogo.png'
import search from '../assets/asset28.svg'
import worldicon from '../assets/asset29.svg'
import home from '../assets/asset22.svg'
import following from '../assets/asset23.svg'
import answer from '../assets/asset25.svg'
import spaces from '../assets/asset26.svg'
import notification from '../assets/asset27.svg'
import cross from '../assets/asset6.svg'

function Header() {
    const [showProfile, setShowProfile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState('question');

    const handleClick = () => {
        setShowProfile(!showProfile);
    }

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
            <header className="header">
                <div className="logo">
                    <NavLink to="/" >
                        <img src={quoraLogo} />
                    </NavLink>
                </div>
                <div className="header-icon">
                    <NavLink to="/" className={({ isActive, isPending }) => {
                        return isActive ? "red" : "normal";
                    }}>
                        <img src={home} />
                    </NavLink>
                </div>
                <div className="header-icon">
                    <NavLink to="/following" className={({ isActive, isPending }) => {
                        return isActive ? "red" : "normal";
                    }}>
                        <img src={following} />
                    </NavLink>
                </div>
                <div className="header-icon">
                    <NavLink to="/answer" className={({ isActive, isPending }) => {
                        return isActive ? "red" : "normal";
                    }} >
                        <img src={answer} />
                    </NavLink>
                </div>
                <div className="header-icon">
                    <NavLink to="/spaces" className={({ isActive, isPending }) => {
                        return isActive ? "red" : "normal";
                    }}>
                        <img src={spaces} />
                    </NavLink>
                </div>
                <div className="header-icon">
                    <NavLink to="/notifications" className={({ isActive, isPending }) => {
                        return isActive ? "red" : "normal";
                    }}>
                        <img src={notification} />
                        <div className="notification-badge">3</div>
                    </NavLink>
                </div>
                <div className="search-bar">
                    <form>
                        <img src={search} className="search-icon" alt='searchicon' />
                        <input type="text" placeholder="Search Quora" className='search-input' />
                    </form>
                </div>
                <div className="quora-plus">
                    <NavLink to="/">
                        Try Quora+
                    </NavLink>
                </div>
                <div onClick={handleClick} className="header-icon">
                    <NavLink>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile image' />
                    </NavLink>

                </div>
                <div className="header-icon">
                    <NavLink to="/">
                        <img src={worldicon} alt='world icon' />
                    </NavLink>
                </div>
                <div className="ask-question">
                    <NavLink onClick={handleModal}>
                        Add Question
                    </NavLink>
                </div>

            </header>
            <div>
                {showProfile && <ProfileDropdown />}
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

export default Header;
