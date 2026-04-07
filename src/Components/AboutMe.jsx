import './AboutMe.css'

function AboutMe() {
    
    return (
    <>
        <section id='AboutMe-container'>
            <div id='AboutMe' className='section'>
                <h1>Vikranth Jakkoju</h1>
                <p>I am a B.E. Information Technology student with a CGPA of 9.075 and a strong foundation in Data Structures and Algorithms. I actively practice problem solving, having solved over 293 problems on LeetCode, which has strengthened my analytical thinking and coding skills. I enjoy building practical solutions like my Interactive Study Planner and am interested in applying technology to solve real-world problems. I am eager to learn, collaborate, and contribute to impactful projects in both technical and business environments.</p>
                <div className='fieldset-container'>
                    <fieldset>
                        <legend>Person Details</legend>
                        <table>
                            <tbody>

                                <tr>
                                    <td>Mobile Number</td>
                                    <td>+91 8500709174</td>
                                </tr>
                                <tr>
                                    <td>Personal Email</td>
                                    <td><a href="#">jakkojuvikranth@gmail.com</a></td>
                                </tr>
                                <tr>
                                    <td>College</td>
                                    <td>Chaitanya Bharathi Institute of Technology (CBIT)</td>
                                </tr>
                                <tr>
                                    <td>Graduation Year</td>
                                    <td>2028</td>
                                </tr>
                                <tr>
                                    <td>College Email</td>
                                    <td><a href="#">ugs24106_it.vikranth@cbit.org.in</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutMe