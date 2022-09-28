import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const leaveDetailsHeader = ['No.', 'Reason', 'Days', 'Start Date', 'End Date', 'Assigned To'];
const leaveDetails = [
    {
        reason: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
        days: 2,
        startDate: "August 8th, 2022",
        endDate: "August 12th, 2022",
        assignedTo: "Janet Weaver"
    },
    {
        reason: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
        days: 7,
        startDate: "August 1th, 2022",
        endDate: "August 3th, 2022",
        assignedTo: "Janet Weave"
    },
    {
        reason: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
        days: 1,
        startDate: "August 1th, 2022",
        endDate: "August 3th, 2022",
        assignedTo: "Janet Weave"
    },
    {
        reason: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
        days: 2,
        startDate: "August 8th, 2022",
        endDate: "August 12th, 2022",
        assignedTo: "Janet Weaver"
    },
    {
        reason: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
        days: 7,
        startDate: "August 1th, 2022",
        endDate: "August 3th, 2022",
        assignedTo: "Janet Weave"
    },
    {
        reason: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
        days: 1,
        startDate: "August 1th, 2022",
        endDate: "August 3th, 2022",
        assignedTo: "Janet Weave"
    }
];

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        padding: '0',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const UserLeaveDetails = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="container dashboard-container">
            <div className='page-layout'>
                <div className='page-header'>
                    <div className='page-title'>{'User Leave Details'}</div>
                    <div className='page-action'>
                        <div title={'Leave Request'} className="action-button btn" onClick={() => openModal()}><i className="material-icons add-icon">add</i>{'Leave Request'}</div> &nbsp;&nbsp;
                        <Link title={'Back'} to="/admin-dashboard" className='back-button btn'><i className="material-icons">keyboard_arrow_left</i></Link>
                    </div>
                </div>
                <div className='page-content'>
                    <div className='leave-status'>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className='leave-status-content'>
                                    <h6>{'Total Earned Leave'}</h6>
                                    <h4>{'14'}</h4>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className='leave-status-content'>
                                    <h6>{'Leaves Uasge During This Year'}</h6>
                                    <h4>{'10'}</h4>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className='leave-status-content'>
                                    <h6>{'Leave Balance'}</h6>
                                    <h4>{'4'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table">
                        <thead className="emp-table-head">
                            <tr>
                                {
                                    leaveDetailsHeader.map(
                                        (header) =>
                                            <th key={header}> {header} </th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className='emp-table-body'>
                            {
                                leaveDetails.map(
                                    (leaveDetail, index) =>
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{leaveDetail.reason}</td>
                                            <td>{leaveDetail.days}</td>
                                            <td>{leaveDetail.startDate}</td>
                                            <td>{leaveDetail.endDate}</td>
                                            <td>{leaveDetail.assignedTo}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal}>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <div className='modal-title'>{'Leave Request'}</div>
                    </div>
                    <div className='modal-content'>
                        <div className='leave-request'>
                            <div className='row'>
                                <div className="col-md-4 mb-3">
                                    <label>Assigned To</label>
                                    <select className="form-control">
                                        <option value={''}>------- Select -------</option>
                                        <option>Janet Weaver</option>
                                        <option>Kevin Wyas</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Start Date</label>
                                    <input type="date" className="form-control" placeholder="Enter start date" required />
                                    <div className="invalid-feedback">Start date is required</div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>End Date</label>
                                    <input type="date" className="form-control" placeholder="Enter end date" required />
                                    <div className="invalid-feedback">End date is required</div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-12">
                                    <label>Reason</label>
                                    <textarea type="text" className="form-control reason-area" placeholder="Enter reason" required></textarea>
                                    <div className="invalid-feedback">Reason is required</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button title={'Save'} className="btn login-btn" onClick={() => closeModal()}>{'Save'}</button>
                        <button title={'Cancel'} className="btn login-btn" onClick={() => closeModal()}>{'Cancel'}</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserLeaveDetails
