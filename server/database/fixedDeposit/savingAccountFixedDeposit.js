const express = require("express")
const app = express();
const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const SavingAccountFixedDepositSchema = new mongoose.Schema({

    bankName: {
        type: String,
        default: "Mumbai Bank Of India"
    },
    backBranch: {
        type: String,

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
    
    fixedDepositAmount:{
        type: String
        
    },
    fixedDepositStartDate: {
       type:String
       
    },
    fixedDepositTotalTimeInYears: {
        type:Number
        
     },
    fixedDepositEndDate: {
        type:String
        
     },
     fixedDepositPercentage: {
        type:String
        
     },
    interestPerYearOnFixedDeposit:{
        type: Number
    }
    ,
    totalInterestOnfixedDeposit:{
        type: Number
    }
    ,
    totalAmountAfterAddingInterest: {
        type: Number
    },
    totalAmountInAccountDuringFixedDepositPassed: {
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

const SavingAccountFixedDeposit = new mongoose.model("Fixed_Deposits_Saving_Account", SavingAccountFixedDepositSchema);
module.exports = SavingAccountFixedDeposit;