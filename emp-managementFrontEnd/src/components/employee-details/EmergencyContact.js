import React from 'react';

const EmergencyContact = ({ tabIndex, singleUserData, setEmergencyRelationship, setEmergencyFirstName, setEmergencyLastName, setEmergencyEmail, setEmergencyMobileNumber, setEmergencyAddress }) => {
    return (
        <div className={(tabIndex == 6) ? 'emergency-contact d-block' : 'd-none'}>
            <form className="needs-validation">
                <div className='row'>
                    <div className="col-md-4 mb-3">
                        <label>Relationship</label>
                        <input type="text" className="form-control" onChange={e => setEmergencyRelationship(e.target.value)} placeholder="Enter relationship" required />
                        <div className="invalid-feedback">Relationship is required</div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control" onChange={e => setEmergencyFirstName(e.target.value)} placeholder="Enter first name" required />
                        <div className="invalid-feedback">First name is required</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" onChange={e => setEmergencyLastName(e.target.value)} placeholder="Enter last name" required />
                        <div className="invalid-feedback">Last name is required</div>
                    </div>

                </div>
                <div className='row'>
                    <div className="col-md-4 mb-3">
                        <label>Email</label>
                        <input type="text" className="form-control" onChange={e => setEmergencyEmail(e.target.value)} placeholder="Enter email" required />
                        <div className="invalid-feedback">Email is required</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Mobile Number</label>
                        <input type="text" className="form-control" onChange={e => setEmergencyMobileNumber(e.target.value)} placeholder="Enter mobile number" required />
                        <div className="invalid-feedback">Mobile number is required</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Address</label>
                        <input type="text" className="form-control" onChange={e => setEmergencyAddress(e.target.value)} placeholder="Enter address" required />
                        <div className="invalid-feedback">Address is required</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmergencyContact
