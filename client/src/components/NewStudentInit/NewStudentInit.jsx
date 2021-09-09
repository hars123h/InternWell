import React from 'react'
import './NewStudentInit.css'

const NewStudentInit = () => {
    return (
        <>
    <div className="container">
    {/* <!-- start event block --> */}
    <div className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="./images/info1.png" alt="" />
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size25 md-font-size20 xs-font-size18 font-weight-500"><a href="event-details.html" className="text-theme-color">InternWell Mentorship Program</a></h5>
                
                <p className="student__about">InternWell presents a “6 months mentorship program”. Get connected to some great experts from various domains utilizes a wide range of resources such as internship opportunities, insights from the experiments of Internwell, course materials, etc.
                And Get trained for a sparkling future ahead; on behalf of Internwell.</p>
                <a className="butn larger margin-10px-top md-no-margin-top" href="https://scoopbunch.com/2021/02/16/internwell-presents-upskilling-and-mentorship-program/">Read More <i className="fas fa-long-arrow-alt-right margin-10px-left"></i></a>
            </div>
        </div>
    </div>
    {/* <!-- end event block --> */}

    {/* <!-- start event block --> */}
    <div className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-7 order-2 order-lg-1">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h4 className="margin-15px-bottom md-margin-10px-bottom font-size25 md-font-size20 xs-font-size18 font-weight-500"><a href="event-details.html" className="text-theme-color">Skilldom 2.0</a></h4>
               
                <p className="student__about">An 18 – day online course that will help you shape your dreams into reality. The nation is currently on lockdown but don’t worry, the internet and electricity are still active. Many students wait for a time when no one will stop them from pursuing their passion. Experts from various fields of education will connect to students. Main mission of this event is to provide exposure and guidance to students, especially those belonging to tier-3 colleges, so that they can grab every opportunity that comes their way .</p>
                <a className="butn large margin-10px-top md-no-margin-top" href="https://medium.com/towards-skilldom/internwell-dd9a4e6459fe">Read More <i className="fas fa-long-arrow-alt-right margin-10px-left"></i></a>
            </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative">
                <img src="./images/info2.png" alt="" />
            </div>
        </div>
    </div>
    {/* <!-- end event block -- */}

    

</div>
        </>
    ) 
}

export default NewStudentInit
