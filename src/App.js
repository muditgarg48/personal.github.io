import './App.css';
import NavBar from './components/NavBar/NavBar';
import WelcomeSection from './pages/WelcomeSection/WelcomeSection';
import AboutSection from './pages/AboutSection/AboutSection';
import ExperienceSection from './pages/ExperienceSection/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection/ProjectsSection';
import CertificatesSection from './pages/CertificatesSection/CertificatesSection';
import Footer from './pages/Footer/Footer';

import React, {useState} from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  
  let [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

  return (
    <div className="App">
      {loading === true? 
      <LoadingScreen/>: 
      <>
        <NavBar/>
        <WelcomeSection/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <CertificatesSection/>
        <Footer/>
      </>
      }
    </div>
  );
}

export default App;
