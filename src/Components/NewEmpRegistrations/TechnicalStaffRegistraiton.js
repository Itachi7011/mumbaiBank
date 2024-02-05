import React, { useState } from "react";


const Scale1Registration = () => {
    let name, value;

    const [user, setUser] = useState({
        bankName: "",
        backBranch: "",
        scale: "Technical Staff",
        email: "",
        name: "",
        fatherName: "",
        dateOfBirth: "",
        age: "",
        companyName: "",
        JobAppointmentLetterNo: "",
        aadharCardNumber: "",
        panNumber: "",
        electionVoterIdNo: "",
        country: "",
        state: "",
        district: "",
        fullAddress: "",
        postDuringJoining: "",
        basicSalary: "",
        dateOfJoining: "",
        dateOfFormSubmission: "",
        password: "",
        cpassword: ""

    })
    const [image, setImage] = useState("");
    console.log(image, 12);

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
                    <h1> New Employee Registration (Only Scale - I) : </h1>

                </div>
                <div className="registrationForm">

                    <form action="/technicalStaffRegister" method="POST">

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Bank BranchName *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="bankBranch" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Email (Official Email Id only) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="email" placeholder="" />
                        </div>

                        {/* Hidden Scale Input Value : */}
                        <input type="hidden" name="scale" value="Ist Scale" placeholder="" />

                        {/* Hidden Scale Input Value : */}
                        <input type="hidden" name="dateOfFormSubmission" value={Date.now} placeholder="" />

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Father's Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="fatherName" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Date Of Birth *</label>
                            <input autoComplete="off" onChange={handleInput} type="date" className="form-control" id="exampleFormControlInput1" name="dateOfBirth" placeholder="" />
                        </div>



                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Company's or Agency's Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="companyName" placeholder="Full Official Name" />
                        </div>


                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Job / Appointment Letter Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="JobAppointmentLetterNo" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Aadhar Card Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="aadharCardNumber" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">P A N (Personal Account Number) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="panNumber" placeholder="" />

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Election Voter Id Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="electionVoterIdNo" placeholder="" />
                        </div>


                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Country (whichever country's citizenship do you have) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="country" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">State *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="state" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">District *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="district" placeholder="" />
                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Full Address *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="fullAddress" placeholder="" />
                        </div>


                        <div className="mb-3 techStaffRegistrationLabel">
                            <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">POST during joining *</label>
                            
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="postDuringJoining" placeholder="" />

                        </div>

                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Basic Salary ( only Basic Salary i.e,. Exluding DA and other addons on salary) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="basicSalary" placeholder="" />
                        </div>


                        <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Date Of Official Joining *</label>
                            <input autoComplete="off" onChange={handleInput} type="date" className="form-control" id="exampleFormControlInput1" name="dateOfJoining" placeholder="" />


                            <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Password *</label>
                                <input autoComplete="off" onChange={handleInput} type="password" className="form-control" id="exampleFormControlInput1" name="password" placeholder="Password must be atleast 8 digits and create a strong , unpredectible password" />
                            </div>

                            <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">Confirm Password *</label>
                                <input autoComplete="off" onChange={handleInput} type="password" className="form-control" id="exampleFormControlInput1" name="cpassword" placeholder="" />
                            </div>



                            <div className="mb-3 techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label techStaffRegistrationLabel1">choose File *</label>
                                <input name="photograph" type="file" onChange={(e) => setImage(e.target.files[0])} />
                            </div>

                            <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "right" }}>Register</button>


                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}
export default Scale1Registration;
