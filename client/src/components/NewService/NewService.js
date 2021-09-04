import React from 'react'
import CardUI from './CardUI'
const NewService = () => {
    return (
        <>
           <div className="containerfluid d-flex justify-content-center card-area mt-3 py-5">
               <div className="row">
                   <div className="col-md-4 col-sm-6">
                       <CardUI />
                   </div>
                   <div className="col-md-4 col-sm-6">
                       <CardUI />
                   </div>
                   <div className="col-md-4 col-sm-6">
                       <CardUI />
                   </div>
               </div>
           </div>
        </>
    )
}

export default NewService
