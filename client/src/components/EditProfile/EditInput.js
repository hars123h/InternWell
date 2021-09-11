import React from 'react'

const EditInput = ({
    label,
    type,
    value,
    onChange

}) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0 ml-3">{label}</h6>
                </div>
                <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                    <input type={type} class="form-control"  onChange={onChange}  value={value}></input>
                </div>
            </div>
            <hr />
        </>
    )
}

export default EditInput
