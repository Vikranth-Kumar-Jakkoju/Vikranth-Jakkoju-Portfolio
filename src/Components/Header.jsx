import './Header.css'

function Header() {
    return (
        <>
            <header>
                <h1 id='title'>My Portfolio</h1>
                <nav>
                    <a href="#AboutMe">About Me</a>
                    <a href="#TechnicalArsenal">Technical Arsenal</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Education">Education</a>
                    <a href="#Certifications">Certifications</a>
                    <a href="#Achievements">Achievements</a>
                </nav>
                <nav className='contact-container'>
                    <a href="#ContantMe">Contact Me</a>
                </nav>
            </header>
        </>
    );
}

export default Header