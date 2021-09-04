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
                   <h4 className="card-title">Card Title</h4>
               </div>
               <p className="card-text text-secondary">
               We offer never before prices for cross platform app development for your enterprises. Apps can be used for a variety of purposes. The portability of Apps is helping enterprises track production stats and resources faster than ever. Apps offer widespread connectivity and can establish a direct bridge between the customer and the enterprise
               </p>
               
           </div>
        </>
    )
}

export default CardUI
