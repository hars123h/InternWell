import React from 'react'
import './NewSocietyInit.css'

const NewSocityInit = () => {
    return (
        <div className="student">
        <div className="contain">
            <div className="box">
                <h2><img src="./images/icon2.png" alt="icon" /> </h2>
                <h3>Fund Raisers</h3>
                <p style={{marginTop: "25px"}}>
                Internwell always participates in fundraising for humanitarian, environmental and societal causes.
                </p>
            </div>

            <div className="box">
                <h2><img src="./images/icon1.png" alt="icon" /></h2>
                <h3> COVID Volunteers</h3>
                <p style={{marginTop: "25px"}}>
                During this COVID-19 Pandemic, InternWell tried its best to reach out to assist those in need.We helped organise social camps, reached out to doctors and hospitals, helped various patients arrange beds and other equipment.
                </p>
            </div>

            <div className="box">
                <h2><img src="./images/icon3.png" alt="icon" /></h2>
                <h3>Donations</h3>
                
                <p style={{marginTop: "25px"}}>
                During this COVID-19 Pandemic, InternWell also donated in PM Cares Fund which was used for relief efforts against the coronavirus outbreak.
                </p>
            </div>

            <div className="box">
                <h2><img src="./images/icon4.png" alt="icon" /></h2>
                <h3>Vaccine Volunteers</h3>
                <p style={{marginTop: "25px"}}>
                We played a major role as Vaccine Volunteers by guiding people at Vaccination sites and helping the clinical team and administration in managing the patients.
                </p>
            </div>
        </div>
    </div>
    )
}

export default NewSocityInit
