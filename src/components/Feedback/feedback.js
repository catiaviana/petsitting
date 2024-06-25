import React from 'react';
import './feedback.css';
import Feedback1 from '../../assets/pablo.jpg';
import Feedback2 from '../../assets/benni.jpg';
import Feedback3 from '../../assets/cali.jpg';
import Feedback4 from '../../assets/daisy.jpg';
import Feedback5 from '../../assets/cover.jpg';
import Feedback6 from '../../assets/sandy.jpg';


const Feedback = () => {
    return (
        <section id='feeback'>
            <h2 className='feedbackTitle'>Feedback</h2>
            <span className='feedbackDesc'>Here are some of my the pets I took care.</span>
            <div className='feedbackImgs'>
                <img src={Feedback1} alt="" className="FeedbackImg" />
                <img src={Feedback2} alt="" className="FeedbackImg" />
                <img src={Feedback3} alt="" className="FeedbackImg" />
                <img src={Feedback4} alt="" className="FeedbackImg" />
                <img src={Feedback5} alt="" className="FeedbackImg" />
                <img src={Feedback6} alt="" className="FeedbackImg" />
            </div>
            <button className='feedbackBtn'>See More</button>
        </section>
    )
}

export default Feedback