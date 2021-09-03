import React from 'react'

const ClientComponent = ({src, alt}) => {
    return (
        <>
            <div className="col-lg-2 col-md-3 col-12">
                        <div className="single-partner">
                            <img src={src}  alt={alt} style={{width: '120px', height: 'auto'}}/>
                        </div>
             </div>
        </>
    )
}

export default ClientComponent
