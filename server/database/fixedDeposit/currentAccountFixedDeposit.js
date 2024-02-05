const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const CurrentAccountFixedDepositSchema = new mongoose.Schema({
  bankName: {
    type: String,
    default: "Mumbai Bank Of India",
  },
  backBranch: {
    type: String,
    default: "Shahdara",
  },
  accountType: {
    type: String,
  },
  accountStatus: {
    type: String,
  },
  accountNumber: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo_1: {
    type: Number,
  },
  phoneNo_2: {
    type: Number,
  },
  fatherName: {
    type: String,
  },
  fixedDepositAmount: {
    type: String,
  },
  fixedDepositStartDate: {
    type: String,
  },
  fixedDepositTotalTimeInYears: {
    type: String,
  },
  fixedDepositEndDate: {
    type: String,
  },
  fixedDepositPercentage: {
    type: String,
  },
  interestPerYearOnFixedDeposit: {
    type: Number,
  },
  totalInterestOnfFxedDeposit: {
    type: Number,
  },
  totalAmountAfterAddingInterest: {
    type: Number,
  },
  totalAmountInAccountDuringFixedDepositPassed: {
    type: Number,
  },
  ByEmployeeName: {
    type: String,
  },
  ByEmployeeScale: {
    type: String,
  },
});

const CurrentAccountFixedDeposit = new mongoose.model(
  "Fixed_Deposits_Current_Account",
  CurrentAccountFixedDepositSchema
);
module.exports = CurrentAccountFixedDeposit;
