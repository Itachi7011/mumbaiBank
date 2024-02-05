const express = require("express")
const app = express();
const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const CurrentAccountTranscationsSchema = new mongoose.Schema({ 
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
        type: String,
        default: "pending"
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
    usedService:{
        type: String
    },
    transactionType:{
        type: String
        
    }
    ,
    transactionDate: {
       type:String
       
    },
    creditUsing:{
        type: String
    },
    ChequeNumber:{
        type: String
    },
    ChequeHolderName:{
        type: String
    },
    ChequeHolderAccountNumber:{
        type: String
    },
    DDNumber:{
        type: String
    },
    DDSenderName:{
        type: String
    },
    debitUsing:{
        type: String
    },
    DDRecieverName:{
        type: String
    },
    DDRecieverAccountNumber:{
        type: String
    },
    previousAmount: {
        type: Number
    },
    
    credit_Add_Amount: {
        type: Number
    },
    debit_Subtract_Amount: {
        type: Number
    },
    newAmount: {
        type: Number
    },
    ByEmployeeName:{
        type: String
    },
    ByEmployeeScale:{
        type: String
    }



})

const CurrentAccountTranscations = new mongoose.model("Current_Account_Transactions", CurrentAccountTranscationsSchema);
module.exports = CurrentAccountTranscations;