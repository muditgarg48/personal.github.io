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
import AnimatedCursor from "react-animated-cursor"

function App() {
  
  let [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

  return (
    <div className="App">
      <CustomCursor/>
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

const CustomCursor = () => {
  return (
    <AnimatedCursor
        innerSize={8}
        outerSize={20}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--font-highlight-color)'
        }}
        outerStyle={{
          border: '3px solid var(--font-secondary-color)'
        }}
      />
  );
}

export default App;