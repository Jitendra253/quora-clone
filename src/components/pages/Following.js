import CreateSpace from '../leftNavBar/CreateSpace';
import Ads from '../advertise/Ads';
import './Following.css'
import MainFollowing from '../MiddleSection/MainFollwoing';
function Following() {
    return (
        <div className='followin-page'>
            <CreateSpace />
            <MainFollowing />
        </div>
    );
}

export default Following;