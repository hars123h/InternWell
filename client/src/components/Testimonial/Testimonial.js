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
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="Towards Skilldom is a very nice initiative. I Learnt new things like AR with Pravesh sir..The 5 session of Pravesh sir was really awesome.Dravisha & Aishwarya mamtought us lots of new things. Overall experience was amazing."
                        clientName="Rishav Raj"
                        clientPosition="TS 1.0 Participant, IIT Kanpur" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="It was my virtual learning experience and i really loved it. The Internwell team were awesome at managing the 18 days progrsm. Everything was scheduled, organized and was on time. I got a chance to attend sessions of awesome personalities, and got connected to some of them. I learnt many technical things. Overall it was something I will never forget. I would really love to join your upcoming programs."
                        clientName="Pranav Rishi"
                        clientPosition="TS 1.0 Participant, Doon Business School" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="First of all i would like to thank internwell team for their wonderful initiave for uplifting our skills in this Quarantine period..I attended 6 sessions and all of them were really fantastic..The best out of them was a session on communication skills by aishwarya mam which really boosted confidence in me and cleared all my doubts ..i wish that internwell will plan such wonderful programs in  future..thanks"
                        clientName="Adish bansal"
                        clientPosition="TS 1.0 Participant, Dasmesh public school" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="I have learned many new things in this lockdown period because of this program. Initially my thought was only to contribute to the program and not thought of attending the classes but once I attended the webinars of Prateek bhaiya, Praveen Kumar sir, Pravesh sir I continued attending the seminars. I am really happy by taking the step to join this program. Thank you for everyone who have taken this initiative."
                        clientName="Peddi Sakila"
                        clientPosition="GNITS Telangana" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="The program went really well . Every meeting was well organised and we got the chance to interact with some great personalities. We got to make many new friends. Many new technologies were introduced to us. Everybody was so friendly and kind. I really thank Internwell team for making this lockdown worth spending. Will definitely remember these days in the future when we use to sit back and relax with a coffee enjoying Towards Skilldom Meeting. Everything went so fast but definitely it was a lifetime achievement. "
                        clientName="Shivendu Mishra"
                        clientPosition="Institute of Engineering and Rural Technology" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="This workshop made my Lockdown period the best days of my life. I got to learn a lot of skills which I wished to learn since so long. All teachers were very enthusiastic and talented. Thanks to the mentors and organisers."
                        clientName="Dr.Nikhil"
                        clientPosition="Indian Army" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="I would say the experience was very wonderful. All the team members were energetic all through and put a great deal of effort in bringing together the mentors and students to a platform to make the lockdown time into a valuable learning time, thus giving all the students an insight about various carrier opportunities at the same time learning new skills towards exploring those opportunities. All the mentor panel should also be thanked for being patient and educating all the students."
                        clientName="Pedada Venkata Chaitanya"
                        clientPosition="N.T.R College of veterinary science" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="It was great to be part of such an initiative of the Internwell team. It added some values ​​by interacting with such amazing mentors who are all doing their best in their lives. This learning will not only help me, but it will give me a vision towards making the lives of others a paradise and to fill it with joy and happiness. Hope to have such wonderful learnings with me in some way."
                        clientName="Prakhar Agrawal"
                        clientPosition="Acharya Narendra Dev College, University of Delhi" />
                    <Card
                        img="./images/m40.jpeg"
                        alt="Testinomial Image 1"
                        clientDescription="During this lockdown period the support which was given by InternWell team was tremendous.The idea of InternWell team of supporting the PM relief fund with the amount received from the students by teaching them through online classes was quite impressive.I strongly believe that the InternWell team will continue teaching and giving their support to the students in the same way as there are doing so. "
                        clientName="ReddyGari Surya Prakash Reddy"
                        clientPosition="University of Leicester, UK" />
                </Slider>
            </div>
        </div>

    )
}

const Card = ({ img, alt, clientDescription, clientName, clientPosition }) => {
    return (
        <div className="image_style ">
            <img src={img} alt={alt} className="avatar" />
            <p style={{ color: 'gray' }}>{clientDescription}
            </p>
            <p style={{
                fontStyle: 'italic',
                marginTop: "25px"
            }}>
                <span className="t_name">{clientName}</span> , {clientPosition}
            </p>
        </div>
    )
}

export default Testimonial
