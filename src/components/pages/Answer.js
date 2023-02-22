import './Answer.css';
import AnswerPageLeftNav from '../leftNavBar/AnswerPageLeftNav';
import AnswerSectionRight from '../MiddleSection/AnswerSectionRight';
import AnswerSection from '../MiddleSection/AnswerSection';

function Answer() {
    return (
        <div className='answer-page'>
            <AnswerPageLeftNav />
            <AnswerSection />
            <AnswerSectionRight />
        </div>
    );
}
export default Answer;