import React, {useState} from 'react';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import NavBar from './components/NavBar/NavBar';
// import CustomCursor from './components/CustomCursor/CustomCursor';
import WelcomeSection from './pages/WelcomeSection/WelcomeSection';
import AboutSection from './pages/AboutSection/AboutSection';
import ExperienceSection from './pages/ExperienceSection/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection/ProjectsSection';
import CertificatesSection from './pages/CertificatesSection/CertificatesSection';
import Footer from './pages/Footer/Footer';
import ChatbotSection from './pages/ChatbotSection/ChatbotSection';

function App() {
  
  let [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

  return (
    <div className="App">
      {/* <CustomCursor/> */}
      {loading === true? 
      <LoadingScreen/>: 
      <>
        <NavBar/>
        <WelcomeSection/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <CertificatesSection/>
        <ChatbotSection/>
        <Footer/>
      </>
      }
    </div>
  );
}

export default App;