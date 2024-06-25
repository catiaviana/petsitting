import React from "react";
import './intro.css';
import me from '../../assets/me.png';
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Cátia</span> <span className="introJob"><br/>Petsitter</span></span>
                <p className="introPara">I am providing services of petsitting and dogwalking. <br />I would love to take care of your pets by giving them love and attention! </p>
                <Link><button className="btn"> <img src="" alt="" />Talk with me!</button></Link>
            </div>
            <img src={me} alt="Profile" className="me"/>

        </section>
    )
}

export default Intro;