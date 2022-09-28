import React, { useState, useEffect } from 'react';
import EmployeeService from '../../services/EmployeeService';

const PersonalDetails = ({ tabIndex, setFirstName, setMiddleName, setLastName, setEmail, setMobileNumber, setDateOfBirth, setAadhaarCardNumber, setPanCardNumber, setGender, setMaritalStatus, setSpousesName, setSpousesEmployer }) => {

    const [selectedImage, setSelectedImage] = useState();

    const [firstName, getFirstName] = useState('');
    const [middleName, getMiddleName] = useState('');
    const [lastName, getLastName] = useState('');
    const [email, getEmail] = useState('');
    const [mobileNumber, getMobileNumber] = useState('');
    const [dateOfBirth, getDateOfBirth] = useState('');
    const [aadhaarCardNumber, getAadhaarCardNumber] = useState('');
    const [panCardNumber, getPanCardNumber] = useState('');
    const [gender, getGender] = useState('');
    const [maritalStatus, getMaritalStatus] = useState('');
    const [spousesName, getSpousesName] = useState('');
    const [spousesEmployer, getSpousesEmployer] = useState('');

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const profileArea = (
        <div className='profile-area'>
            <img className="profile-pic" src={selectedImage} alt="logo" />
            <span title={'Remove'} className='close-button btn' onClick={() => { setSelectedImage() }}><i className="material-icons">close</i></span>
        </div>
    );

    const imageUpload = (
        <div className="image-upload">
            <label htmlFor="file-input">
                <div><i className="material-icons user-popup-icon">file_upload</i></div>
                <div>{'Upload Profile Picture'}</div>
            </label>
            <input id="file-input" accept="image/*" type="file" onChange={imageChange} />
        </div>
    );

    useEffect(() => {
        const employeeId = localStorage.getItem('employeeId');
        if (employeeId) {
            EmployeeService.getEmployeeById(employeeId).then((response) => {
                if (response.status == 200 && response.data) {
                    getFirstName(response.data.firstName)
                    getMiddleName(response.data.middleName)
                    getLastName(response.data.lastName)
                    getEmail(response.data.email)
                    getMobileNumber(response.data.mobileNumber)
                    getDateOfBirth(response.data.dateOfBirth)
                    getAadhaarCardNumber(response.data.aadhaarCardNumber)
                    getPanCardNumber(response.data.panCardNumber)
                    getGender(response.data.gender)
                    getMaritalStatus(response.data.maritalStatus)
                    getSpousesName(response.data.spousesName)
                    getSpousesEmployer(response.data.spousesEmployer)
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    return (
        <div className={(tabIndex == 0) ? 'personal-details d-block' : 'd-none'}>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        <div className="col-md-4 mb-3">
                            <label>First Name</label>
                            <input type="text" className="form-control" value={firstName} onChange={(e) => (setFirstName(e.target.value), getFirstName(e.target.value))} placeholder="Enter first name" required />
                            <div className="invalid-feedback">First name is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Middle Name</label>
                            <input type="text" className="form-control" value={middleName} onChange={(e) => (setMiddleName(e.target.value), getMiddleName(e.target.value))} placeholder="Enter middle name" required />
                            <div className="invalid-feedback">Middle name is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Last Name</label>
                            <input type="text" className="form-control" value={lastName} onChange={(e) => (setLastName(e.target.value), getLastName(e.target.value))} placeholder="Enter last name" required />
                            <div className="invalid-feedback">Last name is required</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-4 mb-3">
                            <label>Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e) => (setEmail(e.target.value), getEmail(e.target.value))} placeholder="Enter email" required />
                            <div className="invalid-feedback">Email is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Mobile Number</label>
                            <input type="text" className="form-control" value={mobileNumber} onChange={(e) => (setMobileNumber(e.target.value), getMobileNumber(e.target.value))} placeholder="Enter mobile number" required />
                            <div className="invalid-feedback">Mobile number is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Date of Birth</label>
                            <input type="date" className="form-control" value={dateOfBirth} onChange={(e) => (setDateOfBirth(e.target.value), getDateOfBirth(e.target.value))} placeholder="Enter date of birth" required />
                            <div className="invalid-feedback">Date of birth is required</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-4 mb-3">
                            <label>Aadhaar Card Number</label>
                            <input type="text" className="form-control" value={aadhaarCardNumber} onChange={(e) => (setAadhaarCardNumber(e.target.value), getAadhaarCardNumber(e.target.value))} placeholder="Enter aadhaar card number" required />
                            <div className="invalid-feedback">Aadhaar card number is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>PAN Card Number</label>
                            <input type="text" className="form-control" value={panCardNumber} onChange={(e) => (setPanCardNumber(e.target.value), getPanCardNumber(e.target.value))} placeholder="Enter pan card number" required />
                            <div className="invalid-feedback">PAN card number is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Gender</label>
                            <select className="form-control" value={gender} onChange={(e) => (setGender(e.target.value), getGender(e.target.value))}>
                                <option value={''}>--- Select gender ---</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-4 mb-3">
                            <label>Marital Status</label>
                            <select className="form-control" value={maritalStatus} onChange={(e) => (setMaritalStatus(e.target.value), getMaritalStatus(e.target.value))}>
                                <option value={''}>--- Select marital status ---</option>
                                <option>Married</option>
                                <option>Unmarried</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Spouse's Name</label>
                            <input type="text" className="form-control" value={spousesName} onChange={(e) => (setSpousesName(e.target.value), getSpousesName(e.target.value))} placeholder="Enter spouse's name" required />
                            <div className="invalid-feedback">Spouse's name is required</div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Spouse's Employer</label>
                            <input type="text" className="form-control" value={spousesEmployer} onChange={(e) => (setSpousesEmployer(), getSpousesEmployer(e.target.value))} placeholder="Enter spouse's employer" required />
                            <div className="invalid-feedback">Spouse's employer is required</div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    {(selectedImage != undefined) ? profileArea : imageUpload}
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
