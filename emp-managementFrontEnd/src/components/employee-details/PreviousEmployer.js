import React from 'react';

const PreviousEmployer = ({ tabIndex, singleUserData, setCompanyName, setCompanyOfficePhone, setCompanyAddressLine1, setCompanyAddressLine2,
    setCompanyCountry, setCompanyState, setCompanyCityOrTown, setCompanyPinCode, setEmployerName, setEmployerMobileNumber,
    setEmployerEmail, setEmployerAddressLine1, setEmployerAddressLine2, setEmployerCountry, setEmployerState, setEmployerCityOrTown,
    setEmployerPinCode }) => {
    return (
        <div className={(tabIndex == 3) ? 'previous-employer d-block' : 'd-none'}>
            <form className="needs-validation">
                <div className='company-details'>
                    <div className='qualification-title'>{'Company Details'}</div>
                    <div className='row'>
                        <div className='col-md-3 mb-3'>
                            <label>Company Name</label>
                            <input type="text" className="form-control" onChange={e => setCompanyName(e.target.value)} placeholder="Enter company name" required />
                            <div className="invalid-feedback">Company name is required</div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>Office Phone</label>
                            <input type="text" className="form-control" onChange={e => setCompanyOfficePhone(e.target.value)} placeholder="Enter office phone" required />
                            <div className="invalid-feedback">Office phone is required</div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>Address Line 1</label>
                            <input type="text" className="form-control" onChange={e => setCompanyAddressLine1(e.target.value)} placeholder="Enter address line 1" required />
                            <div className="invalid-feedback">Address line 1 is required</div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>Address Line 2</label>
                            <input type="text" className="form-control" onChange={e => setCompanyAddressLine2(e.target.value)} placeholder="Enter address line 2" required />
                            <div className="invalid-feedback">Address line 2 is required</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 mb-3'>
                            <label>Country</label>
                            <select className="form-control" onChange={e => setCompanyCountry(e.target.value)}>
                                <option value={''}>--- Select country ---</option>
                                <option>India</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>State</label>
                            <select className="form-control" onChange={e => setCompanyState(e.target.value)}>
                                <option value={''}>--- Select state ---</option>
                                <option>Maharashtra</option>
                                <option>Karnataka</option>
                                <option>Andhra Pradesh</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>City or Town</label>
                            <select className="form-control" onChange={e => setCompanyCityOrTown(e.target.value)}>
                                <option value={''}>--- Select city or town ---</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Nagpur</option>
                                <option>Banglore</option>
                                <option>Hydrabad</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>Pin Code</label>
                            <input type="text" className="form-control" onChange={e => setCompanyPinCode(e.target.value)} placeholder="Enter pin code" required />
                            <div className="invalid-feedback">Pin code is required</div>
                        </div>
                    </div>
                </div>
                <div className='employer-details'>
                    <div className='qualification-title'>{'Employer Details'}</div>
                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <label>Employer Name</label>
                            <input type="text" className="form-control" onChange={e => setEmployerName(e.target.value)} placeholder="Enter employer name" required />
                            <div className="invalid-feedback">Employer name is required</div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label>Mobile Number</label>
                            <input type="text" className="form-control" onChange={e => setEmployerMobileNumber(e.target.value)} placeholder="Enter mobile number" required />
                            <div className="invalid-feedback">Mobile number is required</div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label>Email</label>
                            <input type="text" className="form-control" onChange={e => setEmployerEmail(e.target.value)} placeholder="Enter email" required />
                            <div className="invalid-feedback">Email is required</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <label>Address Line 1</label>
                            <input type="text" className="form-control" onChange={e => setEmployerAddressLine1(e.target.value)} placeholder="Enter address line 1" required />
                            <div className="invalid-feedback">Address line 1 is required</div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label>Address Line 2</label>
                            <input type="text" className="form-control" onChange={e => setEmployerAddressLine2(e.target.value)} placeholder="Enter address line 2" required />
                            <div className="invalid-feedback">Address line 2 is required</div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label>Country</label>
                            <select className="form-control" onChange={e => setEmployerCountry(e.target.value)}>
                                <option value={''}>--- Select country ---</option>
                                <option>India</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <label>State</label>
                            <select className="form-control" onChange={e => setEmployerState(e.target.value)}>
                                <option value={''}>--- Select state ---</option>
                                <option>Maharashtra</option>
                                <option>Karnataka</option>
                                <option>Andhra Pradesh</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label>City or Town</label>
                            <select className="form-control" onChange={e => setEmployerCityOrTown(e.target.value)}>
                                <option value={''}>--- Select city or town ---</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Nagpur</option>
                                <option>Banglore</option>
                                <option>Hydrabad</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label>Pin Code</label>
                            <input type="text" className="form-control" onChange={e => setEmployerPinCode(e.target.value)} placeholder="Enter pin code" required />
                            <div className="invalid-feedback">Pin code is required</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PreviousEmployer
