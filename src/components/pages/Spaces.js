import './Spaces.css'
import plus from '../assets/asset31.svg'

function Card() {

    return (
        <div className="spaces-cards">
            <div className="background">
                <img src="https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082__340.jpg" alt="" />
            </div>
            <div className="profile">
                <img src="https://cdn.britannica.com/81/157281-050-7CD08E32/Sun-Temple-Konarak-Orissa-India.jpg" alt="" />
            </div>
            <div className="name">Jitendra Mahali</div>
            <div className="prefession graytext">Web developer trainee at skillAcademy</div>
        </div>
    );
}

function Spaces() {
    return (
        <>
            <div className="spaces-container">
                <div className="spaces-header">
                    <h2>Welcome to Spaces!</h2>
                    <h5>Follow Spaces to explore your interests on Quora.</h5>
                    <div className="spaces-header-button">
                        <div  > <img src={plus} /><span>Create a Space</span></div>
                        <div> <img src={plus} /><span>Discover Spaces</span></div>
                    </div>
                </div>
                <div className="spaces-intro">
                    <h1>Discover Spaces</h1>
                    <h2>Spaces You May Like</h2>
                </div>
                <div className='card-container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>

        </>
    );
}
export default Spaces;