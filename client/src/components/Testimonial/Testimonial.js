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
           <div style={{width: "50%"}}>
            <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                <Card
                    img="./images/m40.jpeg"
                    alt="Testinomial Image 1"
                />
                <Card
                    img="./images/t3.jpg"
                    alt="Testinomial Image 1"
                />
            </Slider>
        </div>
        </div>
        
    )
}

const Card = ({ img, alt }) => {
    return (
        <div className="image_style ">
            <img src={img} alt={alt} className="avatar" />
            <p style={{color: 'gray'}}>Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Animi veniam excepturi quos consequatur distinctio
              quaerat aliquid id in natus ut, ex, qui facere ipsum
               harum dolorum quia quo repudiandae facilis? Quod,
                tenetur fugiat! Molestias 
            minus consequatur, culpa laborum doloremque sapiente.
            </p>
            <p style={{fontStyle: 'italic',
             marginTop:"25px"
            }}>
            <span className="t_name">Harsh Tripathi</span> , Developer
            </p>
        </div>
    )
}

export default Testimonial
