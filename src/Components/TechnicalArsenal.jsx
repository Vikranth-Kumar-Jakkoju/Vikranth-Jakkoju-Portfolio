import './TechnicalArsenal.css'

function TechnicalArsenal() {
    return (
        <>
            <section id='TechnicalArsenal' className='section'>
                <h1>Technical Arsenal</h1>
                <div className='section-container'>

                    <div className='skill-container'>
                        <h2>Languages</h2>
                        <ul>
                            <li>C++</li>
                            <li>C</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>SQL (Basic)</li>
                        </ul>
                    </div>
                    <div className='skill-container'>
                        <h2>Web Dev</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div className='skill-container'>
                        <h2>Core Concepts</h2>
                        <ul>
                            <li>DSA</li>
                            <li>OOP</li>
                            <li>Logical Reasoning</li>
                        </ul>
                    </div>
                    <div className='skill-container'>
                        <h2>Platforms & Tools</h2>
                        <ul>
                            <li className='skill'><a href="https://leetcode.com/u/Vikranth_Kumar_Jakkoju/" target="_blank" rel="noreferrer">LeetCode</a></li>
                            <li className='skill'><a href="#" target="_blank" rel="noreferrer">HackerRank</a></li>
                            <li className='skill'><a href="#" target="_blank" rel="noreferrer">CodeChef</a></li>
                            <li>Git / GitHub</li>
                            <li>VS Code</li>
                            <li>Gen AI Prompting</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TechnicalArsenal