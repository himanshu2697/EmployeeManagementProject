import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const HeaderComponent = () => {
    const [toggle, setToggle] = useState(false);
    const [role, setRole] = useState('');
    const history = useHistory();

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token'));
        setRole(token.role);
    }, [])

    const openUserPopup = () => {
        setToggle(!toggle);
        if (!toggle) {
            document.getElementById("userPopup").style.display = "block";
        } else {
            document.getElementById("userPopup").style.display = "none";
        }
    }

    const manageAction = (key) => {
        if (key == 'profile') {
            history.push('/employee-details');
        } else if (key == 'notifications') {
            history.push('/notification');
        } else if (key == 'logout') {
            localStorage.removeItem("token");
            window.location.href = 'http://localhost:3000/';
        }
        setToggle(false);
        openUserPopup();
    }

    const userMenuItem = (
        <div className="navbar-nav">
            <Link title={'Dashboard'} to="/user-dashboard" className="nav-item nav-link">{'Dashboard'}</Link>
            <Link title={'Leave Request'} to="/user-leave-details" className="nav-item nav-link">{'Leave Request'}</Link>
            <Link title={'Announcement'} to="/announcement" className="nav-item nav-link">{'Announcement'}</Link>
            <Link title={'Payslip\'s'} to="/payslips" className="nav-item nav-link">{'Payslip\'s'}</Link>
            <Link title={'Raise Queries'} to="/raise-queries" className="nav-item nav-link">{'Raise Queries'}</Link>
        </div>
    );

    const adminMenuItem = (
        <div className="navbar-nav">
            <Link title={'Dashboard'} to="/admin-dashboard" className="nav-item nav-link">{'Dashboard'}</Link>
            <Link title={'Manage Employees'} to="/employees" className="nav-item nav-link">{'Manage Employees'}</Link>
            <Link title={'Manage Leave Request'} to="/manage-leave-requests" className="nav-item nav-link">{'Manage Leave Request'}</Link>
            <Link title={'Manage Announcement'} to="/manage-announcement" className="nav-item nav-link">{'Manage Announcement'}</Link>
            <Link title={'Manage Holiday'} to="/manage-holiday" className="nav-item nav-link">{'Manage Holiday'}</Link>
            <Link title={'Manage Event'} to="/manage-event" className="nav-item nav-link">{'Manage Event'}</Link>
            <Link title={'Manage Query'} to="/manage-query" className="nav-item nav-link">{'Manage Query'}</Link>
        </div>
    );

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md header-nav">
                    <a className="navbar-brand">
                        <img className="company-logo-header" src="./lotus.png" alt="logo" />
                    </a>
                    <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                        {(role == 'user') && userMenuItem}
                        {(role == 'admin') && adminMenuItem}
                    </div>
                    <a className="navbar-brand avatar-brand" onClick={openUserPopup}>
                        <img className="avatar-logo" src="./avatar.jpg" alt="logo" />
                    </a>
                </nav>
                <div className='user-popup' id="userPopup">
                    <div className='user-popup-item' onClick={() => manageAction('profile')}><i className="material-icons user-popup-icon">person</i> Profile</div>
                    <div className='user-popup-item' onClick={() => manageAction('notifications')}><i className="material-icons user-popup-icon">notifications</i> Notifications</div>
                    <div className='user-popup-item' onClick={() => manageAction('logout')}><i className="material-icons user-popup-icon">power_settings_new</i> Logout</div>
                </div>
            </header>
        </div>
    )
}

export default HeaderComponent
