import React from 'react'
import './NewSocietyInit.css'

const NewSocityInit = () => {
    return (
        <div className="container bootstrap snippets bootdeys">
        <div className="row">
            <div className="col-md-6 col-sm-6 content-card">
                <div className="card-big-shadow">
                    <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                        <div className="content">
                            <h2 style={{color: "#fff"}} className="category">Fund Raisers</h2>
                            <p className="description">InternWell orgainsation always steps forward for helping the needy ones to raise funds who themselves cannot arrange that much money and are in urgent need of money but cannot reach out to those people</p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div className="col-md-6 col-sm-6 content-card">
                <div className="card-big-shadow">
                    <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                        <div className="content">
                        <h2 style={{color: "#fff"}} className="category">COVID Volunteers</h2>
                            <p className="description">During this COVID-19 Pandemic, InternWell orgainsation has tried its best to reach out the needy ones, organising social camps, reaching out to doctors and hospitals, helping various patients also in arranging beds and other equipments.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 col-sm-6 content-card">
                <div className="card-big-shadow">
                    <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                        <div className="content">
                        <h2 style={{color: "#fff"}} className="category">Donations</h2>
                            <p className="description">During this COVID-19 Pandemic, InternWell orgainsation has also donated in PM Cares Fund which can be used for relief efforts against the coronavirus outbreak and similar pandemic like situations in the future</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 col-sm-6 content-card">
                <div className="card-big-shadow">
                    <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                        <div className="content">
                        <h2 style={{color: "#fff"}} className="category">Vaccine Volunteers</h2>
                            <p className="description">InternWell orgainsation has also played a major role as a Vaccine Volunteer by guiding people at Vaccination sites, helps clinical team and administration in managing the patients and other stuff.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default NewSocityInit
