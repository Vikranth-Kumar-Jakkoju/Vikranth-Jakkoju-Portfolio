import './Projects.css'

function Projects() {
    return (
        <>
            <section id='Projects' className='section'>
                <h1>Projects</h1>
                <div id='section-container'>
                    <div className='Project'>
                        <h2>Interactive Study Planner</h2>
                        <h3>Personalized Academic Management Web Application</h3>
                        <p>Developed a responsive web-based Study Planner to help students efficiently manage their academic schedule, especially those with fixed class timetables, core/elective subjects, practicals, and upcoming exams.</p>
                        <p>Built as a solution to my own challenges during a busy semester, this tool provides a centralized dashboard for tracking semester progress, subject-wise workload, exam timetables, and batch-specific class schedules — eliminating the need for scattered notes or generic to-do apps.</p>
                        <div>
                            <h4>Key Features:</h4>
                            <ul>
                                <li>Semester overview with progress tracking</li>
                                <li>Subject categorization (Core, Electives, Practicals)</li>
                                <li>Integrated Exam Timetable</li>
                                <li>Batch/Class Timetable display</li>
                                <li>Clean, intuitive, and fully responsive UI</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Tech Stack:</h4>
                            <ul>
                                <li><b>Frontend:</b> HTML5, CSS3 (with responsive design)</li>
                                <li><b>Interactivity:</b> JavaScript (dynamic features in progress)</li>
                                <li>Deployed on GitHub Pages</li>
                            </ul>
                        </div>
                        <p>This project marks my first complete end-to-end web development build. It helped me deepen my understanding of semantic HTML, modern CSS layouts (Flexbox/Grid), responsive design principles, and planning for future JavaScript enhancements like drag-and-drop timetable customization, task editing, and visual progress charts.</p>
                        <p><b>Live Demo:</b> <a href="https://vikranth-kumar-jakkoju.github.io/Interactive-Study-Planner-Website/">Interactive-Study-Planner-Website</a></p>
                        <p><b>GitHub Repository:</b> <a href="https://github.com/Vikranth-Kumar-Jakkoju/Interactive-Study-Planner-Website">Interactive-Study-Planner-Website</a></p>
                    </div>
                    <div className='Project'>
                        <h2>My Portfolio</h2>
                        <h3>Modern Responsive Portfolio Built with React JS</h3>
                        <p>Designed and developed my personal portfolio website from scratch using React JS and pure CSS. This project showcases my skills, projects, experience, and journey as an aspiring web developer in a clean, modern, and fully responsive interface.</p>
                        <p>The website features a smooth single-page application (SPA) experience with intuitive navigation, elegant animations, and a professional dark/light theme-friendly design. Every component, layout, and interaction was hand-coded without using any external UI libraries or templates.</p>
                        <div>
                            <h4>Key Features:</h4>
                            <ul>
                                <li>Responsive design optimized for all devices (mobile-first approach)</li>
                                <li>Smooth scrolling and interactive navigation</li>
                                <li>Dynamic project showcase section</li>
                                <li>Skills & technologies display with visual highlights</li>
                                <li>About section highlighting my background and passion for web development</li>
                                <li>Contact form and social links integration</li>
                                <li>Fast performance and clean code structure</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Tech Stack:</h4>
                            <ul>
                                <li><b>Frontend:</b> React JS (Functional Components + Hooks)</li>
                                <li><b>Styling:</b> Pure CSS3 (Flexbox, Grid, Responsive Design, Animations)</li>
                                <li><b>Deployment:</b> Vercel</li>
                            </ul>
                        </div>
                        <p>This project strengthened my expertise in React fundamentals, component architecture, state management, modern CSS techniques, and deploying production-ready web applications. It serves as a living demonstration of my ability to build polished, user-friendly interfaces from scratch.</p>
                        <p><b>Live Demo:</b> <a href="">Vikranth Jakkoju Portfolio</a></p>
                        <p><b>GitHub Repository:</b> <a href="https://github.com/Vikranth-Kumar-Jakkoju/Vikranth-Jakkoju-Portfolio">Vikranth Jakkoju Portfolio Repository</a></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects