import React from 'react'
import './CardUI.css'

const CardUI = () => {
    return (
        <>
            <div className="card text-center shadow">
               <div className="overflow">
                   <img src="https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg" className="card-img-top" alt="" />
               </div>
               <div className="card-body text-dark">
                   <h4 className="card-title">Business Consulting</h4>
               </div>
               <p className="card-text text-secondary">
               In the current scenario, business and startus culture are growing rapidly especially in India and thats why we have bring this consulting service in which we will help people with their business development and other things related to grow their market value
               </p>      
           </div>
        </>
    )
}

export default CardUI
