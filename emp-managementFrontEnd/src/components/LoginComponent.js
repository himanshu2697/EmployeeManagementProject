import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

const LoginComponent = ({ setToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        let payload = {
            email,
            password
        }

        EmployeeService.loginEmployee(payload).then((response) => {
            if (response) {
                if (email === 'michael.lawson@reqres.in') {
                    response.data['role'] = 'admin';
                } else {
                    response.data['role'] = 'user';
                }
                setToken(response.data);
            }   
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <section className="h-100 employee-login">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img className="company-logo" src="./lotus.png" alt="logo" />
                                            <h4 className="mt-1 mb-4 pb-1 head-text">We Are The Lotus Team</h4>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Email <span className='required'>*</span></label>
                                                <input type="email" placeholder="Enter email" className="form-control" onChange={e => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Password <span className='required'>*</span></label>
                                                <input type="password" placeholder="Enter password" className="form-control" onChange={e => setPassword(e.target.value)} />
                                            </div>
                                            <div className="text-center pt-3 mb-3">
                                                <button className="btn btn-block fa-lg panel-gradient login-btn" type="submit">Login</button>&nbsp;&nbsp;
                                                <button className="btn btn-block fa-lg panel-gradient login-btn" type="button">Reset</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center panel-gradient">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0 para-text">
                                            Employees who believe that management is concerned about them as a whole person - not just an employee - are more productive, more satisfied, and more fulfilled.
                                            Satisfied employees mean satisfied customers, which leads to profitability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginComponent
