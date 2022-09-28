import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';
import PersonalDetails from '../employee-details/PersonalDetails';
import Address from '../employee-details/Address';
import JobInformation from '../employee-details/JobInformation';
import PreviousEmployer from '../employee-details/PreviousEmployer';
import Qualification from '../employee-details/Qualification';
import Skills from '../employee-details/Skills';
import EmergencyContact from '../employee-details/EmergencyContact';
import BankDetails from '../employee-details/BankDetails';

const employeeDetailTabs = ['Personal Details', 'Address', 'Job Information', 'Previous Employer', 'Qualification', 'Skills', 'Emergency Contact', 'Bank Details'];
const infoIcon = ['account_circle', 'location_city', 'work', 'recent_actors', 'school', 'equalizer', 'contact_phone', 'account_balance'];

const EmployeeDetails = () => {
    const history = useHistory();

    /*********************Personal Details********************/
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [aadhaarCardNumber, setAadhaarCardNumber] = useState('');
    const [panCardNumber, setPanCardNumber] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [spousesName, setSpousesName] = useState('');
    const [spousesEmployer, setSpousesEmployer] = useState('');

    /*********************Address********************/
    const [currentCountry, setCurrentCountry] = useState('');
    const [currentState, setCurrentState] = useState('');
    const [currentCityOrTown, setCurrentCityOrTown] = useState('');
    const [currentPinCode, setCurrentPinCode] = useState('');
    const [currentAddressLine1, setCurrentAddressLine1] = useState('');
    const [currentAddressLine2, setCurrentAddressLine2] = useState('');
    const [permanentCountry, setPermanentCountry] = useState('');
    const [permanentState, setPermanentState] = useState('');
    const [permanentCityOrTown, setPermanentCityOrTown] = useState('');
    const [permanentPinCode, setPermanentPinCode] = useState('');
    const [permanentAddressLine1, setPermanentAddressLine1] = useState('');
    const [permanentAddressLine2, setPermanentAddressLine2] = useState('');

    /*********************Job Information********************/
    const [status, setStatus] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [workingLocation, setWorkingLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [supervisor, setSupervisor] = useState('');

    /*********************Previous Employer********************/
    const [companyName, setCompanyName] = useState('');
    const [companyOfficePhone, setCompanyOfficePhone] = useState('');
    const [companyAddressLine1, setCompanyAddressLine1] = useState('');
    const [companyAddressLine2, setCompanyAddressLine2] = useState('');
    const [companyCountry, setCompanyCountry] = useState('');
    const [companyState, setCompanyState] = useState('');
    const [companyCityOrTown, setCompanyCityOrTown] = useState('');
    const [companyPinCode, setCompanyPinCode] = useState('');
    const [employerName, setEmployerName] = useState('');
    const [employerMobileNumber, setEmployerMobileNumber] = useState('');
    const [employerEmail, setEmployerEmail] = useState('');
    const [employerAddressLine1, setEmployerAddressLine1] = useState('');
    const [employerAddressLine2, setEmployerAddressLine2] = useState('');
    const [employerCountry, setEmployerCountry] = useState('');
    const [employerState, setEmployerState] = useState('');
    const [employerCityOrTown, setEmployerCityOrTown] = useState('');
    const [employerPinCode, setEmployerPinCode] = useState('');

    /*********************Qualification********************/
    const [sscInstituteName, setSscInstituteName] = useState('');
    const [sscBoardName, setSscBoardName] = useState('');
    const [sscStartDate, setSscStartDate] = useState('');
    const [sscEndDate, setSscEndDate] = useState('');
    const [sscPercentage, setSscPercentage] = useState('');
    const [hscInstituteName, setHscInstituteName] = useState('');
    const [hscBoardName, setHscBoardName] = useState('');
    const [hscStartDate, setHscStartDate] = useState('');
    const [hscEndDate, setHscEndDate] = useState('');
    const [hscPercentage, setHscPercentage] = useState('');
    const [graduationInstituteName, setGraduationInstituteName] = useState('');
    const [graduationBoardName, setGraduationBoardName] = useState('');
    const [graduationStartDate, setGraduationStartDate] = useState('');
    const [graduationEndDate, setGraduationEndDate] = useState('');
    const [graduationPercentage, setGraduationPercentage] = useState('');
    const [postGraduationInstituteName, setPostGraduationInstituteName] = useState('');
    const [postGraduationBoardName, setPostGraduationBoardName] = useState('');
    const [postGraduationStartDate, setPostGraduationStartDate] = useState('');
    const [postGraduationEndDate, setPostGraduationEndDate] = useState('');
    const [postGraduationPercentage, setPostGraduationPercentage] = useState('');

    /*********************Skills********************/
    const [skillsData, setSkills] = useState('');

    /*********************Emergency Contact********************/
    const [emergencyRelationship, setEmergencyRelationship] = useState('');
    const [emergencyFirstName, setEmergencyFirstName] = useState('');
    const [emergencyLastName, setEmergencyLastName] = useState('');
    const [emergencyEmail, setEmergencyEmail] = useState('');
    const [emergencyMobileNumber, setEmergencyMobileNumber] = useState('');
    const [emergencyAddress, setEmergencyAddress] = useState('');

    /*********************Bank Details********************/
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [iFSCCode, setIFSCCode] = useState('');

    const [activeTab, setActiveTab] = useState(0);
    const [singleUserData, setSingleUserData] = useState([]);

    useEffect(() => {
        const employeeId = localStorage.getItem('employeeId');
        if (employeeId) {
            EmployeeService.getEmployeeById(employeeId).then((response) => {
                if (response.status == 200 && response.data) {
                    setSingleUserData(response.data);
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    const constructPayload = () => { 

        let skills = '';
        if (skillsData.length) {
            skillsData.map((skill) => { skills += skill + ',' });
        }

        let payload = {
            firstName,
            middleName,
            lastName,
            email,
            mobileNumber,
            dateOfBirth,
            aadhaarCardNumber,
            panCardNumber,
            gender,
            maritalStatus,
            spousesName,
            spousesEmployer,
            currentCountry,
            currentState,
            currentCityOrTown,
            currentPinCode,
            currentAddressLine1,
            currentAddressLine2,
            permanentCountry,
            permanentState,
            permanentCityOrTown,
            permanentPinCode,
            permanentAddressLine1,
            permanentAddressLine2,
            status,
            employeeId,
            jobTitle,
            designation,
            department,
            workingLocation,
            startDate,
            endDate,
            supervisor,
            companyName,
            companyOfficePhone,
            companyAddressLine1,
            companyAddressLine2,
            companyCountry,
            companyState,
            companyCityOrTown,
            companyPinCode,
            employerName,
            employerMobileNumber,
            employerEmail,
            employerAddressLine1,
            employerAddressLine2,
            employerCountry,
            employerState,
            employerCityOrTown,
            employerPinCode,
            sscInstituteName,
            sscBoardName,
            sscStartDate,
            sscEndDate,
            sscPercentage,
            hscInstituteName,
            hscBoardName,
            hscStartDate,
            hscEndDate,
            hscPercentage,
            graduationInstituteName,
            graduationBoardName,
            graduationStartDate,
            graduationEndDate,
            graduationPercentage,
            postGraduationInstituteName,
            postGraduationBoardName,
            postGraduationStartDate,
            postGraduationEndDate,
            postGraduationPercentage,
            skills,
            emergencyRelationship,
            emergencyFirstName,
            emergencyLastName,
            emergencyEmail,
            emergencyMobileNumber,
            emergencyAddress,
            bankName,
            accountNumber,
            iFSCCode
        }

        payload.mobileNumber = (mobileNumber != '') ? Number(payload.mobileNumber) : null;
        payload.aadhaarCardNumber = (aadhaarCardNumber != '') ? Number(payload.aadhaarCardNumber) : null;
        payload.currentPinCode = (currentPinCode != '') ? Number(payload.currentPinCode) : null;
        payload.permanentPinCode = (permanentPinCode != '') ? Number(payload.permanentPinCode) : null;
        payload.employeeId = (employeeId != '') ? Number(payload.employeeId) : null;
        payload.companyOfficePhone = (companyOfficePhone != '') ? Number(payload.companyOfficePhone) : null;
        payload.companyPinCode = (companyPinCode != '') ? Number(payload.companyPinCode) : null;
        payload.employerMobileNumber = (employerMobileNumber != '') ? Number(payload.employerMobileNumber) : null;
        payload.employerPinCode = (employerPinCode != '') ? Number(payload.employerPinCode) : null;
        payload.sscPercentage = (sscPercentage != '') ? Number(payload.sscPercentage) : null;
        payload.hscPercentage = (hscPercentage != '') ? Number(payload.hscPercentage) : null;
        payload.graduationPercentage = (graduationPercentage != '') ? Number(payload.graduationPercentage) : null;
        payload.postGraduationPercentage = (postGraduationPercentage != '') ? Number(payload.postGraduationPercentage) : null;
        payload.emergencyMobileNumber = (emergencyMobileNumber != '') ? Number(payload.emergencyMobileNumber) : null;
        payload.accountNumber = (accountNumber != '') ? Number(payload.accountNumber) : null;
        payload.iFSCCode = (iFSCCode != '') ? Number(payload.iFSCCode) : null;

        payload.dateOfBirth = new Date(payload.dateOfBirth).getTime();
        payload.startDate = new Date(payload.startDate).getTime();
        payload.endDate = new Date(payload.endDate).getTime();;
        payload.sscStartDate = new Date(payload.sscStartDate).getTime();
        payload.sscEndDate = new Date(payload.sscEndDate).getTime();
        payload.hscStartDate = new Date(payload.hscStartDate).getTime();
        payload.hscEndDate = new Date(payload.hscEndDate).getTime();
        payload.graduationStartDate = new Date(payload.graduationStartDate).getTime();
        payload.graduationEndDate = new Date(payload.graduationEndDate).getTime();
        payload.postGraduationStartDate = new Date(payload.postGraduationStartDate).getTime();
        payload.postGraduationEndDate = new Date(payload.postGraduationEndDate).getTime();

        return payload;
    }

    const saveEmployeeDetails = (e) => {
        e.preventDefault();
        let payload = constructPayload();
        if (singleUserData.id) {
            EmployeeService.updateEmployee(singleUserData.id, payload).then((response) => {
                if (response.status == 200 && response.data) {
                    history.push('/employees');
                }
            }).catch(error => {
                console.log(error);
            });

        } else {
            EmployeeService.createEmployee(payload).then((response) => {
                if (response.status == 200 && response.data) {
                    history.push('/employees');
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }

    const manageTabs = (index) => {
        setActiveTab(index);
    }

    return (
        <div className="container dashboard-container">
            <div className='page-layout'>
                <div className='page-header'>
                    <div className='page-title'>{'Employee Details'}</div>
                    <div className='page-action'>
                        <div title={'Save'} className="common-button btn" onClick={(e) => saveEmployeeDetails(e)}>{'Save'}</div> &nbsp;&nbsp;
                        <Link title={'Back'} to="/employees" className='back-button btn'><i className="material-icons">keyboard_arrow_left</i></Link>
                    </div>
                </div>
                <div className='page-content'>
                    <div className='emp-info'>
                        {
                            employeeDetailTabs.map(
                                (tab, index) =>
                                    <div title={tab} className={(index == activeTab) ? 'info-tab' + ' ' + 'active-tab' : 'info-tab'} key={index} onClick={() => manageTabs(index)}>
                                        <i className="material-icons action-icon info-icon">{infoIcon[index]}</i> {tab}
                                    </div>
                            )
                        }
                    </div>
                    <div className='emp-details'>

                        <PersonalDetails
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setFirstName={setFirstName}
                            setMiddleName={setMiddleName}
                            setLastName={setLastName}
                            setEmail={setEmail}
                            setMobileNumber={setMobileNumber}
                            setDateOfBirth={setDateOfBirth}
                            setAadhaarCardNumber={setAadhaarCardNumber}
                            setPanCardNumber={setPanCardNumber}
                            setGender={setGender}
                            setMaritalStatus={setMaritalStatus}
                            setSpousesName={setSpousesName}
                            setSpousesEmployer={setSpousesEmployer} />

                        <Address
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setCurrentCountry={setCurrentCountry}
                            setCurrentState={setCurrentState}
                            setCurrentCityOrTown={setCurrentCityOrTown}
                            setCurrentPinCode={setCurrentPinCode}
                            setCurrentAddressLine1={setCurrentAddressLine1}
                            setCurrentAddressLine2={setCurrentAddressLine2}
                            setPermanentCountry={setPermanentCountry}
                            setPermanentState={setPermanentState}
                            setPermanentCityOrTown={setPermanentCityOrTown}
                            setPermanentPinCode={setPermanentPinCode}
                            setPermanentAddressLine1={setPermanentAddressLine1}
                            setPermanentAddressLine2={setPermanentAddressLine2} />

                        <JobInformation
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setStatus={setStatus}
                            setEmployeeId={setEmployeeId}
                            setJobTitle={setJobTitle}
                            setDesignation={setDesignation}
                            setDepartment={setDepartment}
                            setWorkingLocation={setWorkingLocation}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                            setSupervisor={setSupervisor} />

                        <PreviousEmployer
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setCompanyName={setCompanyName}
                            setCompanyOfficePhone={setCompanyOfficePhone}
                            setCompanyAddressLine1={setCompanyAddressLine1}
                            setCompanyAddressLine2={setCompanyAddressLine2}
                            setCompanyCountry={setCompanyCountry}
                            setCompanyState={setCompanyState}
                            setCompanyCityOrTown={setCompanyCityOrTown}
                            setCompanyPinCode={setCompanyPinCode}
                            setEmployerName={setEmployerName}
                            setEmployerMobileNumber={setEmployerMobileNumber}
                            setEmployerEmail={setEmployerEmail}
                            setEmployerAddressLine1={setEmployerAddressLine1}
                            setEmployerAddressLine2={setEmployerAddressLine2}
                            setEmployerCountry={setEmployerCountry}
                            setEmployerState={setEmployerState}
                            setEmployerCityOrTown={setEmployerCityOrTown}
                            setEmployerPinCode={setEmployerPinCode} />

                        <Qualification
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setSscInstituteName={setSscInstituteName}
                            setSscBoardName={setSscBoardName}
                            setSscStartDate={setSscStartDate}
                            setSscEndDate={setSscEndDate}
                            setSscPercentage={setSscPercentage}
                            setHscInstituteName={setHscInstituteName}
                            setHscBoardName={setHscBoardName}
                            setHscStartDate={setHscStartDate}
                            setHscEndDate={setHscEndDate}
                            setHscPercentage={setHscPercentage}
                            setGraduationInstituteName={setGraduationInstituteName}
                            setGraduationBoardName={setGraduationBoardName}
                            setGraduationStartDate={setGraduationStartDate}
                            setGraduationEndDate={setGraduationEndDate}
                            setGraduationPercentage={setGraduationPercentage}
                            setPostGraduationInstituteName={setPostGraduationInstituteName}
                            setPostGraduationBoardName={setPostGraduationBoardName}
                            setPostGraduationStartDate={setPostGraduationStartDate}
                            setPostGraduationEndDate={setPostGraduationEndDate}
                            setPostGraduationPercentage={setPostGraduationPercentage} />

                        <Skills
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setSkills={setSkills} />

                        <EmergencyContact
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setEmergencyRelationship={setEmergencyRelationship}
                            setEmergencyFirstName={setEmergencyFirstName}
                            setEmergencyLastName={setEmergencyLastName}
                            setEmergencyEmail={setEmergencyEmail}
                            setEmergencyMobileNumber={setEmergencyMobileNumber}
                            setEmergencyAddress={setEmergencyAddress} />

                        <BankDetails
                            tabIndex={activeTab}
                            singleUserData={singleUserData}
                            setBankName={setBankName}
                            setAccountNumber={setAccountNumber}
                            setIFSCCode={setIFSCCode} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails
