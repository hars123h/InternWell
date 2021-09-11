import React from 'react'
import './NewBlogs.css'

const NewBlogs = ({
    BlogTitle,
    BlogPara,
    BlogImage,
    BlogVisit

}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mt-4 service-main">
                <div className="card text-center shadow">
                    <div className="overflow">
                        <img src={BlogImage} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{BlogTitle}</h4>
                    </div>
                    <p className="card-text text-secondary">
                    {BlogPara}
                    </p>
                    <div className="mt-3 mb-3" >
                    <a className="blogBtn-get-started" href={BlogVisit} target="_blank">LearnWell</a>
                    </div>
                           
                </div>
            </div>
        </>
    )
}

export default NewBlogs
