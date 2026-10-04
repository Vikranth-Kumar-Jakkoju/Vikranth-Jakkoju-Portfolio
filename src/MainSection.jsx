import About from './about/About.jsx';
import Skills from './skills/Skills.jsx';
import Experience from './experience/Experience.jsx';
import Projects from './projects/Projects.jsx';
import LeetCode from './leetcode/LeetCode.jsx';
import Certifications from './Components/Certifications.jsx';
import Achievements from './Components/Achievements.jsx';
import Footer from './Components/Footer.jsx';

function MainSection() {
    return (
        <>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <LeetCode />
            <Achievements></Achievements>
            <Certifications></Certifications>
            <Footer></Footer>
        </>
    );
}

export default MainSection