import About from './about/About.jsx';
import Skills from './skills/Skills.jsx';
import Experience from './experience/Experience.jsx';
import Projects from './Components/Projects.jsx';
import Certifications from './Components/Certifications.jsx';
import Achievements from './Components/Achievements.jsx';
import Footer from './Components/Footer.jsx';

function MainSection() {
    return (
        <>
            <About />
            <Skills />
            <Experience />
            <Projects></Projects>
            <Certifications></Certifications>
            <Achievements></Achievements>
            <Footer></Footer>
        </>
    );
}

export default MainSection