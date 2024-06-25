import React from "react";
import './contact.css';
import About from '../../assets/about.png';

const Contact = () => {
    return (
        <section id="contactPage">
            <div className="about">
                <h1 className="aboutPageTitle">About Me</h1>
                <p className="aboutDesc">
                    My name is Cátia Fernandes and I'm 28 years old. I love had a paixon for animals and Nature and due to that I done a bachelor's in Biology.
                    <br/> I have had pets since I can remember: cats, dogs, turtle, and birds. I'm currently changing my carrer to enter de IT job market. <br />
                    Between jobs aplications and training my IT skills, I have some free time. <br/>
                    So, I though this is the perfect time to start petsitting and petwalking! It's something I intend to combine with my future work. <br/>
                    I'm currently  the tutor of a male dog named Pablo! He is a Jack Russell. I am used to barking, energy and strength. <br />
                    And a female cat named Benni. She fits the typical cat stereotype: very independent and doesn't like a lot of touching, just the presence of her owners.
                </p>
                <div className="aboutImg"> 
                    <img src={About}  alt="" className="aboutImg"/>
                </div>
            </div>
            <div className="contact">

            </div>
        </section>
    );
}

export default Contact