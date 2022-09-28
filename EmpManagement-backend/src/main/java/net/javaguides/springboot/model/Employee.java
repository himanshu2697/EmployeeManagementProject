package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
    //Personal Details
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id")
    private String email;

    @Column(name="middle_name")
    private String middleName;

    @Column(name="mobile_Number")
    private long mobileNumber;

    @Column(name="date_of_Birth")
    private long dateOfBirth;

    @Column(name="aadhaar_Card_Number")
    private long aadhaarCardNumber;

    @Column(name="pan_Card_Number")
    private String panCardNumber;

    @Column(name="gender")
    private String gender;

    @Column(name="marital_Status")
    private String maritalStatus;

    @Column(name="spouses_Name")
    private String spousesName;

    @Column(name="spouses_Employer")
    private String spousesEmployer;

    //Current Address Details

    @Column(name="current_Country")
    private String currentCountry;

    @Column(name="current_State")
    private String currentState;

    @Column(name="current_City_Or_Town")
    private String currentCityOrTown;

    @Column(name="current_Pin_Code")
    private int currentPinCode;

    @Column(name="current_Address_Line_1")
    private String currentAddressLine1;

    @Column(name="current_Address_Line_2")
    private String currentAddressLine2;

    //Permanent Address

    @Column(name="permanent_Country")
    private String permanentCountry;

    @Column(name="permanent_State")
    private String permanentState;

    @Column(name="permanent_City_Or_Town")
    private String permanentCityOrTown;

    @Column(name="permanent_Pin_Code")
    private int permanentPinCode;

    @Column(name="permanent_Address_Line_1")
    private String permanentAddressLine1;

    @Column(name="permanent_Address_Line_2")
    private String permanentAddressLine2;

    //Job Information
    @Column(name="status")
    private String status;

    @Column(name="employee_Id")
    private int employeeId;

    @Column(name="job_Title")
    private String jobTitle;

    @Column(name="designation")
    private String designation;

    @Column(name="department")
    private String department;

    @Column(name="working_Location")
    private String workingLocation;

    @Column(name="start_Date")
    private long startDate;

    @Column(name="end_Date")
    private long endDate;

    @Column(name="supervisor")
    private String supervisor;

    //Previous Employer.
    @Column(name="company_Name")
    private String companyName;

    @Column(name="company_Office_Phone")
    private long companyOfficePhone;

    @Column(name="company_Address_Line_1")
    private String companyAddressLine1;

    @Column(name="company_Address_Line_2")
    private String companyAddressLine2;

    @Column(name="company_Country")
    private String companyCountry;

    @Column(name="company_State")
    private String companyState;

    @Column(name="company_City_Or_Town")
    private String companyCityOrTown;

    @Column(name="company_Pin_Code")
    private int companyPinCode;

    @Column(name="employer_Name")
    private String employerName;

    @Column(name="employer_Mobile_Number")
    private long employerMobileNumber;

    @Column(name="employer_Email")
    private String employerEmail;

    @Column(name="employer_Address_Line_1")
    private String employerAddressLine1;

    @Column(name="employer_Address_Line_2")
    private String employerAddressLine2;

    @Column(name="employer_Country")
    private String employerCountry;

    @Column(name="employer_State")
    private String employerState;

    @Column(name="employer_City_Or_Town")
    private String employerCityOrTown;

    @Column(name="employer_Pin_Code")
    private int employerPinCode;

    //Qalification SSC

    @Column(name="ssc_Institute_Name")
    private String sscInstituteName;

    @Column(name="ssc_Board_Name")
    private String sscBoardName;

    @Column(name="ssc_Start_Date")
    private long sscStartDate;

    @Column(name="ssc_End_Date")
    private long sscEndDate;

    @Column(name="ssc_Percentage")
    private double sscPercentage;

    //Qalification HSC

    @Column(name="hsc_Institute_Name")
    private String hscInstituteName;

    @Column(name="hsc_Board_Name")
    private String hscBoardName;

    @Column(name="hsc_Start_Date")
    private long hscStartDate;

    @Column(name="hsc_End_Date")
    private long hscEndDate;

    @Column(name="hsc_Percentage")
    private double hscPercentage;

//    //Qalification Graduation

    @Column(name="test1")
    private String graduationInstituteName;

    @Column(name="test2")
    private String graduationBoardName;

    @Column(name="test3")
    private long graduationStartDate;

    @Column(name="test4")
    private long graduationEndDate;

    @Column(name="test5")
    private double graduationPercentage;

//    //Qulifiication Post Graduation

    @Column(name="post_Graduation_Institute_Name")
    private String postGraduationInstituteName;

    @Column(name="post_Graduation_Board_Name")
    private String postGraduationBoardName;

    @Column(name="post_Graduation_Start_Date")
    private long postGraduationStartDate;

    @Column(name="post_Graduation_End_Date")
    private long postGraduationEndDate;

    @Column(name="post_Graduation_Percentage")
    private double postGraduationPercentage;

//    //Skills

    @Column(name="skills")
    private String skills;

    //Emergency Contact

    @Column(name="emergency_Relationship")
    private String emergency_Relationship;

    @Column(name="emergency_First_Name")
    private String emergencyFirstName;

    @Column(name="emergency_Last_Name")
    private String emergencyLasttName;

    @Column(name="emergency_Email")
    private String emergencyEmail;

    @Column(name="emergency_Mobile_Number")
    private long emergencyMobileNumber;

    @Column(name="emergency_Address")
    private String emergencyAddress;

    //Bank Details

    @Column(name="bank_Name")
    private String bankName;

    @Column(name="account_Number")
    private long accountNumber;

    @Column(name="ifsc_Code")
    private long ifscCode;


}
