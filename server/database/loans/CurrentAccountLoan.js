const express = require("express")
const app = express();
const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const CurrentAccountLoansSchema = new mongoose.Schema({

    bankName: {
        type: String,
        default: "Mumbai Bank Of India"
    },
    backBranch: {
        type: String,
        default: "Shahdara"
    },
    accountType: {
        type: String

    },
    accountStatus: {
        type: String
        
    },
    accountNumber: {
        type: Number
    }, name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNo_1: {
        type: Number

    },
    phoneNo_2: {
        type: Number

    },
    fatherName: {
        type: String,
    },
    loanIdNumber:{
        type: String
        
    },
    loanAmount:{
        type: Number
    },
    loanStatus:{
        type: String
        
    }
    ,
    loanType:{
        type: String
        
    },
    loanStartDate: {
       type:String
       
    },
    loanTotalTimeInYears: {
        type:String
        
     },
    loanEndDate: {
        type:String
        
     },
     loanPercentage: {
        type:String
        
     },
     mortgageName:{
        type: String
     },
     mortgageDescription:{
        type: String
     },
     mortgageMinimumValue:{
        type: Number
     }
    ,interestPerYearOnLoan:{
        type: Number
    }
    ,
    totalInterestOnLoan:{
        type: Number
    }
    ,
   
    totalAmountAfterAddingInterest: {
        type: Number
    },
    installmentsPerMonth:{
        type: Number
    },
    installmentsPerYear:{
        type: Number
    },
    totalAmountInAccountDuringLoanPassed: {
        type: Number
    },
    ByEmployeeName:{
        type: String
    },
    ByEmployeeScale:{
        type: String
    }




}
)

const CurrentAccountLoan = new mongoose.model("Current_Account_Loans", CurrentAccountLoansSchema);
module.exports = CurrentAccountLoan;