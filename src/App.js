import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import Feedback from './components/Feedback/feedback';
import Contact from './components/Contact/contact';

function App() {
    return(
        <div className="App">
            <Navbar/>
            <Intro/>
            <Skills/>
            <Feedback/>
            <Contact/>
        </div>
    );
}

export default App;