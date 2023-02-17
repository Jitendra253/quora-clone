import './MainFollowing.css'

function Pages() {
    return (
        <div className="post-author">
            <img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=900&t=st=1676461352~exp=1676461952~hmac=0a412588605984eebfb6a0c1751f6917f96fe0f8525929fb578db2c53c823fbf" />
            <div className="author-details">
                <p className="author-name">Pankaj Sharma</p>
                <p className="author-credentials">8.768k Followers</p>
                <p className='topics'>Psychology, Motivation, Self-help, Thinking, & Learning (Science & Experiences)
                </p>
            </div>
        </div>
    );

}

function MainFollowing() {
    return (
        <div className='follwoing-page'>
            <div className='intro'>
                <img src='https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_lightmode.png-26-cc59fbc57541079b.png' />
                <h1>Build your new following feed</h1>
                <h2>Follow some Spaces to start discovering stories in your feed.</h2>
            </div>
            <div className='container'>

                <div className="quora-post">
                    <p className='heading'>Discover Spaces</p>
                    <p className='subHeading'>Spaces You Might Like.</p>
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                    <Pages />
                </div>
            </div>
        </div>
    );
}
export default MainFollowing;