import React from 'react';

const AdminDashboardComponent = () => {
    return (
        <div className="container dashboard-container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="profile-user-box card-box bg-custom">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="media-body text-white">
                                    <h4 className="mt-1 mb-1 font-18">Welcome on board, Michael Lawson!</h4>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="media-body text-white">
                                    <p className="text-light mb-0">
                                        "We love the creative skills you have, and you are a valuable asset to our team.
                                        Looking forward to collaborating on many successful projects with you!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4">
                    <div className="card-box">
                        <h5 className="header-title mt-0">Personal Information</h5>
                        <div className="panel-body">
                            <hr />
                            <div className="text-left">
                                <p className="text-mute font-13"><strong>Employee Id :</strong> <span className="m-l-15">001242</span></p>
                                <p className="text-mute font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>
                                <p className="text-mute font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>
                                <p className="text-mute font-13"><strong>Mobile :</strong><span className="m-l-15">(+12) 123 1234 567</span></p>
                                <p className="text-mute font-13"><strong>Designation :</strong> <span className="m-l-15">Corporate HR Manager</span></p>
                                <p className="text-mute font-13"><strong>Work Location :</strong> <span className="m-l-15">India</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="card-box">
                        <h5 className="header-title mt-0">Upcoming Events</h5>
                        <div className="panel-body">
                            <hr />
                            <div className="text-left">
                                <p className="text-mute font-13"><strong>Employee Id :</strong> <span className="m-l-15">001242</span></p>
                                <p className="text-mute font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>
                                <p className="text-mute font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>
                                <p className="text-mute font-13"><strong>Mobile :</strong><span className="m-l-15">(+12) 123 1234 567</span></p>
                                <p className="text-mute font-13"><strong>Designation :</strong> <span className="m-l-15">Corporate HR Manager</span></p>
                                <p className="text-mute font-13"><strong>Work Location :</strong> <span className="m-l-15">India</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card-box tilebox-one"><i className="icon-layers float-right text-mute"></i>
                                <h5 className="text-mute mt-0">Total Employees</h5>
                                <h2 className="" data-plugin="counterup">1324</h2>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card-box tilebox-one"><i className="icon-paypal float-right text-mute"></i>
                                <h5 className="text-mute mt-0">Active Employees</h5>
                                <h2 className=""><span data-plugin="counterup">1324</span></h2>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card-box tilebox-one"><i className="icon-rocket float-right text-mute"></i>
                                <h5 className="text-mute mt-0">Inactive Employees</h5>
                                <h2 className="" data-plugin="counterup">239</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card-box">
                                <h4 className="header-title mt-0 mb-3">Experience</h4>
                                <div className="">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardComponent
