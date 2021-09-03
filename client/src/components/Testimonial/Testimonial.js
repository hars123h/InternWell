import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Testimonial.css'

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <i className="fa fa-chevron-left" style={{ color: "gray", fontSize: "30px" }} aria-hidden="true"></i>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <i className="fa fa-chevron-right" aria-hidden="true" style={{ color: "gray", fontSize: "30px" }}></i>
        </div>
    );
};

const Testimonial = () => {

    return (
        <div className="outermost testimonial">
            <div style={{ width: "50%" }}>
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
                    <Card
                        img="./images/test3.jpg"
                        alt="Testinomial Image 1"
                        clientDescription="“The IWMP is very valuable and awesome.It was a great opportunity for all technical and non-technical background people. It was the place where beginners can learn lots of new things and build their professional community. With the help of this program I have the opportunity to take more solid and determined steps in my career and life."
                        clientName="Shivani Gupta"
                        clientPosition="Indraprastha Institute of Management and Technology." />
                    <Card
                        img="./images/test1.jpg"
                        alt="Testinomial Image 1"
                        clientDescription="Here, i got the opportunities to interact with the different skilled and mindset persons, their perception of vision and i interact with awesome mentors with different fields . This is the thing that make you choose what you like and what you want to become because when we explore different fields there is a field that attract us and we choose that one for our journey to life."
                        clientName="Shubham Tushar"
                        clientPosition="SLIET Longowal" />
                    <Card
                        img="./images/test2.jpg"
                        alt="Testinomial Image 1"
                        clientDescription="A great socio-startup!😇
                        Had a great and learning experience as an intern at InternWell in the mentorship and upskilling programme. This is a great platform to learn and grow personally in various technical and non technical fields."
                        clientName="Adish bansal"
                        clientPosition="TS 1.0 Participant, Dasmesh public school" />
                </Slider>
            </div>
        </div>

    )
}

const Card = ({ img, alt, clientDescription, clientName, clientPosition }) => {
    return (
        <div className="image_style ">
            <img src={img} alt={alt} className="avatar" />
            <p style={{ fontSize: "15px", color: 'gray' }}>{clientDescription}
            </p>
            <p style={{
                fontSize: "15px",
                fontStyle: 'italic',
                marginTop: "25px"
            }}>
                <span className="t_name">{clientName}</span> , {clientPosition}
            </p>
        </div>
    )
}

export default Testimonial
