import React, { useState } from 'react';
import './NotificationPageLeftNav.css'
import { NavLink } from 'react-router-dom'

function NotificationPageLeftNav() {
    const [notification, setNotification] = useState(
        ['Notifications', 'Stories', 'Questions', 'Spaces', 'People Updates', 'Comments and mentions', 'Upvotes', 'Your content', 'your profile', 'Announcements', 'Earnings', 'Subscriptions'
        ])


    return (
        <div className='notification-left-nav'>
            <div className='notification-left-create'>
                <div className='notification-heading'>Filters</div>

                {
                    notification.map((item) => {
                        return (
                            <NavLink className={({ isActive, isPending }) => {
                                return isActive ? "red" : "normal";
                            }} to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}><span>{item}</span></NavLink>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default NotificationPageLeftNav;