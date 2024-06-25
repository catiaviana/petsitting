import React from "react";
import './skills.css';
import petsitting from '../../assets/petsitting.png';
import petwalking from '../../assets/petwalking.png';
import hygiene from '../../assets/hygiene.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Services</span>
            <span className="skillDesc">I am an attentive petsitter and aware of the needs for your pets. <br /> I offer the option to provide video and photographic updates of your pet, ensuring you are informed about their well-being throughout the duration of the services.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={petsitting} alt="Petsitting" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Petsitting</h2>
                        <p>
                            <li>all the play, care and attention to your pet at home</li>
                            <li>clean/change sand</li>
                            <li>food and water</li>
                            <li>give medication if needed</li>
                            <li>with a plus: watering your plants!</li>
                            <li>petsitting can be combined with petwalking</li>
                            <li>2 times (hour) per day</li>
                            <li>1 hour: 10€ / 5 to 14 days: 7.5€ per 1 hour / 14 days to 1 month: 6.5€ per hour</li>
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={petwalking} alt="Petwalking" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Petwalking</h2>
                        <p>
                            <li>walks of 1 hour, 2 times per day</li>
                            <li>adapted walk for each pet: type of walk and duration</li>
                            <li>petwalking can be combined with petsitting</li>
                            <li>1 hour: 10€ / 5 to 14 days: 7.5€ per 1 hour / 14 days to 1 month: 6.5€ per hour</li>
                        </p> 
                    </div>
                </div>
                <div className="skillBar">
                    <img src={hygiene} alt="Hygiene" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Hygiene</h2>
                        <p>
                            <li>Clip nails</li>
                            <li>Brushing</li>
                            <li>Simple Bath</li>
                            <li>clip nails: 3€ / Brushing and simple bath: 4€ / full package: 5€</li>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;