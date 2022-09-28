import React from 'react';
import { Link } from 'react-router-dom';

const notifications = [
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    },
    {
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'August 8th, 2022'
    }
];

const Notification = () => {
    const user = JSON.parse(localStorage.getItem('token'));

    const checkUser = () => {
        if (user != null) {
            if (user.role === 'admin') {
                return '/admin-dashboard';
            } else if (user.role === 'user') {
                return '/user-dashboard';
            }
        }
    }

    return (
        <div className='container dashboard-container'>
            <div className='page-layout'>
                <div className='page-header'>
                    <div className='page-title'>{'Notification'}</div>
                    <div className='page-action'>
                        <div title={'Clear All'} className="action-button btn"><i className="material-icons add-icon">delete_forever</i>{'Clear All'}</div> &nbsp;&nbsp;
                        <Link title={'Back'} to={checkUser()} className='back-button btn'><i className="material-icons">keyboard_arrow_left</i></Link>
                    </div>
                </div>
                <div className='page-content'>
                    <div className='notification-panel'>
                        {
                            notifications.map(
                                (notification, i) =>
                                    <div className='notification'>
                                        <div className='row'>
                                            <div className='col-md-1'><div className='notification-number'>{i+1 + '.'}</div></div>
                                            <div className='col-md-9'><div className='description'>{notification.description}</div></div>
                                            <div className='col-md-2'><div className='date'>{notification.date}</div></div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
