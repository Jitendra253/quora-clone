
import NotificationPageLeftNav from '../leftNavBar/NotificationPageLeftNav';
import NotificationMiddle from '../MiddleSection/NotificationMiddle';
import './Notifications.css'



function Notifications() {
    return (
        <div className='notification-page'>
            <NotificationPageLeftNav />
            <NotificationMiddle />
        </div>
    );
}
export default Notifications;