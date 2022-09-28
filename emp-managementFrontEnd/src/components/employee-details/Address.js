import React from 'react';

const Address = ({ tabIndex, singleUserData, setCurrentCountry, setCurrentState, setCurrentCityOrTown, setCurrentPinCode, setCurrentAddressLine1, setCurrentAddressLine2, setPermanentCountry, setPermanentState, setPermanentCityOrTown, setPermanentPinCode, setPermanentAddressLine1, setPermanentAddressLine2 }) => {
    return (
        <div className={(tabIndex == 1) ? 'address-details d-block' : 'd-none'}>

            <div className='current-address'>
                <form className="needs-validation">
                    <div className='qualification-title'>{'Current Address'}</div>
                    <div className='row'>
                        <div className='col-md-3 mb-3'>
                            <label>Country</label>
                            <select className="form-control" onChange={e => setCurrentCountry(e.target.value)}>
                                <option value={''}>--- Select country ---</option>
                                <option>India</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>State</label>
                            <select className="form-control" onChange={e => setCurrentState(e.target.value)}>
                                <option value={''}>--- Select state ---</option>
                                <option>Maharashtra</option>
                                <option>Karnataka</option>
                                <option>Andhra Pradesh</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>City or Town</label>
                            <select className="form-control" onChange={e => setCurrentCityOrTown(e.target.value)}>
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
                            <input type="text" className="form-control" onChange={e => setCurrentPinCode(e.target.value)} placeholder="Enter pin code" required />
                            <div className="invalid-feedback">Pin code is required</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <label>Address Line 1</label>
                            <input type="text" className="form-control" onChange={e => setCurrentAddressLine1(e.target.value)} placeholder="Enter address line 1" required />
                            <div className="invalid-feedback">Address line 1 is required</div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <label>Address Line 2</label>
                            <input type="text" className="form-control" onChange={e => setCurrentAddressLine2(e.target.value)} placeholder="Enter address line 2" required />
                            <div className="invalid-feedback">Address line 2 is required</div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='permanent-address'>
                <form className="needs-validation">
                    <div className='qualification-title'>{'Permanent Address'}</div>
                    <div className='row'>
                        <div className='col-md-3 mb-3'>
                            <label>Country</label>
                            <select className="form-control" onChange={e => setPermanentCountry(e.target.value)}>
                                <option value={''}>--- Select country ---</option>
                                <option>India</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>State</label>
                            <select className="form-control" onChange={e => setPermanentState(e.target.value)}>
                                <option value={''}>--- Select state ---</option>
                                <option>Maharashtra</option>
                                <option>Karnataka</option>
                                <option>Andhra Pradesh</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label>City or Town</label>
                            <select className="form-control" onChange={e => setPermanentCityOrTown(e.target.value)}>
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
                            <input type="text" className="form-control" onChange={e => setPermanentPinCode(e.target.value)} placeholder="Enter pin code" required />
                            <div className="invalid-feedback">Pin code is required</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <label>Address Line 1</label>
                            <input type="text" className="form-control" onChange={e => setPermanentAddressLine1(e.target.value)} placeholder="Enter address line 1" required />
                            <div className="invalid-feedback">Address line 1 is required</div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <label>Address Line 2</label>
                            <input type="text" className="form-control" onChange={e => setPermanentAddressLine2(e.target.value)} placeholder="Enter address line 2" required />
                            <div className="invalid-feedback">Address line 2 is required</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Address
