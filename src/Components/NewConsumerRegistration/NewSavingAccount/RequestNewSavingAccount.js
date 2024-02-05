import React, { useState } from "react";



const RequestNewSavingAccount = () => {

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
        aadharCardNumber: "",
        panNumber: "",
        electionVoterIdNo: "",
        country: "",
        state: "",
        district: "",
        fullAddress: "",
        totalAmount: "",
        dateOfFormSubmission:"",
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

    return (
        <>
            <div className="main-body1">

                <div className="nav-btn">
                    <h1> New Saving Account Opening Request : </h1>

                </div>
                <div className="registrationForm">

                    <form action="/reqNewSavAcc" method="POST">



                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Bank BranchName *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="bankBranch" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Email (Official Email Id only) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="email" placeholder="" />
                        </div>



                        {/* Hidden Scale Input Value : */}
                        <input type="hidden" name="accountType" value="saving" placeholder="" />

                        {/* Hidden Account Number Input Value : */}
                        <input type="hidden" name="accountNumber" value={Number(50)} placeholder="" />

                        {/* Hidden Account Amount Value : */}
                        <input type="hidden" name="totalAmount" value="0" placeholder="" />

                        {/* Hidden Date Of Form Submission : */}
                        <input type="hidden" name="dateOfFormSubmission" value={new Date()}  ></input>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Father's Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="fatherName" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Date Of Birth *</label>
                            <input autoComplete="off" onChange={handleInput} type="date" className="form-control" id="exampleFormControlInput1" name="dateOfBirth" placeholder="" />
                        </div>


                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Phone Number (1) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="phoneNo_1" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Phone Number (2) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="phoneNo_2" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Qualification *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="qualification" placeholder="Enter Your Maximum Qualification .Ex-MBA, CA, B-Tech, etc" />
                        </div>



                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Occupation *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="occupation" placeholder="" />
                        </div>


                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Election Voter Id Card Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="electionVoterIdNo" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Aadhar Card Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="aadharCardNumber" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">P A N (Personal Account Number) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="panNumber" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Country (whichever country's citizenship do you have) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="country" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">State *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="state" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">District *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="district" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Full Address *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="fullAddress" placeholder="" />
                        </div>



                        <div className="mb-3"> 


                            <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Password *</label>
                                <input autoComplete="off" onChange={handleInput} type="password" className="form-control" id="exampleFormControlInput1" name="password" placeholder="create a strong , unpredectible password" />
                            </div>

                            <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Confirm Password *</label>
                                <input autoComplete="off" onChange={handleInput} type="password" className="form-control" id="exampleFormControlInput1" name="cpassword" placeholder="Password must be atleast 8 digits and create a strong , unpredectible password" />
                            </div>



                            <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "right" }}>Add Request</button>


                        </div>

                    </form>
                </div>

            </div>

        </>
    )
}

export default RequestNewSavingAccount;