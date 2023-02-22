import { useState } from 'react'


import './AnswerSection.css'
import star from '../assets/star.svg'
import answer from '../assets/asset25.svg'
import downvote from '../assets/asset8.svg'
import threedot from '../assets/asset11.svg'
import cross from '../assets/asset6.svg'
import follow from '../assets/asset16.svg'
import pass from '../assets/asset17.svg'
import dArrow from '../assets/asset30.svg'


function Questions() {
    return (
        <>
            <div className='questions'>
                <div className='question-title'>Why does it take time to become a successful freelancer?</div>
                <div className='question-details'>
                    <span> 2 answers</span>
                    <span>last requested 44m</span>
                </div>
                <div className='question-action'>
                    <div className='question-left'>
                        <div><img src={answer} /><span>Answer</span></div>
                        <div><img src={follow} /><span>Follow</span></div>
                        <div><img src={pass} /><span>Pass</span></div>
                    </div>
                    <div className='question-right'>
                        <div><img src={downvote} /></div>
                        <div><img src={threedot} /></div>

                    </div>
                </div>
            </div>
        </>
    );

}

function AnswerSection() {
    const [totalQuestions, setTotalQuestions] = useState(15);
    const [visibleQuestionsCount, setVisibleQuestionsCount] = useState(4);

    const showMoreQuestions = () => {
        setVisibleQuestionsCount(totalQuestions);
    };

    const questions = [];
    for (let i = 0; i < visibleQuestionsCount; i++) {
        questions.push(<Questions key={i} />);
    }
    return (
        <div className='answer-container'>
            <div className='questions-heading'>
                <img src={star}></img>
                <div>Questions for you</div>
            </div>
            {questions}
            {visibleQuestionsCount < totalQuestions && (
                <div onClick={showMoreQuestions} className='show-more'>
                    More<img src={dArrow} />
                </div>

            )}
        </div>
    );
}
export default AnswerSection;