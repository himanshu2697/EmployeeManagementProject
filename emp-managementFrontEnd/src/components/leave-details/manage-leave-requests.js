import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const leaveDetailsHeader = ['No.', 'Reason', 'Days', 'Start Date', 'End Date', 'Action'];
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

const ManageLeaveRequests = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalTitle, setModelTitle] = useState('');

    const openModal = (data, key) => {
        if (key == 'Approve') {
            setModelTitle(key);
        } else if (key == 'Rejecte') {
            setModelTitle(key);
        }
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModelTitle('');
    }

    return (
        <div className="container dashboard-container">
            <div className='page-layout'>
                <div className='page-header'>
                    <div className='page-title'>{'Manage Employee Leave Details'}</div>
                    <div className='page-action'>
                        <Link title={'Back'} to="/admin-dashboard" className='back-button btn'><i className="material-icons">keyboard_arrow_left</i></Link>
                    </div>
                </div>
                <div className='page-content'>
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
                                            <td>
                                            <button title={'Approve'} className="btn table-action" onClick={() => openModal(leaveDetails, 'Approve')}>
                                                    <i className="material-icons action-icon">check</i>
                                                </button> &nbsp;
                                                <button title={'Rejecte'} className="btn table-action" onClick={() => openModal(leaveDetails, 'Rejecte')}>
                                                    <i className="material-icons action-icon">clear</i>
                                                </button>
                                            </td>
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
                        <div className='modal-title'>{modalTitle}</div>
                    </div>
                    <div className='modal-content'>
                        <div className='leave-request'>
                            <div className='row'>
                                <div className="col-md-12">
                                    <label>Reason</label>
                                    <textarea type="text" style={{'width': '500px'}} className="form-control reason-area" placeholder="Enter reason" required></textarea>
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

export default ManageLeaveRequests
