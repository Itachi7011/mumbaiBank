const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");

const newSavingAccountSchema = new mongoose.Schema({
    bankName :{
        type: String,
        default : "Mumbai Bank Of India"
    },
    bankBranch:{
        type: String,
        default: "Shahdara"
    },
    accountType: {
        type: String
        
    },
    accountStatus: {
        type : String,
        default : "pending"
    },
    totalAmount:{
        type : Number
    },
    accountNumber:{
        type : Number
    },
    fixedDeposit:{
        type: Object
    },
    loans : {
        type : Object,
        
    },
    transactions: {
        type: Object
    },
   
    name: {
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
    dateOfBirth: {
        type: String,
    },
    occupation: {
        type: String
    },
    detailedOccupation: {
        type: String
    },
    companyName: {
        type: String,
    },
    age:{
        type: String
    },
    aadharCardNumber: {
        type: String,
    },
    panNumber: {
        type: String,
    },
    electionVoterIdNo:{
        type: String
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    district: {
        type: String,
    },
    fullAddress: {
        type: String,
    },
    qualification: {
        type: String
    },
    dateOfFormSubmission: {
        type: String
    },
    password: {
        type: String
    }
    ,
    cpassword: {
		type: String,
	},
    tokens: {
        type: String
    }

})



newSavingAccountSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);

    }
    next();
})






newSavingAccountSchema.methods.generateAuthToken = async function () {
    try {
        let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2592000000" })
        this.tokens = token1;
        await this.save();
        return token1;
    } catch (err) {
        console.log(err);
    }
}




const SavingAccount = new mongoose.model("Saving_Accounts", newSavingAccountSchema);
module.exports = SavingAccount;