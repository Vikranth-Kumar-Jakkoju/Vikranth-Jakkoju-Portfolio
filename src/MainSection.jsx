import About from './about/About.jsx';
import TechnicalArsenal from './Components/TechnicalArsenal.jsx';
import Projects from './Components/Projects.jsx';
import Certifications from './Components/Certifications.jsx';
import Achievements from './Components/Achievements.jsx';
import Footer from './Components/Footer.jsx';

function MainSection() {
    return (
        <>
            <About />
            <TechnicalArsenal></TechnicalArsenal>
            <Projects></Projects>
            <Certifications></Certifications>
            <Achievements></Achievements>
            <Footer></Footer>
        </>
    );
}

export default MainSection