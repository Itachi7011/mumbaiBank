const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");

const newCurrentAccountSchema = new mongoose.Schema({

    bankName: {
        type: String,
        default: "Mumbai Bank Of India"
    },
    backBranch: {
        type: String

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
    },
    totalAmount: {
        type: Number
    },
    fixedDeposit: {
        type: Object
        
    },
    loans: {
        Type: Object
        

    },
    transactions: {
        type: Object
    }
    ,
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
    age:{
        type: String
    }
    ,
    companyName: {
        type: String
    },
    gstNumber: {
        type: String
    },
    companyAnnualTurnover: {
        type: String
    },
    
    electionVoterIdNo: {
        type: String
    },
    aadharCardNumber: {
        type: String,
    },
    panNumber: {
        type: String,
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
    },
    cpassword: {
        type: String,
    },

    tokens: {
        type: String
    }

})



newCurrentAccountSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);

    }
    next();
})






newCurrentAccountSchema.methods.generateAuthToken = async function () {
    try {
        let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2592000000" })
        this.tokens = token1;
        await this.save();
        return token1;
    } catch (err) {
        console.log(err);
    }
}




const CurrentAccount = new mongoose.model("Current_Accounts", newCurrentAccountSchema);
module.exports = CurrentAccount;
