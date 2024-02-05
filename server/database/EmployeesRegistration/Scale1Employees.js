const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");

const scale1Schema = new mongoose.Schema({

   bankName: {
      type: String,
      default: "Mumbai Bank Of India"
   },
   bankBranch: {
      type: String
      // ,
      // require : true
   },
   scale: {
      type: String,

   },
   name: {
      type: String
      // ,
      // require : true
   },
   email: {
      type: String
      // ,
      // require : true
   },
   phoneNo_1: {
      type: Number
      // ,
      // require : true

   },
   phoneNo_2: {
      type: Number
      // ,
      // require : true

   },
   fatherName: {
      type: String
      // ,
      // require : true
   },
   dateOfBirth: {
      type: Date
      // ,
      // require : true
   },
   age: {
      type: String
   },
   JobAppointmentLetterNo: {
      type: String
      // ,
      // require : true
   },
   aadharCardNumber: {
      type: String
      // ,
      // require : true
   },
   panNumber: {
      type: String
      // ,
      // require : true
   },
   electionVoterIdNo: {
      type: String
   },
   country: {
      type: String
      // ,
      // require : true
   },
   state: {
      type: String
      // ,
      // require : true
   },
   district: {
      type: String
      // ,
      // require : true
   },
   fullAddress: {
      type: String
      // ,
      // require : true
   },
   qualification: {
      type: String
      // ,
      // require : true
   },
   postDuringJoining: {
      type: String
      // ,
      // require : true
   },
   basicSalary: {
      type: Number
      // ,
      // require : true
   },
   dateOfJoining: {
      type: String,
   },
   dateOfFormSubmission: {
      type: String

   },
   password: {
      type: String
      // ,
      // require : true
   },
   cpassword: {
      type: String,
      require: true
   },
   photograph: {
      data: Buffer,
      contentType: String
   }
   ,
   tokens: {
      type: String
   }

})



scale1Schema.pre("save", async function (next) {
   if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);

   }
   next();
})






scale1Schema.methods.generateAuthToken = async function () {
   try {
      let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2592000000" })
      this.tokens = token1;
      await this.save();
      return token1;
   } catch (err) {
      console.log(err);
   }
}




const Scale1Employees = new mongoose.model("Scale_1Employees", scale1Schema);
module.exports = Scale1Employees;