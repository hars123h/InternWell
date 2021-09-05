import React from 'react'
import './NewStudentInit.css'

const NewStudentInit = () => {
    return (
        <>
        <div className="blog-post">
            <div className="blog-post__img">
                <img src="./images/info1.png" alt="info1" />
            </div>
            <div className="blog-post__info">
                <h1 className="blog-post__title">InternWell Mentorship Program</h1>
                <p className="blog-post__text">
                InternWell presents a “6 months mentorship program”. Get connected to some great experts from various domains utilizes a wide range of resources such as internship opportunities, insights from the experiments of Internwell, course materials, etc.
                And Get trained for a sparkling future ahead; on behalf of Internwell.
                </p>
                <h3>What you get:</h3> <br />
                <ul>
                    <li>Upskilling</li>
                    <li>Carrer Guidance</li>
                    <li>Personal query resolutions</li>
                    <li>and much more</li>
                </ul>
            </div>
        </div>
        <div className="blog-post mt-5">
            <div className="blog-post__img">
                <img src="./images/info2.png" alt="info1" />
            </div>
            <div className="blog-post__info">
                <h1 className="blog-post__title">Skilldom 2.0</h1>
                <p className="blog-post__text">
                An 18 – day online course that will help you shape your dreams into reality. The nation is currently on lockdown but don’t worry, the internet and electricity are still active. Many students wait for a time when no one will stop them from pursuing their passion.</p>
                <p>One of the major highlights of this event will be that mentors not only from India but also from all around the globe will impart their knowledge and experiences with us.
                Experts from various fields of education will connect to students. Main mission of this event is to provide exposure and guidance to students, especially those belonging to tier-3 colleges, so that they can grab every opportunity that comes their way .</p>
            </div>
        </div>
        </>
    ) 
}

export default NewStudentInit
