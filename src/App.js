import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

import SESMAProject from './project-pages/sesma';
import SafeDetails from './project-pages/safe';
import ProofLabDetails from './project-pages/proofLab-internship';
import CMCDetails from './project-pages/cmc-internship';
import MatlabRobot from './project-pages/matlab-robot'
import SparDetails from './project-pages/spartificial-internship';
import FEADetails from './project-pages/FEA-carbon';
import AutoRobot from './project-pages/autonomous-robot';
import VehicleDetails from './project-pages/vehicle-dynamics';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/sesma" element={<SESMAProject />} />
        <Route path="/projects/safe" element={<SafeDetails />} />
        <Route path="/projects/proofLab-internship" element={<ProofLabDetails />} />
        <Route path="/projects/cmc-internship" element={<CMCDetails />} />
        <Route path="/projects/matlab-robot" element={<MatlabRobot />} />
        <Route path="/projects/spartifical-internship" element={<SparDetails />} />
        <Route path="/projects/FEA-Carbon" element={<FEADetails />} />
        <Route path="/projects/autonomous-robot" element={<AutoRobot />} />
        <Route path="/projects/vehicle-dynamics" element={<VehicleDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default App;
