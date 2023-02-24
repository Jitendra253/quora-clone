import './NotificationMiddle.css'

function Pages() {
    return (
        <div className="notification-author">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKcihem_jw7JIxR1z1GrJKa8SzUEIgbHGJnDbIpJTFQ&s" />
            <div className="author-details">
                <div className="notification-name">
                    <p>About Infosyc</p>
                    <p>&#x2022;posted in a Space you might like</p>
                    <p>&#x2022;20h age</p>
                </div>
                <p className='notification-content'>Infosys is recognized as the fastest-growing IT services brand in the world by Brand Finance, the world's leading brand valuation firm, in its Global 500 2022 report.
                </p>
            </div>
        </div>
    );

}

function NotificationMiddle() {
    return (
        <div className='notification-container'>
            <div className='notification-heading'>
                <p>Notifications</p>
                <p>Mark All are read</p>
            </div>
            <div className='notification-container'>

                <div className="quora-notification">
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
export default NotificationMiddle;