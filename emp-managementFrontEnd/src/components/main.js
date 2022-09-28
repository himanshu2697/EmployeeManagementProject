import React from 'react';
import { useHistory } from 'react-router-dom';

const Main = () => {
    const user = JSON.parse(localStorage.getItem('token'));
    const history = useHistory();

    if (user != null) {
        if (user.role === 'admin') {
            history.push('/admin-dashboard');
        } else if (user.role === 'user') {
            history.push('/user-dashboard');
        }
    }

    return (
        <div></div>
    )
}

export default Main
