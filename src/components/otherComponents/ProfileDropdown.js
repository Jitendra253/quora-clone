import './ProfileDropdown.css'
import content from '../assets/a (1).svg'
import rightarrow from '../assets/a (2).svg'
import message from '../assets/a (3).svg'
import srar from '../assets/a (4).svg'
import following from '../assets/a (6).svg'
import dollar from '../assets/a (7).svg'
import ads from '../assets/a (8).svg'

function ProfileDropdown() {
    return (
        <div className='profile-container'>
            <div className='profile-header'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' />
                <div>
                    <h1>Jitendra Mahali</h1>
                    <img src={rightarrow} ></img>
                </div>
            </div>
            <div className='profile-items'>
                <div>
                    <img src={message}></img>
                    <p>Messages</p>
                </div>
                <div>
                    <img src={ads}></img>
                    <p>Create Ad</p>
                </div>
                <div>
                    <img src={dollar}></img>
                    <p>Monetization</p>
                </div>
                <div>
                    <img src={content}></img>
                    <p>Your content & stats</p>
                </div>
                <div>
                    <img src={following}></img>
                    <p>Bookmarks</p>
                </div>
                <div>
                    <img src={following}></img>
                    <p>Drafts</p>
                </div>
                <div>
                    <img src={srar}></img>
                    <p>Try Quora+</p>
                </div>
            </div>
            <div className='settings'>
                <div>Logout</div>
                <div>Dark Mode</div>
                <div>Settings</div>
                <div>Languages</div>
                <div>Help</div>
            </div>
        </div>
    );
}
export default ProfileDropdown;