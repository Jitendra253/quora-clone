import './Posts.css'
import upvote from '../assets/asset7.svg'
import downvote from '../assets/asset8.svg'
import comment from '../assets/asset9.svg'
import share from '../assets/asset10.svg'


function Posts() {
    return (
        <div className='container'>
            <div className="quora-post">
                <div className="post-author">
                    <img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=900&t=st=1676461352~exp=1676461952~hmac=0a412588605984eebfb6a0c1751f6917f96fe0f8525929fb578db2c53c823fbf" />
                    <div className="author-details">
                        <p className="author-name">Pankaj Sharma<a href='#'>. Follow</a></p>
                        <p className="author-credentials">Language teacher, Bhubaneswar</p>
                    </div>
                </div>
                <h1 className="post-title">What is the first thing you did with your salary?</h1>
                <div className="post-content">

                    <p>My First Salary is unforgettable….

                        Unfortunately on the day when i received my frst salary i got call from My home and they said My dad was in Hospital.

                        When i reached to home My Dad was No more(died).

                        I don't know where I spent at that time . But Unfortunately it was sad Memory.

                        My Father always used to say “i know U'll be in a best position" that was my motivation to do job now, for sure I'll make his soul happy one day.</p>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-93d16a2db6a24ff43d129848e8f64e90" className="post-image" alt="post Image" />
                    <p>Me with My DAD✌️ and my Lovely family.</p>
                </div>
                <div className="post-actions">
                    <div className='vote'>
                        <button className="upvote-btn"><img src={upvote} />Upvote 1.2k</button>
                        <button className="downvote-btn"><img src={downvote} /></button>
                    </div>
                    <button className="comment-btn"><img src={comment} />9</button>
                    <button className="comment-btn"><img src={share} />5</button>
                </div>
            </div>
        </div>
    );
}
export default Posts;