import React from 'react';

const Qualification = ({ tabIndex, singleUserData, setSscInstituteName, setSscBoardName, setSscStartDate, setSscEndDate, setSscPercentage,
    setHscInstituteName, setHscBoardName, setHscStartDate, setHscEndDate, setHscPercentage, setGraduationInstituteName,
    setGraduationBoardName, setGraduationStartDate, setGraduationEndDate, setGraduationPercentage, setPostGraduationInstituteName,
    setPostGraduationBoardName, setPostGraduationStartDate, setPostGraduationEndDate, setPostGraduationPercentage
}) => {
    return (
        <div className={(tabIndex == 4) ? 'qualification d-block' : 'd-none'}>
            <div className='qualification-section'>
                <div className='qualification-title'>{'SSC'}</div>
                <div className='row'>
                    <div className='col-md-3 mb-3'>
                        <label>Institute Name</label>
                        <input type="text" className="form-control" onChange={e => setSscInstituteName(e.target.value)} placeholder="Enter institute name" required />
                        <div className="invalid-feedback">Institute name is required</div>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <label>Board Name</label>
                        <input type="text" className="form-control" onChange={e => setSscBoardName(e.target.value)} placeholder="Enter board name" required />
                        <div className="invalid-feedback">Board name is required</div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-4 mb-3'>
                                <label>Start Date</label>
                                <input type="date" className="form-control" onChange={e => setSscStartDate(e.target.value)} placeholder="Enter start date" required />
                                <div className="invalid-feedback">Start date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>End Date</label>
                                <input type="date" className="form-control" onChange={e => setSscEndDate(e.target.value)} placeholder="Enter end date" required />
                                <div className="invalid-feedback">End date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>Percentage</label>
                                <input type="text" className="form-control" onChange={e => setSscPercentage(e.target.value)} placeholder="Enter percentage" required />
                                <div className="invalid-feedback">Percentage is required</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='qualification-section'>
                <div className='qualification-title'>{'HSC / Diploma'}</div>
                <div className='row'>
                    <div className='col-md-3 mb-3'>
                        <label>Institute Name</label>
                        <input type="text" className="form-control" onChange={e => setHscInstituteName(e.target.value)} placeholder="Enter institute name" required />
                        <div className="invalid-feedback">Institute name is required</div>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <label>Board Name</label>
                        <input type="text" className="form-control" onChange={e => setHscBoardName(e.target.value)} placeholder="Enter board name" required />
                        <div className="invalid-feedback">Board name is required</div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-4 mb-3'>
                                <label>Start Date</label>
                                <input type="date" className="form-control" onChange={e => setHscStartDate(e.target.value)} placeholder="Enter start date" required />
                                <div className="invalid-feedback">Start date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>End Date</label>
                                <input type="date" className="form-control" onChange={e => setHscEndDate(e.target.value)} placeholder="Enter end date" required />
                                <div className="invalid-feedback">End date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>Percentage</label>
                                <input type="text" className="form-control" onChange={e => setHscPercentage(e.target.value)} placeholder="Enter percentage" required />
                                <div className="invalid-feedback">Percentage is required</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='qualification-section'>
                <div className='qualification-title'>{'Graduation'}</div>
                <div className='row'>
                    <div className='col-md-3 mb-3'>
                        <label>Institute Name</label>
                        <input type="text" className="form-control" onChange={e => setGraduationInstituteName(e.target.value)} placeholder="Enter institute name" required />
                        <div className="invalid-feedback">Institute name is required</div>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <label>Board Name</label>
                        <input type="text" className="form-control" onChange={e => setGraduationBoardName(e.target.value)} placeholder="Enter board name" required />
                        <div className="invalid-feedback">Board name is required</div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-4 mb-3'>
                                <label>Start Date</label>
                                <input type="date" className="form-control" onChange={e => setGraduationStartDate(e.target.value)} placeholder="Enter start date" required />
                                <div className="invalid-feedback">Start date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>End Date</label>
                                <input type="date" className="form-control" onChange={e => setGraduationEndDate(e.target.value)} placeholder="Enter end date" required />
                                <div className="invalid-feedback">End date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>Percentage</label>
                                <input type="text" className="form-control" onChange={e => setGraduationPercentage(e.target.value)} placeholder="Enter percentage" required />
                                <div className="invalid-feedback">Percentage is required</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='qualification-section'>
                <div className='qualification-title'>{'Post Graduation'}</div>
                <div className='row'>
                    <div className='col-md-3 mb-3'>
                        <label>Institute Name</label>
                        <input type="text" className="form-control" onChange={e => setPostGraduationInstituteName(e.target.value)} placeholder="Enter institute name" required />
                        <div className="invalid-feedback">Institute name is required</div>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <label>Board Name</label>
                        <input type="text" className="form-control" onChange={e => setPostGraduationBoardName(e.target.value)} placeholder="Enter board name" required />
                        <div className="invalid-feedback">Board name is required</div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-4 mb-3'>
                                <label>Start Date</label>
                                <input type="date" className="form-control" onChange={e => setPostGraduationStartDate(e.target.value)} placeholder="Enter start date" required />
                                <div className="invalid-feedback">Start date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>End Date</label>
                                <input type="date" className="form-control" onChange={e => setPostGraduationEndDate(e.target.value)} placeholder="Enter end date" required />
                                <div className="invalid-feedback">End date is required</div>
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label>Percentage</label>
                                <input type="text" className="form-control" onChange={e => setPostGraduationPercentage(e.target.value)} placeholder="Enter percentage" required />
                                <div className="invalid-feedback">Percentage is required</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualification
