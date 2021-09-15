import React from 'react'
import ClientComponent from './ClientComponent'

const Client = () => {
    return (
        <>
            <section id="partners" className="partners section">
<div className="container">
    <div className="row">
        <div className="col-12 ">
            <div className="section-title">
                <span className="title-bg">Clients</span>
                <h1>Our Clients/Partners</h1>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <div className="partners-inner">
                <div className="row no-gutters">
                   
                    
                    <ClientComponent 
                        src="../images/partner-1.png"
                        alt="client-1"
                    />
                   <ClientComponent 
                       src="../images/partner-2.png"
                       alt="client-2"
                   />
                    <ClientComponent 
                       src="../images/partner-3.jpg"
                       alt="client-3"
                   />
                    <ClientComponent 
                       src="../images/partner-4.png"
                       alt="client-4"
                   />
                    <ClientComponent 
                       src="../images/partner-5.png"
                       alt="client-5"
                   />
                    <ClientComponent 
                       src="../images/partner-6.png"
                       alt="client-6"
                   />
                    <ClientComponent 
                       src="../images/partner-7.png"
                       alt="client-7"
                   />
                    <ClientComponent 
                       src="../images/partner-8.png"
                       alt="client-8"
                   />
                    <ClientComponent 
                       src="../images/partner-9.png"
                       alt="client-9"
                   />
                    <ClientComponent 
                       src="../images/partner-10.png"
                       alt="client-9"
                   />
                    <ClientComponent 
                       src="../images/partner-11.png"
                       alt="client-9"
                   />
                    <ClientComponent 
                       src="../images/partner-12.png"
                       alt="client-9"
                   />
                    
                    {/* <!--/ End Single Partner -->
                <!-- Single Partner --> */}
                </div>
            </div>
        </div>
    </div>
</div>
</section>
        </>
    )
}

export default Client
