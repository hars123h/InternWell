import React from 'react'

const ServiceComponent = ({
    ServiceTitle,
    ServicePara

}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                    <h2>{ServiceTitle}</h2>
                    <p>{ServicePara}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceComponent
