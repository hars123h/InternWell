import React from 'react'

const EditSocial = ({
    socialIcon,
    socialLabel,
    socialChange,
    socialValue
}) => {
    return (
        <>
          <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0 ml-3">{socialIcon}  {socialLabel}</h6>
                </div>
                <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                    <input type="text" class="form-control" onChange={socialChange} value={socialValue}></input>
                </div>
            </div>
            <hr />
            {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">{socialIcon}  {socialLabel}</h6>
                <input type="text" class="form-control" value={socialValue}></input>

            </li> */}
        </>
    )
}

export default EditSocial
