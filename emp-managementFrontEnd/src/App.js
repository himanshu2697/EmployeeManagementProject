import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import LoginComponent from './components/LoginComponent';
import AdminDashboardComponent from './components/AdminDashboardComponent';
import UserDashboardComponent from './components/UserDashboardComponent';
import Main from './components/main';
import EmployeeDetails from './components/employee-details/EmployeeDetails';
import Notification from './components/Notification';
import UserLeaveDetails from './components/leave-details/user-leave-details';
import ManageLeaveRequests from './components/leave-details/manage-leave-requests';
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginComponent setToken={setToken} />
  }

  return (
    <div>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/admin-dashboard" component={AdminDashboardComponent}></Route>
          <Route path="/employee-details" component={EmployeeDetails}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" component={AddEmployeeComponent} ></Route>
          <Route path="/edit-employee/:id" component={AddEmployeeComponent}></Route>
          <Route path="/user-dashboard" component={UserDashboardComponent}></Route>
          <Route path="/notification" component={Notification}></Route>
          <Route path="/user-leave-details" component={UserLeaveDetails}></Route>
          <Route path="/manage-leave-requests" component={ManageLeaveRequests}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
