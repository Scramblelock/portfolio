import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Landing from '../components/Landing/Landing';
import AboutMe from '../components/AboutMe/AboutMe'; 
import Projects from '../components/Projects/Projects'; 
import Skills from '../components/Skills/Skills'; 
import Contact from '../components/Contact/Contact';  
import Footer from '../components/Footer/Footer';
import './App.css';

class App extends Component {

	constructor() {
    super();
    this.state = {
    };
  }

	render() {
	  return (
	    <div className="App">
	      <Navigation />
	      <Landing />
	      <AboutMe />
	      <Projects />
	      <Skills />
	      <Contact />
	      <Footer />
	    </div>
	  );
	}
}

export default App;
