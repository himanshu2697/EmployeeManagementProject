import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';
const Req_Res = 'https://reqres.in/api';

class EmployeeService {

    loginEmployee(credentials) {
        return axios.post(Req_Res + '/login', credentials);
    }

    getAllEmployees() {
         return axios.get(EMPLOYEE_BASE_REST_API_URL);
        //return axios.get(Req_Res + '/users?page=1&per_page=6');
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId) {
        return axios.get(Req_Res + '/users/' + employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService();