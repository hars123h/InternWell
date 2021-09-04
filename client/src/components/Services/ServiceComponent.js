import React from 'react'

const ServiceComponent = ({
    ServiceTitle,
    ServicePara,
    ServiceImage

}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <div className="card text-center shadow">
                    <div className="overflow">
                        <img src={ServiceImage} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{ServiceTitle}</h4>
                    </div>
                    <p className="card-text text-secondary">
                    {ServicePara}
                    </p>      
                </div>
            </div>
        </>
    )
}

export default ServiceComponent
