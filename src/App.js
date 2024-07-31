import './App.css';
import NavBar from './components/NavBar/NavBar';
import WelcomeSection from './pages/WelcomeSection/WelcomeSection';
import AboutSection from './pages/AboutSection/AboutSection';
import ExperienceSection from './pages/ExperienceSection/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection/ProjectsSection';
import CertificatesSection from './pages/CertificatesSection/CertificatesSection';
import { Fade } from "react-awesome-reveal";

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Fade 
        cascade 
        // direction="left" 
        triggerOnce 
        damping={0.1} 
        fraction={0.3}
        duration={1000}
      >
        <WelcomeSection/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <CertificatesSection/>
      </Fade>
      {/* <Fade direction="left" triggerOnce fraction={0.3}>
      </Fade>
      <Fade direction="left" triggerOnce fraction={0.3}>
      <Fade direction="left" triggerOnce fraction={0.3}>
      </Fade>
      </Fade> */}
    </div>
  );
}

export default App;
