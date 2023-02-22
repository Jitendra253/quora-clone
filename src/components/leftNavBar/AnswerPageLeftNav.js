import './AnswerPageLeftNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom'

function AnswerPageLeftNav() {
    return (
        <div className='ans-left-container'>
            <div className='ans-left-create'>
                <div className='heading'>Questions</div>
                <NavLink className={({ isActive, isPending }) => {
                    return isActive ? "red" : "normal";
                }} to='/answer'><span>Questions For you</span></NavLink>
                <NavLink className={({ isActive, isPending }) => {
                    return isActive ? "red" : "normal";
                }} to='./requests'><span>Answer Requests</span></NavLink>
                <NavLink className={({ isActive, isPending }) => {
                    return isActive ? "red" : "normal";
                }} to='/drafts'><span>Drafts</span></NavLink>
            </div>
        </div>
    );
}
export default AnswerPageLeftNav;