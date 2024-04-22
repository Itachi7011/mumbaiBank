const express = require("express");
const app = express();
const server = require("http").createServer(app);

const mongoose = require("mongoose");
const alert = require("alert");
const multer = require("multer");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const schedule = require("node-schedule");

app.use(cookieParser());

// authentication using cookies and tokens
const empauthenticate = require("./authenticateFunctions/empauthenticate");
const customerauthenticate = require("./authenticateFunctions/customerauthenticate");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

let port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./database/connection");

const Scale1EmployeesDB = require("./database/EmployeesRegistration/Scale1Employees");
const Scale2EmployeesDB = require("./database/EmployeesRegistration/Scale2Employees");
const Scale3EmployeesDB = require("./database/EmployeesRegistration/Scale3Employees");
const Scale4EmployeesDB = require("./database/EmployeesRegistration/Scale4Employees");
const Scale5EmployeesDB = require("./database/EmployeesRegistration/Scale5Employees");
const technicalStaffDB = require("./database/EmployeesRegistration/technicalStaff");

const SavingAccountsDB = require("./database/Customer/SavingAccount");
const CurrentAccountsDB = require("./database/Customer/CurrentAccount");

const SavingAccountTransactionsDB = require("./database/transaction/savingAccountTransactions");
const CurrentAccountTransactionsDB = require("./database/transaction/currentAccountTransactions");

const SavingAccountLoans = require("./database/loans/SavingAccountLoan");
const CurrentAccountLoans = require("./database/loans/CurrentAccountLoan");

const SavingAccountFixedDepositDB = require("./database/fixedDeposit/savingAccountFixedDeposit");
const CurrentAccountFixedDepositDB = require("./database/fixedDeposit/currentAccountFixedDeposit");

const SavingAccountTransactions = require("./database/transaction/savingAccountTransactions");
const CurrentAccountTransactions = require("./database/transaction/currentAccountTransactions");

app.get("/", (req, res) => {
  res.send("Hello World");
});

// schedule.scheduleJob({hour: 13, minute: 32},

//       () => {
//         const accounts = SavingAccountsDB.find({accountStatus: "Active"});
//         const names = [accounts.names];

//         Object.keys(accounts).forEach(element => {
//                SavingAccountsDB.updateOne({accountStatus: "Active"},
//                                 {
//                                     totalAmount : (accounts.totalAmount + 10)

//                                     // totalAmount: (totalAmount + ((totalAmount /100 )*5))
//                                 })
//         });

//          console.log("done");
//                             }

// )

// POST Functions for New Employees Registration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/scale1EmpRegister", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const jobAppointmentLetterNo = req.body.JobAppointmentLetterNo;
    const AadharCardNumber = req.body.aadharCardNumber;
    const PanNumber = req.body.panNumber;

    // Already Used Emails

    const UsedEmail1 = await Scale1EmployeesDB.findOne({ email: Email });
    const UsedEmail2 = await Scale2EmployeesDB.findOne({ email: Email });
    const UsedEmail3 = await Scale3EmployeesDB.findOne({ email: Email });
    const UsedEmail4 = await Scale4EmployeesDB.findOne({ email: Email });
    const UsedEmail5 = await Scale5EmployeesDB.findOne({ email: Email });
    const UsedTechnicalStaffEmail = await technicalStaffDB.findOne({
      email: Email,
    });

    // Already Used Phone Numbers

    const UsedScale1PhoneNo_1 = await Scale1EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale1PhoneNo_2 = await Scale1EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale2PhoneNo_1 = await Scale2EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale2PhoneNo_2 = await Scale2EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale3PhoneNo_1 = await Scale3EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale3PhoneNo_2 = await Scale3EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale4PhoneNo_1 = await Scale4EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale4PhoneNo_2 = await Scale4EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale5PhoneNo_1 = await Scale5EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale5PhoneNo_2 = await Scale5EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedTechnicalStaffPhoneNo_1 = await technicalStaffDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedTechnicalStaffPhoneNo_2 = await technicalStaffDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    // Already Used Adhaar Card Numbers

    const UsedScale1AdhaarNumber = await Scale1EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale2AdhaarNumber = await Scale2EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale3AdhaarNumber = await Scale3EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale4AdhaarNumber = await Scale4EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale5AdhaarNumber = await Scale5EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedTehcnicalStaffAdhaarNumber = await technicalStaffDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });

    // Already Used PAN Card Numbers

    const UsedScale1PanNumber = await Scale1EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale2PanNumber = await Scale2EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale3PanNumber = await Scale3EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale4PanNumber = await Scale4EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale5PanNumber = await Scale5EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedTehcnicalStaffPanNumber = await technicalStaffDB.findOne({
      panNumber: PanNumber,
    });

    // Already Used Job Apointment Letter Number

    const UsedScale1JobAppointmentLetterNo = await Scale1EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale2JobAppointmentLetterNo = await Scale2EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale3JobAppointmentLetterNo = await Scale3EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale4JobAppointmentLetterNo = await Scale4EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale5JobAppointmentLetterNo = await Scale5EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedTehcnicalStaffJobAppointmentLetterNo =
      await technicalStaffDB.findOne({
        JobAppointmentLetterNo: jobAppointmentLetterNo,
      });

    // Now acutal coding for registration
    if (Password === Cpassword) {
      if (UsedEmail1 || UsedEmail2 || UsedEmail3 || UsedEmail4 || UsedEmail5) {
        alert("Sorry , This Email Id is already registered!");
        console.log("Sorry , This Email Id is already registered!");
      } else {
        if (
          UsedScale1PhoneNo_1 ||
          UsedScale2PhoneNo_1 ||
          UsedScale3PhoneNo_1 ||
          UsedScale4PhoneNo_1 ||
          UsedScale5PhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 1 is already registered! /n Please use another Phone Number."
          );
        } else if (
          UsedScale1PhoneNo_2 ||
          UsedScale2PhoneNo_2 ||
          UsedScale3PhoneNo_2 ||
          UsedScale4PhoneNo_2 ||
          UsedScale5PhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 2 is already registered! /n Please use another Phone Number."
          );
        } else {
          if (
            UsedScale1AdhaarNumber ||
            UsedScale2AdhaarNumber ||
            UsedScale3AdhaarNumber ||
            UsedScale4AdhaarNumber ||
            UsedScale5AdhaarNumber ||
            UsedTehcnicalStaffAdhaarNumber
          ) {
            alert(
              "Sorry This Aadhar Number is already registered! /n Please use another Aadhar Number."
            );
          } else if (
            UsedScale1PanNumber ||
            UsedScale2PanNumber ||
            UsedScale3PanNumber ||
            UsedScale4PanNumber ||
            UsedScale5PanNumber ||
            UsedTehcnicalStaffPanNumber
          ) {
            alert(
              "Sorry This PAN card number is already registered! /n Please use another PAN card Number."
            );
          } else if (
            UsedScale1JobAppointmentLetterNo ||
            UsedScale2JobAppointmentLetterNo ||
            UsedScale3JobAppointmentLetterNo ||
            UsedScale4JobAppointmentLetterNo ||
            UsedScale5JobAppointmentLetterNo ||
            UsedTehcnicalStaffJobAppointmentLetterNo
          ) {
            alert(
              "Sorry This Job Appointment Letter is already registered! /n Please contact Hiring Department of our Bank, if it is your genuine concern."
            );
          } else {
            function getAge(dateString) {
              var today = new Date();
              var birthDate = new Date(dateString);
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }
              return age;
            }
            const DateOfBirth = req.body.dateOfBirth;

            // Date conversion to IST

            const SubmittedDate = req.body.dateOfFormSubmission;
            // const DateOfJoining = req.body.dateOfJoining;

            let options = {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            };
            let intlDateObj = new Intl.DateTimeFormat("en-US", options, {
              timeZone: "Asia/Kolkata",
            });

            //Form submission Date

            let ConvertedFormSubmittedDate = intlDateObj.format(SubmittedDate);

            const employeedata = await new Scale1EmployeesDB({
              bankName: req.body.bankName,
              bankBranch: req.body.bankBranch,
              scale: req.body.scale,
              name: req.body.name,
              email: req.body.email,
              phoneNo_1: req.body.phoneNo_1,
              phoneNo_2: req.body.phoneNo_2,
              fatherName: req.body.fatherName,
              dateOfBirth: req.body.dateOfBirth,
              age: getAge(DateOfBirth),
              JobAppointmentLetterNo: req.body.JobAppointmentLetterNo,
              aadharCardNumber: req.body.aadharCardNumber,
              panNumber: req.body.panNumber,
              electionVoterIdNo: req.body.electionVoterIdNo,
              country: req.body.country,
              state: req.body.state,
              district: req.body.district,
              fullAddress: req.body.fullAddress,
              qualification: req.body.qualification,
              postDuringJoining: req.body.postDuringJoining,
              basicSalary: req.body.basicSalary,
              dateOfJoining: req.body.dateOfJoining,
              dateOfFormSubmission: ConvertedFormSubmittedDate,
              password: req.body.password,
            });

            await employeedata.save();
            console.log("Saved in Database Successfully");
            alert(
              "New Employee Registered Successfully! \n Please Login to Continue"
            );
            res.redirect("/EmployeeLogin");
          } // Main registered Funtions ends at end here.
        }
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(` Error During Registering Scale 1 Employees --> ${err} `);
  }
});

app.post("/scale2EmpRegister", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const jobAppointmentLetterNo = req.body.JobAppointmentLetterNo;
    const AadharCardNumber = req.body.aadharCardNumber;
    const PanNumber = req.body.panNumber;

    // Already Used Emails

    const UsedEmail1 = await Scale1EmployeesDB.findOne({ email: Email });
    const UsedEmail2 = await Scale2EmployeesDB.findOne({ email: Email });
    const UsedEmail3 = await Scale3EmployeesDB.findOne({ email: Email });
    const UsedEmail4 = await Scale4EmployeesDB.findOne({ email: Email });
    const UsedEmail5 = await Scale5EmployeesDB.findOne({ email: Email });
    const UsedTechnicalStaffEmail = await technicalStaffDB.findOne({
      email: Email,
    });

    // Already Used Phone Numbers

    const UsedScale1PhoneNo_1 = await Scale1EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale1PhoneNo_2 = await Scale1EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale2PhoneNo_1 = await Scale2EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale2PhoneNo_2 = await Scale2EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale3PhoneNo_1 = await Scale3EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale3PhoneNo_2 = await Scale3EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale4PhoneNo_1 = await Scale4EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale4PhoneNo_2 = await Scale4EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale5PhoneNo_1 = await Scale5EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale5PhoneNo_2 = await Scale5EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedTechnicalStaffPhoneNo_1 = await technicalStaffDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedTechnicalStaffPhoneNo_2 = await technicalStaffDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    // Already Used Adhaar Card Numbers

    const UsedScale1AdhaarNumber = await Scale1EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale2AdhaarNumber = await Scale2EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale3AdhaarNumber = await Scale3EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale4AdhaarNumber = await Scale4EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale5AdhaarNumber = await Scale5EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedTehcnicalStaffAdhaarNumber = await technicalStaffDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });

    // Already Used PAN Card Numbers

    const UsedScale1PanNumber = await Scale1EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale2PanNumber = await Scale2EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale3PanNumber = await Scale3EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale4PanNumber = await Scale4EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale5PanNumber = await Scale5EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedTehcnicalStaffPanNumber = await technicalStaffDB.findOne({
      panNumber: PanNumber,
    });

    // Already Used Job Apointment Letter Number

    const UsedScale1JobAppointmentLetterNo = await Scale1EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale2JobAppointmentLetterNo = await Scale2EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale3JobAppointmentLetterNo = await Scale3EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale4JobAppointmentLetterNo = await Scale4EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale5JobAppointmentLetterNo = await Scale5EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedTehcnicalStaffJobAppointmentLetterNo =
      await technicalStaffDB.findOne({
        JobAppointmentLetterNo: jobAppointmentLetterNo,
      });

    // Now acutal coding for registration
    if (Password === Cpassword) {
      if (UsedEmail1 || UsedEmail2 || UsedEmail3 || UsedEmail4 || UsedEmail5) {
        alert("Sorry , This Email Id is already registered!");
        console.log("Sorry , This Email Id is already registered!");
      } else {
        if (
          UsedScale1PhoneNo_1 ||
          UsedScale2PhoneNo_1 ||
          UsedScale3PhoneNo_1 ||
          UsedScale4PhoneNo_1 ||
          UsedScale5PhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 1 is already registered! /n Please use another Phone Number."
          );
        } else if (
          UsedScale1PhoneNo_2 ||
          UsedScale2PhoneNo_2 ||
          UsedScale3PhoneNo_2 ||
          UsedScale4PhoneNo_2 ||
          UsedScale5PhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 2 is already registered! /n Please use another Phone Number."
          );
        } else {
          if (
            UsedScale1AdhaarNumber ||
            UsedScale2AdhaarNumber ||
            UsedScale3AdhaarNumber ||
            UsedScale4AdhaarNumber ||
            UsedScale5AdhaarNumber ||
            UsedTehcnicalStaffAdhaarNumber
          ) {
            alert(
              "Sorry This Aadhar Number is already registered! /n Please use another Aadhar Number."
            );
          } else if (
            UsedScale1PanNumber ||
            UsedScale2PanNumber ||
            UsedScale3PanNumber ||
            UsedScale4PanNumber ||
            UsedScale5PanNumber ||
            UsedTehcnicalStaffPanNumber
          ) {
            alert(
              "Sorry This PAN card number is already registered! /n Please use another PAN card Number."
            );
          } else if (
            UsedScale1JobAppointmentLetterNo ||
            UsedScale2JobAppointmentLetterNo ||
            UsedScale3JobAppointmentLetterNo ||
            UsedScale4JobAppointmentLetterNo ||
            UsedScale5JobAppointmentLetterNo ||
            UsedTehcnicalStaffJobAppointmentLetterNo
          ) {
            alert(
              "Sorry This Job Appointment Letter is already registered! /n Please contact Hiring Department of our Bank, if it is your genuine concern."
            );
          } else {
            function getAge(dateString) {
              var today = new Date();
              var birthDate = new Date(dateString);
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }
              return age;
            }
            const DateOfBirth = req.body.dateOfBirth;

            const employeedata = await new Scale2EmployeesDB({
              bankName: req.body.bankName,
              bankBranch: req.body.bankBranch,
              name: req.body.name,
              email: req.body.email,
              phoneNo_1: req.body.phoneNo_1,
              phoneNo_2: req.body.phoneNo_2,
              fatherName: req.body.fatherName,
              dateOfBirth: req.body.dateOfBirth,
              age: getAge(DateOfBirth),
              JobAppointmentLetterNo: req.body.JobAppointmentLetterNo,
              aadharCardNumber: req.body.aadharCardNumber,
              panNumber: req.body.panNumber,
              electionVoterIdNo: req.body.electionVoterIdNo,
              country: req.body.country,
              state: req.body.state,
              district: req.body.district,
              fullAddress: req.body.fullAddress,
              qualification: req.body.qualification,
              postDuringJoining: req.body.postDuringJoining,
              basicSalary: req.body.basicSalary,
              dateOfJoining: req.body.dateOfJoining,
              password: req.body.password,
              photograph: req.body.photograph,
            });

            await employeedata.save();
            console.log("Saved in Database Successfully");
            alert(
              "New Employee Registered Successfully! \n Please Login to Continue"
            );
            res.redirect("/EmployeeLogin");
          } // Main registered Funtions ends at end here.
        }
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(`Error during Registering scale_2Employee --> 
            ${err}`);
  }
});

app.post("/scale3EmpRegister", async (req, res) => {
  try {
    const Password = req.body.Password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const jobAppointmentLetterNo = req.body.JobAppointmentLetterNo;
    const AadharCardNumber = req.body.aadharCardNumber;
    const PanNumber = req.body.panNumber;

    // Already Used Emails

    const UsedEmail1 = await Scale1EmployeesDB.findOne({ email: Email });
    const UsedEmail2 = await Scale2EmployeesDB.findOne({ email: Email });
    const UsedEmail3 = await Scale3EmployeesDB.findOne({ email: Email });
    const UsedEmail4 = await Scale4EmployeesDB.findOne({ email: Email });
    const UsedEmail5 = await Scale5EmployeesDB.findOne({ email: Email });
    const UsedTechnicalStaffEmail = await technicalStaffDB.findOne({
      email: Email,
    });

    // Already Used Phone Numbers

    const UsedScale1PhoneNo_1 = await Scale1EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale1PhoneNo_2 = await Scale1EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale2PhoneNo_1 = await Scale2EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale2PhoneNo_2 = await Scale2EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale3PhoneNo_1 = await Scale3EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale3PhoneNo_2 = await Scale3EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale4PhoneNo_1 = await Scale4EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale4PhoneNo_2 = await Scale4EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale5PhoneNo_1 = await Scale5EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale5PhoneNo_2 = await Scale5EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedTechnicalStaffPhoneNo_1 = await technicalStaffDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedTechnicalStaffPhoneNo_2 = await technicalStaffDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    // Already Used Adhaar Card Numbers

    const UsedScale1AdhaarNumber = await Scale1EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale2AdhaarNumber = await Scale2EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale3AdhaarNumber = await Scale3EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale4AdhaarNumber = await Scale4EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale5AdhaarNumber = await Scale5EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedTehcnicalStaffAdhaarNumber = await technicalStaffDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });

    // Already Used PAN Card Numbers

    const UsedScale1PanNumber = await Scale1EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale2PanNumber = await Scale2EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale3PanNumber = await Scale3EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale4PanNumber = await Scale4EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale5PanNumber = await Scale5EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedTehcnicalStaffPanNumber = await technicalStaffDB.findOne({
      panNumber: PanNumber,
    });

    // Already Used Job Apointment Letter Number

    const UsedScale1JobAppointmentLetterNo = await Scale1EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale2JobAppointmentLetterNo = await Scale2EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale3JobAppointmentLetterNo = await Scale3EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale4JobAppointmentLetterNo = await Scale4EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale5JobAppointmentLetterNo = await Scale5EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedTehcnicalStaffJobAppointmentLetterNo =
      await technicalStaffDB.findOne({
        JobAppointmentLetterNo: jobAppointmentLetterNo,
      });

    // Now acutal coding for registration
    if (Password === Cpassword) {
      if (UsedEmail1 || UsedEmail2 || UsedEmail3 || UsedEmail4 || UsedEmail5) {
        alert("Sorry , This Email Id is already registered!");
        console.log("Sorry , This Email Id is already registered!");
      } else {
        if (
          UsedScale1PhoneNo_1 ||
          UsedScale2PhoneNo_1 ||
          UsedScale3PhoneNo_1 ||
          UsedScale4PhoneNo_1 ||
          UsedScale5PhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 1 is already registered! /n Please use another Phone Number."
          );
        } else if (
          UsedScale1PhoneNo_2 ||
          UsedScale2PhoneNo_2 ||
          UsedScale3PhoneNo_2 ||
          UsedScale4PhoneNo_2 ||
          UsedScale5PhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 2 is already registered! /n Please use another Phone Number."
          );
        } else {
          if (
            UsedScale1AdhaarNumber ||
            UsedScale2AdhaarNumber ||
            UsedScale3AdhaarNumber ||
            UsedScale4AdhaarNumber ||
            UsedScale5AdhaarNumber ||
            UsedTehcnicalStaffAdhaarNumber
          ) {
            alert(
              "Sorry This Aadhar Number is already registered! /n Please use another Aadhar Number."
            );
          } else if (
            UsedScale1PanNumber ||
            UsedScale2PanNumber ||
            UsedScale3PanNumber ||
            UsedScale4PanNumber ||
            UsedScale5PanNumber ||
            UsedTehcnicalStaffPanNumber
          ) {
            alert(
              "Sorry This PAN card number is already registered! /n Please use another PAN card Number."
            );
          } else if (
            UsedScale1JobAppointmentLetterNo ||
            UsedScale2JobAppointmentLetterNo ||
            UsedScale3JobAppointmentLetterNo ||
            UsedScale4JobAppointmentLetterNo ||
            UsedScale5JobAppointmentLetterNo ||
            UsedTehcnicalStaffJobAppointmentLetterNo
          ) {
            alert(
              "Sorry This Job Appointment Letter is already registered! /n Please contact Hiring Department of our Bank, if it is your genuine concern."
            );
          } else {
            const DateOfBirth = req.body.dateOfBirth;

            function getAge(dateString) {
              var today = new Date();
              var birthDate = new Date(dateString);
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }
              return age;
            }

            const employeedata = await new Scale3EmployeesDB({
              bankName: req.body.bankName,
              bankBranch: req.body.bankBranch,
              name: req.body.name,
              email: req.body.email,
              phoneNo_1: req.body.phoneNo_1,
              phoneNo_2: req.body.phoneNo_2,
              fatherName: req.body.fatherName,
              dateOfBirth: req.body.dateOfBirth,
              age: getAge(DateOfBirth),
              JobAppointmentLetterNo: req.body.JobAppointmentLetterNo,
              aadharCardNumber: req.body.aadharCardNumber,
              panNumber: req.body.panNumber,
              electionVoterIdNo: req.body.electionVoterIdNo,
              country: req.body.country,
              state: req.body.state,
              district: req.body.district,
              fullAddress: req.body.fullAddress,
              qualification: req.body.qualification,
              postDuringJoining: req.body.postDuringJoining,
              basicSalary: req.body.basicSalary,
              dateOfJoining: req.body.dateOfJoining,
              password: req.body.password,
              photograph: req.body.photograph,
            });

            await employeedata.save();
            console.log("Saved in Database Successfully");
            alert(
              "New Employee Registered Successfully! \n Please Login to Continue"
            );
            res.redirect("/Login");
          } // Main registered Funtions ends at end here.
        }
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(`Error during Registering scale_1Employee --> 
            ${err}`);
  }
});

app.post("/scale4EmpRegister", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const jobAppointmentLetterNo = req.body.JobAppointmentLetterNo;
    const AadharCardNumber = req.body.aadharCardNumber;
    const PanNumber = req.body.panNumber;

    // Already Used Emails

    const UsedEmail1 = await Scale1EmployeesDB.findOne({ email: Email });
    const UsedEmail2 = await Scale2EmployeesDB.findOne({ email: Email });
    const UsedEmail3 = await Scale3EmployeesDB.findOne({ email: Email });
    const UsedEmail4 = await Scale4EmployeesDB.findOne({ email: Email });
    const UsedEmail5 = await Scale5EmployeesDB.findOne({ email: Email });
    const UsedTechnicalStaffEmail = await technicalStaffDB.findOne({
      email: Email,
    });

    // Already Used Phone Numbers

    const UsedScale1PhoneNo_1 = await Scale1EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale1PhoneNo_2 = await Scale1EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale2PhoneNo_1 = await Scale2EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale2PhoneNo_2 = await Scale2EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale3PhoneNo_1 = await Scale3EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale3PhoneNo_2 = await Scale3EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale4PhoneNo_1 = await Scale4EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale4PhoneNo_2 = await Scale4EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale5PhoneNo_1 = await Scale5EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale5PhoneNo_2 = await Scale5EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedTechnicalStaffPhoneNo_1 = await technicalStaffDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedTechnicalStaffPhoneNo_2 = await technicalStaffDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    // Already Used Adhaar Card Numbers

    const UsedScale1AdhaarNumber = await Scale1EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale2AdhaarNumber = await Scale2EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale3AdhaarNumber = await Scale3EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale4AdhaarNumber = await Scale4EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale5AdhaarNumber = await Scale5EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedTehcnicalStaffAdhaarNumber = await technicalStaffDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });

    // Already Used PAN Card Numbers

    const UsedScale1PanNumber = await Scale1EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale2PanNumber = await Scale2EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale3PanNumber = await Scale3EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale4PanNumber = await Scale4EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale5PanNumber = await Scale5EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedTehcnicalStaffPanNumber = await technicalStaffDB.findOne({
      panNumber: PanNumber,
    });

    // Already Used Job Apointment Letter Number

    const UsedScale1JobAppointmentLetterNo = await Scale1EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale2JobAppointmentLetterNo = await Scale2EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale3JobAppointmentLetterNo = await Scale3EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale4JobAppointmentLetterNo = await Scale4EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale5JobAppointmentLetterNo = await Scale5EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedTehcnicalStaffJobAppointmentLetterNo =
      await technicalStaffDB.findOne({
        JobAppointmentLetterNo: jobAppointmentLetterNo,
      });

    // Now acutal coding for registration
    if (Password === Cpassword) {
      if (UsedEmail1 || UsedEmail2 || UsedEmail3 || UsedEmail4 || UsedEmail5) {
        alert("Sorry , This Email Id is already registered!");
        console.log("Sorry , This Email Id is already registered!");
      } else {
        if (
          UsedScale1PhoneNo_1 ||
          UsedScale2PhoneNo_1 ||
          UsedScale3PhoneNo_1 ||
          UsedScale4PhoneNo_1 ||
          UsedScale5PhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 1 is already registered! /n Please use another Phone Number."
          );
        } else if (
          UsedScale1PhoneNo_2 ||
          UsedScale2PhoneNo_2 ||
          UsedScale3PhoneNo_2 ||
          UsedScale4PhoneNo_2 ||
          UsedScale5PhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 2 is already registered! /n Please use another Phone Number."
          );
        } else {
          if (
            UsedScale1AdhaarNumber ||
            UsedScale2AdhaarNumber ||
            UsedScale3AdhaarNumber ||
            UsedScale4AdhaarNumber ||
            UsedScale5AdhaarNumber ||
            UsedTehcnicalStaffAdhaarNumber
          ) {
            alert(
              "Sorry This Aadhar Number is already registered! /n Please use another Aadhar Number."
            );
          } else if (
            UsedScale1PanNumber ||
            UsedScale2PanNumber ||
            UsedScale3PanNumber ||
            UsedScale4PanNumber ||
            UsedScale5PanNumber ||
            UsedTehcnicalStaffPanNumber
          ) {
            alert(
              "Sorry This PAN card number is already registered! /n Please use another PAN card Number."
            );
          } else if (
            UsedScale1JobAppointmentLetterNo ||
            UsedScale2JobAppointmentLetterNo ||
            UsedScale3JobAppointmentLetterNo ||
            UsedScale4JobAppointmentLetterNo ||
            UsedScale5JobAppointmentLetterNo ||
            UsedTehcnicalStaffJobAppointmentLetterNo
          ) {
            alert(
              "Sorry This Job Appointment Letter is already registered! /n Please contact Hiring Department of our Bank, if it is your genuine concern."
            );
          } else {
            const DateOfBirth = req.body.dateOfBirth;
            function getAge(dateString) {
              var today = new Date();
              var birthDate = new Date(dateString);
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }
              return age;
            }

            const employeedata = await new Scale4EmployeesDB({
              bankName: req.body.bankName,
              bankBranch: req.body.bankBranch,
              name: req.body.name,
              email: req.body.email,
              phoneNo_1: req.body.phoneNo_1,
              phoneNo_2: req.body.phoneNo_2,
              fatherName: req.body.fatherName,
              qualification: req.body.qualification,
              dateOfBirth: req.body.dateOfBirth,
              age: getAge(DateOfBirth),
              JobAppointmentLetterNo: req.body.JobAppointmentLetterNo,
              aadharCardNumber: req.body.aadharCardNumber,
              panNumber: req.body.panNumber,
              electionVoterIdNo: req.body.electionVoterIdNo,
              country: req.body.country,
              state: req.body.state,
              district: req.body.district,
              fullAddress: req.body.fullAddress,
              postDuringJoining: req.body.postDuringJoining,
              basicSalary: req.body.basicSalary,
              dateOfJoining: req.body.dateOfJoining,
              password: req.body.password,
              photograph: req.body.photograph,
            });

            await employeedata.save();
            console.log("Saved in Database Successfully");
            alert(
              "New Employee Registered Successfully! \n Please Login to Continue"
            );
            res.redirect("/EmployeeLogin");
          } // Main registered Funtions ends at end here.
        }
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(`Error during Registering scale_1Employee --> 
            ${err}`);
  }
});

app.post("/scale5EmpRegister", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const jobAppointmentLetterNo = req.body.JobAppointmentLetterNo;
    const AadharCardNumber = req.body.aadharCardNumber;
    const PanNumber = req.body.panNumber;

    // Already Used Emails

    const UsedEmail1 = await Scale1EmployeesDB.findOne({ email: Email });
    const UsedEmail2 = await Scale2EmployeesDB.findOne({ email: Email });
    const UsedEmail3 = await Scale3EmployeesDB.findOne({ email: Email });
    const UsedEmail4 = await Scale4EmployeesDB.findOne({ email: Email });
    const UsedEmail5 = await Scale5EmployeesDB.findOne({ email: Email });
    const UsedTechnicalStaffEmail = await technicalStaffDB.findOne({
      email: Email,
    });

    // Already Used Phone Numbers

    const UsedScale1PhoneNo_1 = await Scale1EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale1PhoneNo_2 = await Scale1EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale2PhoneNo_1 = await Scale2EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale2PhoneNo_2 = await Scale2EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale3PhoneNo_1 = await Scale3EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale3PhoneNo_2 = await Scale3EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale4PhoneNo_1 = await Scale4EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale4PhoneNo_2 = await Scale4EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale5PhoneNo_1 = await Scale5EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale5PhoneNo_2 = await Scale5EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedTechnicalStaffPhoneNo_1 = await technicalStaffDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedTechnicalStaffPhoneNo_2 = await technicalStaffDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    // Already Used Adhaar Card Numbers

    const UsedScale1AdhaarNumber = await Scale1EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale2AdhaarNumber = await Scale2EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale3AdhaarNumber = await Scale3EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale4AdhaarNumber = await Scale4EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale5AdhaarNumber = await Scale5EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedTehcnicalStaffAdhaarNumber = await technicalStaffDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });

    // Already Used PAN Card Numbers

    const UsedScale1PanNumber = await Scale1EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale2PanNumber = await Scale2EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale3PanNumber = await Scale3EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale4PanNumber = await Scale4EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale5PanNumber = await Scale5EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedTehcnicalStaffPanNumber = await technicalStaffDB.findOne({
      panNumber: PanNumber,
    });

    // Already Used Job Apointment Letter Number

    const UsedScale1JobAppointmentLetterNo = await Scale1EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale2JobAppointmentLetterNo = await Scale2EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale3JobAppointmentLetterNo = await Scale3EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale4JobAppointmentLetterNo = await Scale4EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale5JobAppointmentLetterNo = await Scale5EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedTehcnicalStaffJobAppointmentLetterNo =
      await technicalStaffDB.findOne({
        JobAppointmentLetterNo: jobAppointmentLetterNo,
      });

    // Now acutal coding for registration
    if (Password === Cpassword) {
      if (UsedEmail1 || UsedEmail2 || UsedEmail3 || UsedEmail4 || UsedEmail5) {
        alert("Sorry , This Email Id is already registered!");
        console.log("Sorry , This Email Id is already registered!");
      } else {
        if (
          UsedScale1PhoneNo_1 ||
          UsedScale2PhoneNo_1 ||
          UsedScale3PhoneNo_1 ||
          UsedScale4PhoneNo_1 ||
          UsedScale5PhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 1 is already registered! /n Please use another Phone Number."
          );
        } else if (
          UsedScale1PhoneNo_2 ||
          UsedScale2PhoneNo_2 ||
          UsedScale3PhoneNo_2 ||
          UsedScale4PhoneNo_2 ||
          UsedScale5PhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 2 is already registered! /n Please use another Phone Number."
          );
        } else {
          if (
            UsedScale1AdhaarNumber ||
            UsedScale2AdhaarNumber ||
            UsedScale3AdhaarNumber ||
            UsedScale4AdhaarNumber ||
            UsedScale5AdhaarNumber ||
            UsedTehcnicalStaffAdhaarNumber
          ) {
            alert(
              "Sorry This Aadhar Number is already registered! /n Please use another Aadhar Number."
            );
          } else if (
            UsedScale1PanNumber ||
            UsedScale2PanNumber ||
            UsedScale3PanNumber ||
            UsedScale4PanNumber ||
            UsedScale5PanNumber ||
            UsedTehcnicalStaffPanNumber
          ) {
            alert(
              "Sorry This PAN card number is already registered! /n Please use another PAN card Number."
            );
          } else if (
            UsedScale1JobAppointmentLetterNo ||
            UsedScale2JobAppointmentLetterNo ||
            UsedScale3JobAppointmentLetterNo ||
            UsedScale4JobAppointmentLetterNo ||
            UsedScale5JobAppointmentLetterNo ||
            UsedTehcnicalStaffJobAppointmentLetterNo
          ) {
            alert(
              "Sorry This Job Appointment Letter is already registered! /n Please contact Hiring Department of our Bank, if it is your genuine concern."
            );
          } else {
            const DateOfBirth = req.body.dateOfBirth;
            function getAge(dateString) {
              var today = new Date();
              var birthDate = new Date(dateString);
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }
              return age;
            }

            const employeedata = await new Scale5EmployeesDB({
              bankName: req.body.bankName,
              bankBranch: req.body.bankBranch,
              name: req.body.name,
              email: req.body.email,
              phoneNo_1: req.body.phoneNo_1,
              phoneNo_2: req.body.phoneNo_2,
              fatherName: req.body.fatherName,
              qualification: req.body.qualification,
              dateOfBirth: req.body.dateOfBirth,
              age: getAge(DateOfBirth),
              JobAppointmentLetterNo: req.body.JobAppointmentLetterNo,
              aadharCardNumber: req.body.aadharCardNumber,
              panNumber: req.body.panNumber,
              electionVoterIdNo: req.body.electionVoterIdNo,
              country: req.body.country,
              state: req.body.state,
              district: req.body.district,
              fullAddress: req.body.fullAddress,
              postDuringJoining: req.body.postDuringJoining,
              basicSalary: req.body.basicSalary,
              dateOfJoining: req.body.dateOfJoining,
              password: req.body.password,
              photograph: req.body.photograph,
            });

            await employeedata.save();
            console.log("Saved in Database Successfully");
            alert(
              "New Employee Registered Successfully! \n Please Login to Continue"
            );
            res.redirect("/Login");
          } // Main registered Funtions ends at end here.
        }
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(`Error during Registering scale_1Employee --> 
            ${err}`);
  }
});

app.post("/technicalStaffRegister", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const jobAppointmentLetterNo = req.body.JobAppointmentLetterNo;
    const AadharCardNumber = req.body.aadharCardNumber;
    const PanNumber = req.body.panNumber;

    // Already Used Emails

    const UsedEmail1 = await Scale1EmployeesDB.findOne({ email: Email });
    const UsedEmail2 = await Scale2EmployeesDB.findOne({ email: Email });
    const UsedEmail3 = await Scale3EmployeesDB.findOne({ email: Email });
    const UsedEmail4 = await Scale4EmployeesDB.findOne({ email: Email });
    const UsedEmail5 = await Scale5EmployeesDB.findOne({ email: Email });
    const UsedTechnicalStaffEmail = await technicalStaffDB.findOne({
      email: Email,
    });

    // Already Used Phone Numbers

    const UsedScale1PhoneNo_1 = await Scale1EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale1PhoneNo_2 = await Scale1EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale2PhoneNo_1 = await Scale2EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale2PhoneNo_2 = await Scale2EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale3PhoneNo_1 = await Scale3EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale3PhoneNo_2 = await Scale3EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale4PhoneNo_1 = await Scale4EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale4PhoneNo_2 = await Scale4EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedScale5PhoneNo_1 = await Scale5EmployeesDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedScale5PhoneNo_2 = await Scale5EmployeesDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    const UsedTechnicalStaffPhoneNo_1 = await technicalStaffDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedTechnicalStaffPhoneNo_2 = await technicalStaffDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    // Already Used Adhaar Card Numbers

    const UsedScale1AdhaarNumber = await Scale1EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale2AdhaarNumber = await Scale2EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale3AdhaarNumber = await Scale3EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale4AdhaarNumber = await Scale4EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedScale5AdhaarNumber = await Scale5EmployeesDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });
    const UsedTehcnicalStaffAdhaarNumber = await technicalStaffDB.findOne({
      aadharCardNumber: AadharCardNumber,
    });

    // Already Used PAN Card Numbers

    const UsedScale1PanNumber = await Scale1EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale2PanNumber = await Scale2EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale3PanNumber = await Scale3EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale4PanNumber = await Scale4EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedScale5PanNumber = await Scale5EmployeesDB.findOne({
      panNumber: PanNumber,
    });
    const UsedTehcnicalStaffPanNumber = await technicalStaffDB.findOne({
      panNumber: PanNumber,
    });

    // Already Used Job Apointment Letter Number

    const UsedScale1JobAppointmentLetterNo = await Scale1EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale2JobAppointmentLetterNo = await Scale2EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale3JobAppointmentLetterNo = await Scale3EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale4JobAppointmentLetterNo = await Scale4EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedScale5JobAppointmentLetterNo = await Scale5EmployeesDB.findOne({
      JobAppointmentLetterNo: jobAppointmentLetterNo,
    });
    const UsedTehcnicalStaffJobAppointmentLetterNo =
      await technicalStaffDB.findOne({
        JobAppointmentLetterNo: jobAppointmentLetterNo,
      });

    // Now acutal coding for registration
    if (Password === Cpassword) {
      if (UsedEmail1 || UsedEmail2 || UsedEmail3 || UsedEmail4 || UsedEmail5) {
        alert("Sorry , This Email Id is already registered!");
        console.log("Sorry , This Email Id is already registered!");
      } else {
        if (
          UsedScale1PhoneNo_1 ||
          UsedScale2PhoneNo_1 ||
          UsedScale3PhoneNo_1 ||
          UsedScale4PhoneNo_1 ||
          UsedScale5PhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_1 ||
          UsedTechnicalStaffPhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 1 is already registered! /n Please use another Phone Number."
          );
        } else if (
          UsedScale1PhoneNo_2 ||
          UsedScale2PhoneNo_2 ||
          UsedScale3PhoneNo_2 ||
          UsedScale4PhoneNo_2 ||
          UsedScale5PhoneNo_2
        ) {
          alert(
            "Sorry Phone Number 2 is already registered! /n Please use another Phone Number."
          );
        } else {
          if (
            UsedScale1AdhaarNumber ||
            UsedScale2AdhaarNumber ||
            UsedScale3AdhaarNumber ||
            UsedScale4AdhaarNumber ||
            UsedScale5AdhaarNumber ||
            UsedTehcnicalStaffAdhaarNumber
          ) {
            alert(
              "Sorry This Aadhar Number is already registered! /n Please use another Aadhar Number."
            );
          } else if (
            UsedScale1PanNumber ||
            UsedScale2PanNumber ||
            UsedScale3PanNumber ||
            UsedScale4PanNumber ||
            UsedScale5PanNumber ||
            UsedTehcnicalStaffPanNumber
          ) {
            alert(
              "Sorry This PAN card number is already registered! /n Please use another PAN card Number."
            );
          } else if (
            UsedScale1JobAppointmentLetterNo ||
            UsedScale2JobAppointmentLetterNo ||
            UsedScale3JobAppointmentLetterNo ||
            UsedScale4JobAppointmentLetterNo ||
            UsedScale5JobAppointmentLetterNo ||
            UsedTehcnicalStaffJobAppointmentLetterNo
          ) {
            alert(
              "Sorry This Job Appointment Letter is already registered! /n Please contact Hiring Department of our Bank, if it is your genuine concern."
            );
          } else {
            const DateOfBirth = req.body.dateOfBirth;
            function getAge(dateString) {
              var today = new Date();
              var birthDate = new Date(dateString);
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }
              return age;
            }

            const employeedata = await new technicalStaffDB({
              bankName: req.body.bankName,
              bankBranch: req.body.bankBranch,
              name: req.body.name,
              email: req.body.email,
              phoneNo_1: req.body.phoneNo_1,
              phoneNo_2: req.body.phoneNo_2,
              fatherName: req.body.fatherName,
              dateOfBirth: req.body.dateOfBirth,
              age: getAge(DateOfBirth),
              companyName: req.body.companyName,
              JobAppointmentLetterNo: req.body.JobAppointmentLetterNo,
              aadharCardNumber: req.body.aadharCardNumber,
              panNumber: req.body.panNumber,
              electionVoterIdNo: req.body.electionVoterIdNo,
              country: req.body.country,
              state: req.body.state,
              district: req.body.district,
              fullAddress: req.body.fullAddress,
              postDuringJoining: req.body.postDuringJoining,
              basicSalary: req.body.basicSalary,
              dateOfJoining: req.body.dateOfJoining,
              password: req.body.password,
              photograph: req.body.photograph,
            });

            await employeedata.save();
            console.log("Saved in Database Successfully");
            alert(
              "New Employee Registered Successfully! \n Please Login to Continue"
            );
            res.redirect("/EmployeeLogin");
          } // Main registered Funtions ends at end here.
        }
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(`Error during Registering scale_1Employee --> 
            ${err}`);
  }
});

app.post("/empSearchResults", async (req, res) => {
  try {
    const data = await Scale1EmployeesDB.find();

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

// New Saving Account Request

app.post("/reqNewSavAcc", async (req, res, next) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const aadharCardNumber = req.body.aadharCardNumber;
    const panNumber = req.body.panNumber;

    const UsedCurrentAccountDB = await CurrentAccountsDB.findOne({
      email: Email,
    });
    const UsedSavingAccountDB = await SavingAccountsDB.findOne({
      email: Email,
    });
    const UsedCurrentAccountDBAadharCard = await CurrentAccountsDB.findOne({
      aadharCardNumber: aadharCardNumber,
    });
    const UsedSavingAccountDBAadharCard = await SavingAccountsDB.findOne({
      aadharCardNumber: aadharCardNumber,
    });
    const UsedCurrentAccountDB_PANCard = await CurrentAccountsDB.findOne({
      panNumber: panNumber,
    });
    const UsedSavingAccountDB_PANCard = await SavingAccountsDB.findOne({
      panNumber: panNumber,
    });


    const data1 = await SavingAccountsDB.find().sort("-accountNumber").limit(1);
    const data = JSON.stringify(data1[0].accountNumber);
    const data2 = parseInt(data);

    const data3 = await CurrentAccountsDB.find()
      .sort("-accountNumber")
      .limit(1);
    const data4 = JSON.stringify(data1[0].accountNumber);
    const data5 = parseInt(data4);

    // Already Used Phone Numbers

    const UsedPhoneNo_1 = await CurrentAccountsDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedPhoneNo_2 = await SavingAccountsDB.findOne({
      phoneNo_2: PhoneNo_2,
    });


     if (UsedSavingAccountDB || UsedCurrentAccountDB) {
      res.send(
        "Sorry, This Email is already registered with our bank. Please return to previous page and try another email."
      );
    } else
    if (UsedPhoneNo_1 || UsedPhoneNo_2) {
      res.send(
        "Sorry, This Phone Number is already registered with our bank. Please return to previous page and try another Phone Number."
      );
    }else
    if (UsedCurrentAccountDBAadharCard || UsedSavingAccountDBAadharCard) {
      res.send(
        "Sorry, This Job Aadhar Card No. is already registered with our bank."
      );
    }else
    if (UsedCurrentAccountDB_PANCard || UsedSavingAccountDB_PANCard) {
      res.send(
        "Sorry, This Job PAN Card No. is already registered with our bank."
      );
    }else if(Password === Cpassword){

    const DateOfBirth = req.body.dateOfBirth;
    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }

    //Account Number Creation Funtion

    const savingAccount = await new SavingAccountsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: data2 + 1,
      loans: req.body.loans,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      dateOfBirth: req.body.dateOfBirth,
      age: getAge(DateOfBirth),
      qualification: req.body.qualification,
      occupation: req.body.occupation,
      detailedOccupation: req.body.detailedOccupation,
      electionVoterIdNo: req.body.electionVoterIdNo,
      aadharCardNumber: req.body.aadharCardNumber,
      panNumber: req.body.panNumber,
      totalAmount: 0,
      country: req.body.country,
      state: req.body.state,
      district: req.body.district,
      fullAddress: req.body.fullAddress,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
      password: req.body.password,
    });

    await savingAccount.save();

    alert("New Employee Registered Successfully! \n Please Login to Continue");
   res.redirect("/CustomerLogin");
   } else if (Password !== Cpassword) {
    res.send(
      "Sorry, Password and Confirm Password don't match. Please return to previous page and try again"
    );
  } 
  } catch (err) {
    console.log(`Error during Request for New Saving Account --> 
            ${err}`);
  }
});

// New Current Account Request

app.post("/reqNewCurrAcc", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.Cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const PhoneNo_2 = req.body.phoneNo_2;
    const aadharCardNumber = req.body.aadharCardNumber;
    const panNumber = req.body.panNumber;

    const UsedCurrentAccountDB = await CurrentAccountsDB.findOne({
      email: Email,
    });
    const UsedSavingAccountDB = await SavingAccountsDB.findOne({
      email: Email,
    });

    const UsedCurrentAccountDBAadharCard = await CurrentAccountsDB.findOne({
      aadharCardNumber: aadharCardNumber,
    });
    const UsedSavingAccountDBAadharCard = await SavingAccountsDB.findOne({
      aadharCardNumber: aadharCardNumber,
    });
    const UsedCurrentAccountDB_PANCard = await CurrentAccountsDB.findOne({
      panNumber: panNumber,
    });
    const UsedSavingAccountDB_PANCard = await SavingAccountsDB.findOne({
      panNumber: panNumber,
      });

    // Already Used Phone Numbers

    const UsedPhoneNo_1 = await CurrentAccountsDB.findOne({
      phoneNo_1: PhoneNo_1,
    });
    const UsedPhoneNo_2 = await SavingAccountsDB.findOne({
      phoneNo_2: PhoneNo_2,
    });

    if (UsedSavingAccountDB || UsedCurrentAccountDB) {
          console.log(UsedSavingAccountDB);
      res.send(
        "Sorry, This Email is already registered with our bank. Please return to previous page and try another email."
      );
    } else
    if (UsedPhoneNo_1 || UsedPhoneNo_2) {

      res.send(
        "Sorry, This Phone Number is already registered with our bank. Please return to previous page and try another Phone Number."
      );
    }else
    if (UsedCurrentAccountDBAadharCard || UsedSavingAccountDBAadharCard) {
      res.send(
        "Sorry, This Job Aadhar Card No. is already registered with our bank."
      );
    }else
    if (UsedCurrentAccountDB_PANCard || UsedSavingAccountDB_PANCard) {
      res.send(
        "Sorry, This Job PAN Card No. is already registered with our bank."
      );
    }else if(Password === Cpassword){

    const DateOfBirth = req.body.dateOfBirth;


    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    console.log("1824");

    //Account Number Creation Funtion

    //Account Number Creation Funtion
    const data1 = await SavingAccountsDB.find().sort("-accountNumber").limit(1);
    const data = JSON.stringify(data1[0].accountNumber);
    const data2 = parseInt(data);

    const data3 = await CurrentAccountsDB.find()
      .sort("-accountNumber")
      .limit(1);
    const data4 = JSON.stringify(data3[0].accountNumber);
    const data5 = parseInt(data4);
    if (Password === Cpassword){
      console.log("1839")

    const currentAccount = await new CurrentAccountsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: data5 + 1,
      loans: req.body.loans,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      dateOfBirth: req.body.dateOfBirth,
      age: getAge(DateOfBirth),
      qualification: req.body.qualification,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      companyAnnualTurnover: req.body.companyAnnualTurnover,
      activeLoans: req.body.activeLoans,
      aadharCardNumber: req.body.aadharCardNumber,
      panNumber: req.body.panNumber,
      electionVoterIdNo: req.body.electionVoterIdNo,
      totalAmount: 0,
      country: req.body.country,
      state: req.body.state,
      district: req.body.district,
      fullAddress: req.body.fullAddress,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
      password: req.body.password,
    });

    await currentAccount.save();

    const NewTransactionsLinked = await new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: data2 + 1,
      totalAmount: 0,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      transactionTime: "New Account" + Date.now(),
      newAmount: 0,
    });

    await NewTransactionsLinked.save();

    console.log("Saved in Database Successfully");
    alert("New Current Account User Registered Successfully! \n Please Login to Continue");
    res.redirect("/CustomerLogin");
  } else if (Password !== Cpassword) {
    res.send(
      "Sorry, Password and Confirm Password don't match. Please return to previous page and try again"
    );
  } }
  } catch (err) {
    console.log(`Error during Request for New Current Account --> 
            ${err}`);
  }
});

// Login Function starts from here

app.post("/emplogin", async (req, res) => {
  let token;
  const Email = req.body.email;
  const Password = req.body.password;

  // FindOne Funtion For all of the scales database

  const data1 = await Scale1EmployeesDB.findOne({
    email: Email,
  });
  const data2 = await Scale2EmployeesDB.findOne({
    email: Email,
  });
  const data3 = await Scale3EmployeesDB.findOne({
    email: Email,
  });
  const data4 = await Scale4EmployeesDB.findOne({
    email: Email,
  });
  const data5 = await Scale5EmployeesDB.findOne({
    email: Email,
  });
  const data6 = await technicalStaffDB.findOne({
    email: Email,
  });
  if (!data1 && !data2 && !data3 && !data4 && !data5 && !data6) {
    alert("Sorry Either Email is incorrect or Password is incorrect");
    res.redirect("/EmployeeLogin");
  }

  if (data1) {
    const isMatch = await bcryptjs.compare(Password, data1.password);

    if (isMatch === true) {
      const token = await data1.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });

      res.redirect("/Scale1EmpProfile");
    } else if (isMatch === false) {
      alert("Sorry Either Email is incorrect or Password is incorrect");
      res.redirect("/EmployeeLogin");
    } else {
      res.send("Sorry!");
    }
  } else if (data2) {
    const isMatch = await bcryptjs.compare(Password, data2.password);

    if (isMatch === true) {
      const token = await data2.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });
      res.redirect("/Scale2EmpProfile");
    } else if (isMatch === false) {
      alert("Sorry Either Email is incorrect or Password is incorrect");
      res.redirect("/EmployeeLogin");    } else {
      res.send("Sorry!");
    }
  } else if (data3) {
    const isMatch = await bcryptjs.compare(Password, data3.password);

    if (isMatch === true) {
      const token = await data3.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });
      res.redirect("/Scale3EmpProfile");
    } else if (isMatch === false) {
      alert("Sorry Either Email is incorrect or Password is incorrect");
      res.redirect("/EmployeeLogin");    } else {
      res.send("Sorry!");
    }
  } else if (data4) {
    const isMatch = await bcryptjs.compare(Password, data4.password);

    if (isMatch === true) {
      const token = await data4.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });
      res.redirect("/Scale4EmpProfile");
    } else if (isMatch === false) {
      res.redirect("/Temp");
    } else {
      res.send("Sorry!");
    }
  } else if (data5) {
    const isMatch = await bcryptjs.compare(Password, data5.password);

    if (isMatch === true) {
      const token = await data5.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });
      res.redirect("/Scale5EmpProfile");
    } else if (isMatch === false) {
      res.redirect("/Temp");
    } else {
      res.send("Sorry!");
    }
  } else if (data6) {
    const isMatch = await bcryptjs.compare(Password, data6.password);

    if (isMatch === true) {
      const token = await data6.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });
      res.redirect("/TechnicalStaffProfile");
    } else if (isMatch === false) {
      res.redirect("/Temp");
    } else {
      res.send("Sorry!");
    }
  }
});

// Employees Login Funtion Ends Here

//Employee Logout Funtion Starts Here

app.get("/logout", empauthenticate, async (req, res) => {
  try {
    res.clearCookie("cookies1", { path: "/" });
    res.send("cookies-deleted");
  } catch (err) {
    console.log(`Error During Logout - ${err}`);
  }
});

// Customer Login Function

app.post("/customerlogin", async (req, res) => {
  let token;
  const Email = req.body.email;
  const Password = req.body.password;

  // FindOne Funtion For all of the scales database

  const data1 = await SavingAccountsDB.findOne({
    email: Email,
  });
  const data2 = await CurrentAccountsDB.findOne({
    email: Email,
  });

  if (data1) {
    const isMatch = await bcryptjs.compare(Password, data1.password);

    if (isMatch === true) {
      const token = await data1.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });

      res.redirect("/CustomerSavingAccountsProfile");
    } else if (isMatch === false) {
      res.send("Sorry Password And Email Are Not Matched As Per Our System.");
    } else {
      res.send("Sorry!");
    }
  } else if (data2) {
    const isMatch = await bcryptjs.compare(Password, data2.password);

    if (isMatch === true) {
      const token = await data2.generateAuthToken();

      res.cookie("cookies1", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });
      res.redirect("/CustomerCurrentAccountsProfile");
    } else if (isMatch === false) {
      res.send("Sorry Password And Email Are Not Matched As Per Our System.");
    } else {
      res.send("Sorry!");
    }
  }
});

// Profile Function starts here

app.get("/empProfile", empauthenticate, async (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (err) {
    console.log(`Error during Employeee Profile Page -${err}`);
  }
});

app.get("/customerProfile", empauthenticate, async (req, res) => {
  try {
    const data = req.rootUser;
    res.send(data);
  } catch (err) {
    console.log(`Error during Customer Profile Page -${err}`);
  }
});
app.get(
  "/savingAccountTransactionPersonelList",
  empauthenticate,
  async (req, res, next) => {
    try {
      const data = req.rootUser;
      res.send(data);
      next();
    } catch (err) {
      console.log(`Error during Customer Profile Page -${err}`);
    }
  }
);

app.get("/newSavingAccountRequest", async (req, res) => {
  try {
    const data = await SavingAccountsDB.find({ accountStatus: "pending" });
    res.send(data);
  } catch (err) {
    console.log(
      `Error during sending list of new saving account requests -${err}`
    );
  }
});

app.get("/newCurrentAccountRequest", async (req, res) => {
  try {
    const data = await CurrentAccountsDB.find({ accountStatus: "pending" });
    res.send(data);
  } catch (err) {
    console.log(
      `Error during sending list of new currrent account requests -${err}`
    );
  }
});

// Confirm Or Reject New Saving Account Request

app.post("/confirmNewSavingAccountRequest", async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const Email = req.body.email;
    await SavingAccountsDB.findOneAndUpdate(
      { _id: id },
      {
        accountStatus: "Active",
        totalAmount: 0,
      }
    );

    await SavingAccountTransactionsDB.findOneAndUpdate(
      { email: Email },
      {
        accountStatus: "Active",
        totalAmount: 0,
      }
    );

    alert(`New Saving Account of ${name} is Activated successfullys.`);
    res.redirect("/ConfirmNewSavingAccountRequest");
  } catch (err) {
    console.log(err);
  }
});

app.post("/rejectNewSavingAccountRequest", async (req, res) => {
  try {
    const id = req.body.id;
    const Email = req.body.email;

    await SavingAccountsDB.findOneAndUpdate(
      { _id: id },
      { accountStatus: "rejected" }
    );

    await SavingAccountsDB.findOneAndUpdate(
      { email: Email },
      { accountStatus: "rejected" }
    );

    alert("This Saving Account Request rejected Successfully");
    res.redirect("/ConfirmNewSavingAccountRequest");
  } catch (err) {
    console.log(err);
  }
});

// Confirm Or Reject New Current Account Request

app.post("/confirmNewCurrentAccountRequest", async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const Email = req.body.email;
    await CurrentAccountsDB.findOneAndUpdate(
      { _id: id },
      {
        accountStatus: "Active",
        totalAmount: 0,
      }
    );

    await CurrentAccountTransactionsDB.findOneAndUpdate(
      { email: Email },
      {
        accountStatus: "Active",
        totalAmount: 0,
      }
    );

    alert(`New Current Account of ${name} is Activated successfullys.`);
    res.redirect("/ConfirmNewCurrentAccountRequest");
  } catch (err) {
    console.log(err);
  }
});

app.post("/rejectNewCurrentAccountRequest", async (req, res) => {
  try {
    const id = req.body.id;
    const Email = req.body.email;

    await CurrentAccountsDB.findOneAndUpdate(
      { _id: id },
      { accountStatus: "rejected" }
    );

    await SavingAccountsDB.findOneAndUpdate(
      { email: Email },
      { accountStatus: "rejected" }
    );

    alert("This Cuurent Account Request rejected Successfully");
    res.redirect("/ConfirmNewCurrentAccountRequest");
  } catch (err) {
    console.log(err);
  }
});

// Show List of Accounts For Credit/Debit Amount

app.get("/savingAccountCreditDebitAmount", async (req, res) => {
  try {
    const data = await SavingAccountsDB.find({ accountStatus: "Active" });
    res.send(data);
  } catch (err) {
    console.log(
      `Error during sending list of currrent account requests -${err}`
    );
  }
});

app.get("/currentAccountCreditDebitAmount", async (req, res) => {
  try {
    const data = await CurrentAccountsDB.find({ accountStatus: "Active" });
    res.send(data);
  } catch (err) {
    console.log(
      `Error during sending list of new currrent account requests -${err}`
    );
  }
});

// Main Credit And Debit Amount Functions -------------------------------------------->

app.post("/confirmSavingAccountCredit", async (req, res) => {
  const id = req.body.id;
  const Email = req.body.email;
  const CreditedAmount = parseInt(req.body.amount);

  const data = await SavingAccountsDB.findOne({ email: Email });

  const previousAmount = await parseInt(data.totalAmount);

  const newAmount = (await previousAmount) + CreditedAmount;

  const newSavingAccountAmount = await SavingAccountsDB.findOneAndUpdate(
    { _id: id },
    {
      totalAmount: newAmount,
    }
  );

  const AccountNumber = req.body.accountNumber;

  // Now Transaction Update Code Start Here ----------------->

  const CreditUsing = req.body.creditUsing;

  if (CreditUsing === "Cheque") {
    const newTransaction = new SavingAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      usedService: "Credit-Account-Normal",
      creditUsing: req.body.creditUsing,
      ChequeNumber: req.body.ChequeNumber,
      ChequeHolderName: req.body.ChequeHolderName,
      ChequeHolderAccountNumber: req.body.ChequeHolderAccountNumber,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      credit_Add_Amount: CreditedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${CreditedAmount} is Credited/Added in account Number ${AccountNumber} ,Now new Amount is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerSavingCreditDebitAmount");
  } else if (CreditUsing === "DD(DemandDraft)") {
    const newTransaction = new SavingAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      usedService: "Credit-Account-Normal",
      creditUsing: req.body.creditUsing,
      DDNumber: req.body.DDNumber,
      DDSenderName: req.body.DDSenderName,
      DDSenderAccountNumber: req.body.DDSenderAccountNumber,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      credit_Add_Amount: CreditedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${CreditedAmount} is Credited/Added in account Number ${AccountNumber} ,Now new Amount is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerSavingCreditDebitAmount");
  } else if (CreditUsing === "Bank_Credit_General_Form/Slip") {
    const newTransaction = new SavingAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      usedService: "Credit-Account-Normal",
      creditUsing: req.body.creditUsing,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      credit_Add_Amount: CreditedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${CreditedAmount} is Credited/Added in account Number ${AccountNumber} ,Now new Amount is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerSavingCreditDebitAmount");
  }
});

app.post("/confirmSavingAccountDebit", async (req, res) => {
  const id = req.body.id;
  const Email = req.body.email;
  const DebitedAmount = parseInt(req.body.amount);

  const data = await SavingAccountsDB.findOne({ email: Email });

  const previousAmount = await parseInt(data.totalAmount);

  const newAmount = (await previousAmount) - DebitedAmount;

  const newSavingAccountAmount = await SavingAccountsDB.findOneAndUpdate(
    { _id: id },
    {
      totalAmount: newAmount,
    }
  );

  const AccountNumber = req.body.accountNumber;

  // Now Transaction Update Code Start Here ----------------->

  const DebitUsing = req.body.debitUsing;
  if (DebitUsing === "Cheque") {
    const newTransaction = new SavingAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      usedService: "Debit-Account-Normal",
      debitUsing: req.body.debitUsing,
      ChequeNumber: req.body.ChequeNumber,
      ChequeHolderName: "SELF",
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      debit_Subtract_Amount: DebitedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${DebitedAmount} is Debited/Subtracted from ${req.body.name} and New Amount in account Number ${AccountNumber} is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerSavingCreditDebitAmount");
  } else if (DebitUsing === "DD(DemandDraft)") {
    const newTransaction = new SavingAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      usedService: "Debit-Account-Normal",
      debitUsing: req.body.debitUsing,
      DDNumber: req.body.DDNumber,
      DDRecieverName: req.body.DDRecieverName,
      DDRecieverAccountNumber: req.body.DDRecieverAccountNumber,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      debit_Subtract_Amount: DebitedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    await newTransaction.save();

    await res.redirect("/CustomerSavingCreditDebitAmount");
  } else if (DebitUsing === "Bank_Debit_General_Form/Slip") {
    const newTransaction = new SavingAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      usedService: "Debit-Account-Normal",
      debitUsing: req.body.debitUsing,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      debit_Subtract_Amount: DebitedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${DebitedAmount} is Debited/Subtracted from ${req.body.name} and New Amount in account Number ${AccountNumber} is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerSavingCreditDebitAmount");
  }
});

// Current Account Credit And Debit Functions

app.post("/confirmCurrentAccountCredit", async (req, res) => {
  const id = req.body.id;
  const Email = req.body.email;
  const CreditedAmount = parseInt(req.body.amount);

  const data = await CurrentAccountsDB.findOne({ email: Email });

  const previousAmount = await parseInt(data.totalAmount);

  const newAmount = (await previousAmount) + CreditedAmount;

  const newSavingAccountAmount = await CurrentAccountsDB.findOneAndUpdate(
    { _id: id },
    {
      totalAmount: newAmount,
    }
  );

  const AccountNumber = req.body.accountNumber;

  // Now Transaction Update Code Start Here ----------------->

  const CreditUsing = req.body.creditUsing;

  if (CreditUsing === "Cheque") {
    const newTransaction = new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      usedService: "Credit-Account-Normal",
      creditUsing: req.body.creditUsing,
      ChequeNumber: req.body.ChequeNumber,
      ChequeHolderName: req.body.ChequeHolderName,
      ChequeHolderAccountNumber: req.body.ChequeHolderAccountNumber,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      credit_Add_Amount: CreditedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${CreditedAmount} is Credited/Added in account Number ${AccountNumber} ,Now new Amount is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerCurrentCreditDebitAmount");
  } else if (CreditUsing === "DD(DemandDraft)") {
    const newTransaction = new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      usedService: "Credit-Account-Normal",
      creditUsing: req.body.creditUsing,
      DDNumber: req.body.DDNumber,
      DDSenderName: req.body.DDSenderName,
      DDSenderAccountNumber: req.body.DDSenderAccountNumber,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      credit_Add_Amount: CreditedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${CreditedAmount} is Credited/Added in account Number ${AccountNumber} ,Now new Amount is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerCurrentCreditDebitAmount");
  } else if (CreditUsing === "Bank_Credit_General_Form/Slip") {
    const newTransaction = new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      usedService: "Credit-Account-Normal",
      debitUsing: "Bank_Debit_General_Form/Slip",
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      credit_Add_Amount: CreditedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${CreditedAmount} is Credited/Added in account Number ${AccountNumber} ,Now new Amount is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerCurrentCreditDebitAmount");
  } else {
    res.send("Sorry Error During Last Transaction! Plese Try Again.");
  }
});

app.post("/confirmCurrentAccountDebit", async (req, res) => {
  const id = req.body.id;
  const Email = req.body.email;
  const DebitedAmount = parseInt(req.body.amount);

  const data = await CurrentAccountsDB.findOne({ email: Email });

  const previousAmount = await parseInt(data.totalAmount);

  const newAmount = (await previousAmount) - DebitedAmount;

  const newSavingAccountAmount = await CurrentAccountsDB.findOneAndUpdate(
    { _id: id },
    {
      totalAmount: newAmount,
    }
  );

  const AccountNumber = req.body.accountNumber;

  // Now Transaction Update Code Start Here ----------------->

  const DebitUsing = req.body.debitUsing;

  if (DebitUsing === "Cheque") {
    const newTransaction = new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      debitUsing: req.body.debitUsing,
      usedService: "Debit-Account-Normal",
      ChequeNumber: req.body.ChequeNumber,
      ChequeHolderName: "SELF",
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      debit_Subtract_Amount: DebitedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${DebitedAmount} is Debited/Subtracted from ${req.body.name} and New Amount in account Number ${AccountNumber} is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerCurrentCreditDebitAmount");
  } else if (DebitUsing === "DD(DemandDraft)") {
    const newTransaction = new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      usedService: "Debit-Account-Normal",
      debitUsing: req.body.debitUsing,
      DDNumber: req.body.DDNumber,
      DDRecieverName: req.body.DDRecieverName,
      DDRecieverAccountNumber: req.body.DDRecieverAccountNumber,
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      debit_Subtract_Amount: DebitedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${DebitedAmount} is Debited/Subtracted from ${req.body.name} and New Amount in account Number ${AccountNumber} is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerCurrentCreditDebitAmount");
  } else if (DebitUsing === "Bank_Debit_General_Form/Slip") {
    const newTransaction = new CurrentAccountTransactionsDB({
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountStatus: req.body.accountStatus,
      accountNumber: req.body.accountNumber,
      totalAmount: req.body.totalAmount,
      name: req.body.name,
      email: req.body.email,
      phoneNo_1: req.body.phoneNo_1,
      phoneNo_2: req.body.phoneNo_2,
      fatherName: req.body.fatherName,
      companyName: req.body.companyName,
      gstNumber: req.body.gstNumber,
      usedService: "Debit-Account-Normal",
      debitUsing: "Bank_Debit_General_Form/Slip",
      transactionType: req.body.transactionType,
      transactionDate: req.body.transactionDate,
      previousAmount: previousAmount,
      debit_Subtract_Amount: DebitedAmount,
      newAmount: newAmount,
      ByEmployeeName: req.body.ByEmployeeName,
      ByEmployeeScale: req.body.ByEmployeeScale,
    });

    alert(
      `${DebitedAmount} is Debited/Subtracted from ${req.body.name} and New Amount in account Number ${AccountNumber} is ${newAmount}`
    );

    await newTransaction.save();

    await res.redirect("/CustomerCurrentCreditDebitAmount");
  }
});

//    Loan Function Starts Here  ---------------------------------------->

app.post("/savingAccountNewLoan", async (req, res) => {
  const Email = req.body.email;
  const LoanAmount = parseInt(req.body.loanAmount);

  // loanIdNumber , loanStatus

  const data = await SavingAccountsDB.findOne({ email: Email });

  const previousAmount = await parseInt(data.totalAmount);
  const LoanTotalTimeInYears = req.body.loanTotalTimeInYears;
  const LoanType = req.body.loanType;
  let LoanPercentage;

  if (LoanType === "HomeLoan") {
    LoanPercentage = 9;
  } else if (LoanType === "LoanAgainstProperty") {
    LoanPercentage = 10;
  } else if (LoanType === "LoanAgainstInsurance") {
    LoanPercentage = 10;
  } else if (LoanType === "LoanAgainstFixedDesposit") {
    LoanPercentage = 8;
  } else if (LoanType === "PersonalLoan") {
    LoanPercentage = 12;
  } else if (LoanType === "BusinessLoan") {
    LoanPercentage = 8;
  } else if (LoanType === "EducationLoan") {
    LoanPercentage = 5;
  } else if (LoanType === "E-V_VehicleLoan") {
    LoanPercentage = 4;
  } else if (LoanType === "Non_E-V_VehicleLoan") {
    LoanPercentage = 7;
  }

  // Loan Interest, Installments And Total Amount After Adding Interest Functions ----->

  const Interest = (LoanAmount / 100) * LoanPercentage;
  const ToalInterest = Interest * LoanTotalTimeInYears;
  const TotalAmountAfterAddingInterest = ToalInterest + LoanAmount;

  const TotalMonths = LoanTotalTimeInYears * 12;
  const InstallmentPerMonth = TotalAmountAfterAddingInterest / TotalMonths;
  const InstallmentPerYear =
    TotalAmountAfterAddingInterest / LoanTotalTimeInYears;

  // LoanEndDate and Loan Status Functions ----------------------------->

  const LoanStartDate = new Date(req.body.loanStartDate);
  const LoanStartYear = LoanStartDate.getFullYear();
  const LoanStartMonth = LoanStartDate.getMonth() + 1;
  const LoanStartDates = LoanStartDate.getDate();
  const LoanEndYear = parseInt(
    parseInt(LoanStartYear) + parseInt(LoanTotalTimeInYears)
  );
  const LoanEndDate = `${LoanStartDates} / ${LoanStartMonth}/ ${LoanEndYear} - Date / Month / Year `;

  //  Loan Status Function  -------------------------------------------->

  let LoanStatus;

  const EndDate = new Date();
  const EndYear = EndDate.getFullYear();
  const EndMonth = parseInt(EndDate.getMonth() + 1);
  const EndDates = EndDate.getDate();

  const SubtractedYear = parseInt(
    EndYear - (parseInt(LoanStartYear) + parseInt(LoanTotalTimeInYears))
  );
  const SubtractedMonth = parseInt(EndMonth - parseInt(LoanStartMonth));
  const SubtractedDays = parseInt(EndDates - parseInt(LoanStartDates));

  if (SubtractedYear > 1) {
    LoanStatus = "Already Completed";
  } else if (SubtractedYear <= 1) {
    LoanStatus = "Pending";
  } else if (SubtractedYear === 0 && SubtractedMonth < 0) {
    LoanStatus = "Already Completed";
  } else if (
    SubtractedYear === 0 &&
    SubtractedMonth === 0 &&
    SubtractedDays < 0
  ) {
    LoanStatus = "Pending";
  } else if (
    SubtractedYear === 0 &&
    SubtractedMonth === 0 &&
    SubtractedDays === 0
  ) {
    LoanStatus = "DeadLine Ended Tomorrow";
  } else if (
    SubtractedYear === 0 &&
    SubtractedMonth === 0 &&
    SubtractedDays >= 1
  ) {
    LoanStatus = "Already Completed";
  } else if (SubtractedYear === 0 && SubtractedMonth > 0) {
    LoanStatus = "Pending";
  }

  const newSavingAccountloan = new SavingAccountLoans({
    bankName: req.body.bankName,
    bankBranch: req.body.bankBranch,
    accountType: req.body.accountType,
    accountStatus: req.body.accountStatus,
    accountNumber: req.body.accountNumber,
    totalAmount: req.body.totalAmount,
    name: req.body.name,
    email: req.body.email,
    phoneNo_1: req.body.phoneNo_1,
    phoneNo_2: req.body.phoneNo_2,
    fatherName: req.body.fatherName,
    loanAmount: req.body.loanAmount,
    loanType: req.body.loanType,
    loanPercentage: LoanPercentage,
    loanStartDate: req.body.loanStartDate,
    loanEndDate: LoanEndDate,
    loanTotalTimeInYears: req.body.loanTotalTimeInYears,
    mortgageName: req.body.mortgageName,
    mortgageDescription: req.body.mortgageDescription,
    mortgageMinimumValue: req.body.mortgageMinimumValue,
    loanStatus: LoanStatus,
    interestPerYearOnLoan: Interest,
    totalInterestOnLoan: ToalInterest,
    totalAmountAfterAddingInterest: TotalAmountAfterAddingInterest,
    installmentsPerMonth: InstallmentPerMonth,
    installmentsPerYear: InstallmentPerYear,
    totalAmountInAccountDuringLoanPassed: previousAmount,
    ByEmployeeName: req.body.ByEmployeeName,
    ByEmployeeScale: req.body.ByEmployeeScale,
  });

  await newSavingAccountloan.save();

  // Now Update Same In Transactions Also : ---------------------------------------->

  const id = req.body.id;

  const newAmount = previousAmount + LoanAmount;

  const newSavingAccountAmount = await SavingAccountsDB.findOneAndUpdate(
    { _id: id },
    {
      totalAmount: newAmount,
    }
  );

  // Now Transaction Update Code Start Here ----------------->

  const newTransaction = await new SavingAccountTransactionsDB({
    bankName: req.body.bankName,
    bankBranch: req.body.bankBranch,
    accountType: req.body.accountType,
    accountStatus: req.body.accountStatus,
    accountNumber: req.body.accountNumber,
    name: req.body.name,
    email: Email,
    phoneNo_1: req.body.phoneNo_1,
    phoneNo_2: req.body.phoneNo_2,
    fatherName: req.body.fatherName,
    usedService: "Loan-Credited/Added-Amount",
    transactionType: req.body.transactionType,
    transactionDate: req.body.transactionDate,
    previousAmount: previousAmount,
    credit_Add_Amount: LoanAmount,
    newAmount: newAmount,
    ByEmployeeName: req.body.ByEmployeeName,
    ByEmployeeScale: req.body.ByEmployeeScale,
  });

  await newTransaction.save();

  await res.redirect("/CustomerSavingLoans");
});

app.post("/currentAccountNewLoan", async (req, res) => {
  const Email = req.body.email;
  const LoanAmount = parseInt(req.body.loanAmount);

  // loanIdNumber , loanStatus

  const data = await CurrentAccountsDB.findOne({ email: Email });

  const previousAmount = parseInt(data.totalAmount);
  console.log(previousAmount);
  const LoanTotalTimeInYears = req.body.loanTotalTimeInYears;
  const LoanType = req.body.loanType;
  let LoanPercentage;

  if (LoanType === "HomeLoan") {
    LoanPercentage = 9;
  } else if (LoanType === "LoanAgainstProperty") {
    LoanPercentage = 10;
  } else if (LoanType === "LoanAgainstInsurance") {
    LoanPercentage = 10;
  } else if (LoanType === "LoanAgainstFixedDesposit") {
    LoanPercentage = 8;
  } else if (LoanType === "PersonalLoan") {
    LoanPercentage = 12;
  } else if (LoanType === "BusinessLoan") {
    LoanPercentage = 8;
  } else if (LoanType === "EducationLoan") {
    LoanPercentage = 5;
  } else if (LoanType === "E-V_VehicleLoan") {
    LoanPercentage = 4;
  } else if (LoanType === "Non_E-V_VehicleLoan") {
    LoanPercentage = 7;
  }

  // Loan Interest, Installments And Total Amount After Adding Interest Functions ----->

  const Interest = (LoanAmount / 100) * LoanPercentage;
  const ToalInterest = Interest * LoanTotalTimeInYears;
  const TotalAmountAfterAddingInterest = ToalInterest + LoanAmount;

  const TotalMonths = LoanTotalTimeInYears * 12;
  const InstallmentPerMonth = TotalAmountAfterAddingInterest / TotalMonths;
  const InstallmentPerYear =
    TotalAmountAfterAddingInterest / LoanTotalTimeInYears;
  // FDEndDate and Loan Status Functions ----------------------------->

  const LoanStartDate = new Date(req.body.loanStartDate);
  const loanStartYear = LoanStartDate.getFullYear();
  const loanStartMonth = parseInt(LoanStartDate.getMonth() + 1);
  const loanStartDates = LoanStartDate.getDate();
  const loanEndYear = parseInt(
    parseInt(loanStartYear) + parseInt(LoanTotalTimeInYears)
  );
  const loanEndDate = `${loanStartDates} / ${loanStartMonth}/ ${loanEndYear} - Date / Month / Year `;

  //  Loan Status Function  -------------------------------------------->

  let LoanStatus;

  const EndDate = new Date();
  const EndYear = EndDate.getFullYear();
  const EndMonth = EndDate.getMonth();
  const EndDates = EndDate.getDate();

  const SubtractedYear = parseInt(
    EndYear - (parseInt(loanStartYear) + parseInt(LoanTotalTimeInYears))
  );
  const SubtractedMonth = parseInt(EndMonth - parseInt(loanStartMonth));
  const SubtractedDays = parseInt(EndDates - parseInt(loanStartDates));

  if (SubtractedYear > 1) {
    LoanStatus = "Already Completed";
  } else if (SubtractedYear <= 1) {
    LoanStatus = "Pending";
  } else if (SubtractedYear === 0 && SubtractedMonth < 0) {
    LoanStatus = "Already Completed";
  } else if (
    SubtractedYear === 0 &&
    SubtractedMonth === 0 &&
    SubtractedDays < 0
  ) {
    LoanStatus = "Pending";
  } else if (
    SubtractedYear === 0 &&
    SubtractedMonth === 0 &&
    SubtractedDays === 0
  ) {
    LoanStatus = "DeadLine Ended Tomorrow";
  } else if (
    SubtractedYear === 0 &&
    SubtractedMonth === 0 &&
    SubtractedDays >= 1
  ) {
    LoanStatus = "Already Completed";
  } else if (SubtractedYear === 0 && SubtractedMonth > 0) {
    LoanStatus = "Pending";
  }

  const newCurrentAccountloan = new CurrentAccountLoans({
    bankName: req.body.bankName,
    bankBranch: req.body.bankBranch,
    accountType: req.body.accountType,
    accountStatus: req.body.accountStatus,
    accountNumber: req.body.accountNumber,
    totalAmount: req.body.totalAmount,
    name: req.body.name,
    email: req.body.email,
    phoneNo_1: req.body.phoneNo_1,
    phoneNo_2: req.body.phoneNo_2,
    fatherName: req.body.fatherName,
    loanAmount: LoanAmount,
    loanType: req.body.loanType,
    loanPercentage: LoanPercentage,
    loanStartDate: req.body.loanStartDate,
    loanEndDate: loanEndDate,
    loanTotalTimeInYears: req.body.loanTotalTimeInYears,
    mortgageName: req.body.mortgageName,
    mortgageDescription: req.body.mortgageDescription,
    mortgageMinimumValue: req.body.mortgageMinimumValue,
    loanStatus: LoanStatus,
    interestPerYearOnLoan: Interest,
    totalInterestOnLoan: ToalInterest,
    totalAmountAfterAddingInterest: TotalAmountAfterAddingInterest,
    installmentsPerMonth: InstallmentPerMonth,
    installmentsPerYear: InstallmentPerYear,
    totalAmountInAccountDuringLoanPassed: previousAmount,
    ByEmployeeName: req.body.ByEmployeeName,
    ByEmployeeScale: req.body.ByEmployeeScale,
  });

  await newCurrentAccountloan.save();

  await res.redirect("/CustomerCurrentLoans");
});

// Function To Show List of Loans Of Its Corresponding Account ------------------->

app.get("/savingAccountLoansList", async (req, res) => {
  try {
    const data = await SavingAccountLoans.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending list of saving account loans -${err}`);
  }
});

app.get("/currentAccountLoansList", async (req, res) => {
  try {
    const data = await CurrentAccountLoans.find();

    res.send(data);
  } catch (err) {
    console.log(`Error during sending list of current account loans -${err}`);
  }
});

//  Functions To Create Fixed Deposit Linked With The Accounts --------------------------------->

app.post("/newSavingsAccountFixedDeposit", async (req, res) => {
  try {
    const Email = req.body.email;
    const FDAmount = parseInt(req.body.fixedDepositAmount);

    const data = await SavingAccountsDB.findOne({ email: Email });

    const previousAmount = parseInt(data.totalAmount);
    const FDTotalTimeInYears = req.body.fixedDepositTotalTimeInYears;

    const FDPercentage = 5;

    // Loan Interest, Installments And Total Amount After Adding Interest Functions ----->

    const Interest = (FDAmount / 100) * FDPercentage;
    const ToalInterest = Interest * FDTotalTimeInYears;
    const TotalAmountAfterAddingInterest = ToalInterest + FDAmount;

    // FDEndDate Functions ----------------------------->

    const FDStartDate = new Date(req.body.fixedDepositStartDate);
    const FDStartYear = FDStartDate.getFullYear();
    const FDStartMonth = parseInt(FDStartDate.getMonth() + 1);
    const FDStartDates = FDStartDate.getDate();

    const FDEndYear = parseInt(
      parseInt(FDStartYear) + parseInt(FDTotalTimeInYears)
    );
    const FDEndDate = `${FDStartDates} / ${FDStartMonth}/ ${FDEndYear} - Date / Month / Year `;

    const MinimumBalance = 2000;
    const MinimumFDBalance = parseInt(previousAmount + MinimumBalance);

    if (MinimumFDBalance >= FDAmount) {
      const newFixedDepositSavingAccount =
        await new SavingAccountFixedDepositDB({
          bankName: req.body.bankName,
          bankBranch: req.body.bankBranch,
          accountType: req.body.accountType,
          accountStatus: req.body.accountStatus,
          accountNumber: req.body.accountNumber,
          fixedDepositAmount: req.body.fixedDepositAmount,
          name: req.body.name,
          email: req.body.email,
          phoneNo_1: req.body.phoneNo_1,
          phoneNo_2: req.body.phoneNo_2,
          fatherName: req.body.fatherName,
          fixedDepositPercentage: FDPercentage,
          fixedDepositStartDate: req.body.fixedDepositStartDate,
          fixedDepositEndDate: FDEndDate,
          fixedDepositTotalTimeInYears: req.body.fixedDepositTotalTimeInYears,
          interestPerYearOnFixedDeposit: Interest,
          totalInterestOnfixedDeposit: ToalInterest,
          totalAmountAfterAddingInterest: TotalAmountAfterAddingInterest,
          totalAmountInAccountDuringFixedDepositPassed: previousAmount,
          ByEmployeeName: req.body.ByEmployeeName,
          ByEmployeeScale: req.body.ByEmployeeScale,
        });

      await newFixedDepositSavingAccount.save();

      // Now Update Same In Transactions Also : ---------------------------------------->

      const id = req.body.id;

      const newAmount = previousAmount - FDAmount;

      const newSavingAccountAmount = await SavingAccountsDB.findOneAndUpdate(
        { _id: id },
        {
          totalAmount: newAmount,
        }
      );

      // Now Transaction Update Code Start Here ----------------->

      const newTransaction = await new SavingAccountTransactionsDB({
        bankName: req.body.bankName,
        bankBranch: req.body.bankBranch,
        accountType: req.body.accountType,
        accountStatus: req.body.accountStatus,
        accountNumber: req.body.accountNumber,
        name: req.body.name,
        email: Email,
        phoneNo_1: req.body.phoneNo_1,
        phoneNo_2: req.body.phoneNo_2,
        fatherName: req.body.fatherName,
        usedService: "Fixed-Deposit_(FD)",
        transactionType: req.body.transactionType,
        transactionDate: req.body.transactionDate,
        previousAmount: previousAmount,
        debit_Subtract_Amount: FDAmount,
        newAmount: newAmount,
        ByEmployeeName: req.body.ByEmployeeName,
        ByEmployeeScale: req.body.ByEmployeeScale,
      });

      await newTransaction.save();

      res.redirect("/SavingAccountFixedDeposit");
    } else {
      res.send("Sorry Your Account Balance Is Not Sufficient");
    }
  } catch (err) {
    console.log(`Error During Saving Account New Fixed Deposit -> ${err}`);
  }
});

// Function To View All FDs of Linked Account : ---------------------------------->

app.get("/savingAccountFDList", async (req, res) => {
  try {
    const data = await SavingAccountFixedDepositDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending list of saving account loans -${err}`);
  }
});

app.get("/currentAccountFDList", async (req, res) => {
  try {
    const data = await CurrentAccountFixedDepositDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending list of saving account loans -${err}`);
  }
});

// Show List of All Transaction Linked To Account Number

app.get("/savingAccountTransactionList", async (req, res) => {
  try {
    const data = await SavingAccountTransactions.find({
      accountStatus: "Active",
    });
    res.send(data);
  } catch (err) {
    console.log(
      `Error during sending list of saving account transaction -${err}`
    );
  }
});

app.get("/currentAccountTransactionList", async (req, res) => {
  try {
    const data = await CurrentAccountTransactions.find();
    res.send(data);
  } catch (err) {
    console.log(
      `Error during sending list of saving account transaction -${err}`
    );
  }
});

app.get("viewSavingAccountProfile", async (req, res) => {
  const email = req.body.email;
  const data = SavingAccountsDB.findOne({ email: email });
  res.send(data);
});

app.get("/tempsearchresultsfinal", async (req, res) => {
  try {
    const data = await Scale1EmployeesDB.find();

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

server.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
