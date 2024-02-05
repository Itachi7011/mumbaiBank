const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const technicalEmployeesSchema = new mongoose.Schema({
           
   bankName :{
      type: String,
      default : "Mumbai Bank Of India"
  },
  bankBranch:{
      type: String,
  },scale : {
        type: Number,
        default: "TechnicalStaff"
     },
    name : {
        type: String,
     },email:{
      type : String,
     },
     phoneNo_1:{
      type: Number
      
   },
   phoneNo_2:{
      type: Number
      
   },
    fatherName : {
        type: String,
     },
    dateOfBirth : {
       type: Date,
     },
     age:{
        type : String
     },
     companyName:{
      type : String
     },
    JobAppointmentLetterNo : {
        type: String,
     },
    aadharCardNumber : {
        type: String,
     },
    panNumber : {
        type: String,
     },
    country : {
        type: String,
     },
    state : {
        type: String,
     },
    district : {
        type: String,
     },
    fullAddress : {
        type: String,
     },
     qualification: {
        type: String
     },
    postDuringJoining : {
        type: String,
     },
    basicSalary : {
        type: Number,
     },
    dateOfJoining : {
       type: Date,
      },
      dateOfFormSubmission: {
         type: Date,
         default: Date.now
        },
        password: {
           type: String
        },
        cpassword: {
          type: String,
       },
        photograph: {
           type: String
        }
        ,
        tokens: {
           type: String
        }
})

technicalEmployeesSchema.pre("save", async function (next) {
   if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);

   }
   next();
})






technicalEmployeesSchema.methods.generateAuthToken = async function () {
   try {
      let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2592000000" })
      this.tokens = token1;
      await this.save();
      return token1;
   }catch (err) {
       		console.log(err);
       	}
}



const technicalEmployees = new mongoose.model("TechnicalEmployees", technicalEmployeesSchema);
module.exports = technicalEmployees;