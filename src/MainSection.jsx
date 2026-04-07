import Header from './Components/Header.jsx'
import AboutMe from './Components/AboutMe.jsx'
import TechnicalArsenal from './Components/TechnicalArsenal.jsx';
import Projects from './Components/Projects.jsx';
import Education from './Components/Education.jsx';
import Certifications from './Components/Certifications.jsx';
import Achievements from './Components/Achievements.jsx';
import Footer from './Components/Footer.jsx';

function MainSection() {
    return (
        <>
            <Header></Header>
            <AboutMe></AboutMe>
            <TechnicalArsenal></TechnicalArsenal>
            <Projects></Projects>
            <Education></Education>
            <Certifications></Certifications>
            <Achievements></Achievements>
            <Footer></Footer>
        </>
    );
}

export default MainSection