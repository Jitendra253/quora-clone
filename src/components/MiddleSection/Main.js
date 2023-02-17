import './Main.css';
import NewPost from './NewPost';
import Posts from './Posts';

function Main() {
    return (
        <div className='Container'>
            <NewPost />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>
    );

}
export default Main;