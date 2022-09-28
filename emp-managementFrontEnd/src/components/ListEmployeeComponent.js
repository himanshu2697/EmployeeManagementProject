import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
const empHeader = ['Id', 'Employee Id', 'Profile', 'Name', 'Email', 'Mobile Number', 'Designation', 'Date of Joining', 'Status', 'Action'];
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

const ListEmployeeComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState();

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            if (response.status == 200 && response.data) {
                let employeesResponse = response.data;
                employeesResponse.map((employee) => {
                    employee.startDate = Moment(new Date(employee.startDate)).format('MMM Do, YYYY');
                });
                setEmployees(employeesResponse);
                console.log(response.data);
            }

        }).catch(error => {
            console.log(error);
        })
    }

    const onEditEmployee = (employee) => {
        localStorage.setItem('employeeId', JSON.stringify(employee.id));
    }

    const deleteEmployee = () => {
        EmployeeService.deleteEmployee(employee.id).then((response) => {
            setIsOpen(false);
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
    }

    const openModal = (employeeId) => {
        setIsOpen(true);
        setEmployee(employeeId);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const addEmployee = () => {
        localStorage.removeItem('employeeId');
    }

    return (
        <div className="container dashboard-container">
            <div className='page-layout'>
                <div className='page-header'>
                    <div className='page-title'>{'All Employees'}</div>
                    <div className='page-action'>
                        <div className="input-group rounded search-content">
                            <input type="search" className="form-control rounded search-input" placeholder="Search by name" aria-label="Search" aria-describedby="search-addon" />
                            <span className="btn search-input" id="search-addon">
                                <i className="material-icons">search</i>
                            </span>
                        </div>
                        <Link title={'Add Employee'} to="/employee-details" onClick={() => addEmployee()} className="action-button btn"><i className="material-icons add-icon">add</i>{'Add Employee'}</Link> &nbsp;&nbsp;
                        <Link title={'Back'} to="/admin-dashboard" className='back-button btn'><i className="material-icons">keyboard_arrow_left</i></Link>
                    </div>
                </div>
                <div className='page-content'>
                    <table className="table">
                        <thead className="emp-table-head">
                            <tr>
                                {
                                    empHeader.map(
                                        (header) =>
                                            <th key={header}> {header} </th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className='emp-table-body'>
                            {
                                employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.id} </td>
                                            <td> {employee.employeeId} </td>
                                            <td title={employee.firstName + '  ' + employee.lastName}>
                                                <img className="avatar-logo" src={'./lotus.png'} alt="logo" />
                                            </td>
                                            <td> {employee.firstName + '  ' + employee.lastName} </td>
                                            <td> {employee.email} </td>
                                            <td> {employee.mobileNumber} </td>
                                            <td> {employee.designation} </td>
                                            <td> {employee.startDate} </td>
                                            <td> {employee.status} </td>
                                            <td>
                                                <Link title={'Edit'} className="btn table-action" to={`/employee-details`} onClick={() => onEditEmployee(employee)}>
                                                    <i className="material-icons action-icon">edit</i>
                                                </Link> &nbsp;
                                                <button title={'Delete'} className="btn table-action" onClick={() => openModal(employee)}>
                                                    <i className="material-icons action-icon">delete</i>
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal}>
                        <div className='modal-container'>
                            <div className='modal-header'>
                                <div className='modal-title'>{'Delete'}</div>
                            </div>
                            <div className='modal-content'>{'Are you sure want to delete this record?'}</div>
                            <div className='modal-footer'>
                                <button title={'Okay'} className="btn login-btn" onClick={() => deleteEmployee()}>{'Okay'}</button>
                                <button title={'Cancel'} className="btn login-btn" onClick={() => closeModal()}>{'Cancel'}</button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className='page-footer'>
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link">Previous</a></li>
                            <li className="page-item"><a className="page-link">1</a></li>
                            <li className="page-item"><a className="page-link page-item-active">2</a></li>
                            <li className="page-item"><a className="page-link">3</a></li>
                            <li className="page-item"><a className="page-link">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
