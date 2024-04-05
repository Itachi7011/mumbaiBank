import React, { useState } from "react";




const RequestNewCurrentAccount = () => {

    let name, value;

    const [user, setUser] = useState({
        bankName: "",
        backBranch: "",
        accountType: "",
        accountStatus: "",
        email: "",
        name: "",
        fatherName: "",
        dateOfBirth: "",
        phoneNo_1: "",
        phoneNo_2: "",
        qualification: "",
        occupation: "",
        companyName: "",
        gstNumber: "",
        companyAnnualTurnover: "",
        activeLoans: "",
        aadharCardNumber: "",
        panNumber: "",
        country: "",
        state: "",
        district: "",
        fullAddress: "",
        electionVoterIdNo: "",
        totalAmount: "",
        password: "",
        cpassword: ""


    })

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }


    return (<>


        <div className="main-body1">



            <div className="nav-btn">
                <h1> New Current Account Opening Request : </h1>

            </div>
            <div className="registrationForm">

                <form action="/reqNewCurrAcc" method="POST">

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Bank BranchName *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="bankBranch" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Name *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="name" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Email (Official Email Id only) *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="email" placeholder="" />
                    </div>



                    {/* Hidden Account Type Input Value : */}
                    <input type="hidden" name="accountType" value="current" placeholder="" />

                    {/* Hidden Account Number Input Value : */}
                    <input type="hidden" name="accountNumber" placeholder="" />

                    {/* Hidden Account Amount Input Value : */}
                    <input type="hidden" name="totalAmount" value="" placeholder="" />

                    {/* Hidden Date Of Form Submission : */}
                    <input type="hidden" name="dateOfFormSubmission" value={new Date().toISOString()} placeholder="" />


                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Father's Name *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="fatherName" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Date Of Birth *</label>
                        <input autoComplete="off" onChange={handleInput} type="date" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="dateOfBirth" placeholder="" />
                    </div>


                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label"> Phone Number (1) *</label>
                        <input autoComplete="off" onChange={handleInput} type="number" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="phoneNo_1" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label"> Phone Number (2) *</label>
                        <input autoComplete="off" onChange={handleInput} type="number" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="phoneNo_2" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Qualification *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="qualification" placeholder="Enter Your Maximum Qualification .Ex-MBA, CA, B-Tech, etc" />
                    </div>


                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Occupation *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="occupation" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Company's or Organisation's or Govt. Department's Name *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="companyName" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Company's or Organisation's Registered GST-IN Number *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="gstNumber" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Total Annual Turnover of that Company or Organisation (In Rupees Only) *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="companyAnnualTurnover" placeholder="In Rupees Only" />
                    </div>

                    <div className="mb-3 formDivRegistraion">
                        <label for="exampleFormControlInput1" className="form-label">Active Loan/Loans *</label>

                        <select className="form-select form-select-lg mb-3 formDivRegistraion" aria-label=".form-select-lg example" name="activeLoans" onChange={handleInput}>
                            <option selected>No Loans</option>
                            <option value="1_Loan">1 Loan </option>
                            <option value="2_Loan">2 Loans </option>
                            <option value="3_Loan">3 Loans </option>
                            <option value="3_Loan">4 Loans </option>
                            <option value="3_Loan">More Than 4 Loans </option>
                        </select>

                    </div>


                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Election Voter Id Card Number *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="electionVoterIdNo" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Aadhar Card Number *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="aadharCardNumber" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">P A N (Personal Account Number) *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="panNumber" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Country (whichever country's citizenship do you have) *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="country" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">State *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="state" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">District *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="district" placeholder="" />
                    </div>

                    <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Full Address *</label>
                        <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="fullAddress" placeholder="" />
                    </div>




                    <div className="mb-3 formDivRegistraion">

                        <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Password *</label>
                            <input autoComplete="off" onChange={handleInput} type="password" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="password" placeholder="create a strong , unpredectible password" />
                        </div>

                        <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Confirm Password *</label>
                            <input autoComplete="off" onChange={handleInput} type="password" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="cpassword" placeholder="Password must be atleast 8 digits and create a strong , unpredectible password" />
                        </div>

                        <h3> We might contact you for verification within 2 days from today and ask for more details. So please make sure that contact number and email is working fine. Also keep your documents ready for fast verification. </h3>


                        <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "right", fontSize:"large"  }}>Add Request</button>


                    </div>

                </form>
            </div>

        </div>

    </>)



}








export default RequestNewCurrentAccount;
