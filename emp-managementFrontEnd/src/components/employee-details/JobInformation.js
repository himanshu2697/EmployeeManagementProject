import React from 'react';

const JobInformation = ({ tabIndex, singleUserData, setStatus, setEmployeeId, setJobTitle, setDesignation, setDepartment, setWorkingLocation, setStartDate, setEndDate, setSupervisor }) => {
    return (
        <div className={(tabIndex == 2) ? 'job-information d-block' : 'd-none'}>
            <div className='row'>
                <div className='col-md-4 mb-3'>
                    <label>Status</label>
                    <select className="form-control" onChange={e => { setStatus(e.target.value) }}>
                        <option value={''}>--- Select status ---</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
                <div className='col-md-4 mb-3'>
                    <label>Employee Id</label>
                    <input type="text" className="form-control" onChange={e => { setEmployeeId(e.target.value) }} placeholder="Enter employee id" required />
                    <div className="invalid-feedback">Employee id is required</div>
                </div>
                <div className='col-md-4 mb-3'>
                    <label>Job Title</label>
                    <input type="text" className="form-control" onChange={e => { setJobTitle(e.target.value) }} placeholder="Enter job title" required />
                    <div className="invalid-feedback">Job title is required</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 mb-3'>
                    <label>Designation</label>
                    <select className="form-control" onChange={e => { setDesignation(e.target.value) }}>
                        <option value={''}>--- Select designation ---</option>
                        <option>Database administrator</option>
                        <option>Big data engineer/architect</option>
                        <option>Back-end developer</option>
                        <option>Front-end developer</option>
                        <option>Java developer</option>
                        <option>Project manager</option>
                        <option>QA Analyst</option>
                    </select>
                </div>
                <div className='col-md-4 mb-3'>
                    <label>Department</label>
                    <select className="form-control" onChange={e => { setDepartment(e.target.value) }}>
                        <option value={''}>--- Select department ---</option>
                        <option>IT department</option>
                    </select>
                </div>
                <div className='col-md-4 mb-3'>
                    <label>Working Location</label>
                    <select className="form-control" onChange={e => { setWorkingLocation(e.target.value) }}>
                        <option value={''}>--- Select working location ---</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Nagpur</option>
                        <option>Banglore</option>
                        <option>Hydrabad</option>
                        <option>Delhi</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 mb-3'>
                    <label>Start Date</label>
                    <input type="date" className="form-control" onChange={e => { setStartDate(e.target.value) }} placeholder="Enter start date" required />
                    <div className="invalid-feedback">Start date is required</div>
                </div>
                <div className='col-md-4 mb-3'>
                    <label>End Date</label>
                    <input type="date" className="form-control" onChange={e => { setEndDate(e.target.value) }} placeholder="Enter end date" required />
                    <div className="invalid-feedback">End date is required</div>
                </div>
                <div className='col-md-4 mb-3'>
                    <label>Supervisor</label>
                    <select className="form-control" onChange={e => { setSupervisor(e.target.value) }}>
                        <option value={''}>--- Select supervisor ---</option>
                        <option>George</option>
                        <option>Janet</option>
                        <option>Eve</option>
                        <option>Charles</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default JobInformation
