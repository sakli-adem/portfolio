import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CertPage from './components/CertPage/CertPage'; 
import ProjectPage from './components/ProjectPage/ProjectPage'; 
import Mirror from './components/Mirror/Mirror'; // Import du composant Mirror
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* Route pour CertPage */}
                    <Route path="/certPage">
                        <CertPage />
                    </Route>

                    {/* Route pour ProjectPage */}
                    <Route path="/ProjectPage">
                        <ProjectPage />
                    </Route>

                    {/* Route pour Mirror */}
                    <Route path="/mirror">
                        <Mirror />
                    </Route>

                    {/* Layout par défaut */}
                    <Route path="/">
                        <Header />
                        <Presentation />
                        <About />
                        <Skills />
                        <Certificates />
                        <Projects />
                        <Contact />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;