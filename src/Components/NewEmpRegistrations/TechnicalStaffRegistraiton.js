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
                    <h1> New Techinical Staff Registration : </h1>

                </div>
                <div className="registrationForm">

                    <form action="/technicalStaffRegister" method="POST">

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Bank BranchName *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="bankBranch" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="name" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Email (Official Email Id only) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="email" placeholder="" />
                        </div>

                        {/* Hidden Scale Input Value : */}
                        <input type="hidden" name="scale" value="Ist Scale" placeholder="" />

                        {/* Hidden Scale Input Value : */}
                        <input type="hidden" name="dateOfFormSubmission" value={Date.now} placeholder="" />

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Father's Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="fatherName" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Date Of Birth *</label>
                            <input autoComplete="off" onChange={handleInput} type="date" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="dateOfBirth" placeholder="" />
                        </div>



                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Company's or Agency's Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="companyName" placeholder="Full Official Name" />
                        </div>


                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Job / Appointment Letter Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="JobAppointmentLetterNo" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Aadhar Card Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="aadharCardNumber" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">P A N (Personal Account Number) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="panNumber" placeholder="" />

                        <div className="mb-3 formDivRegistraion"> <label for="exampleFormControlInput1" className="form-label">Election Voter Id Number *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="electionVoterIdNo" placeholder="" />
                        </div>


                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Country (whichever country's citizenship do you have) *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="country" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">State *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="state" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">District *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="district" placeholder="" />
                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Full Address *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="fullAddress" placeholder="" />
                        </div>


                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel">
                            <label for="exampleFormControlInput1" className="form-label">POST during joining *</label>
                            
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="postDuringJoining" placeholder="" />

                        </div>

                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Basic Salary ( only Basic Salary i.e,. Exluding DA and other addons on salary) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="basicSalary" placeholder="" />
                        </div>


                        <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Date Of Official Joining *</label>
                            <input autoComplete="off" onChange={handleInput} type="date" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="dateOfJoining" placeholder="" />


                            <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Password *</label>
                                <input autoComplete="off" onChange={handleInput} type="password" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="password" placeholder="Password must be atleast 8 digits and create a strong , unpredectible password" />
                            </div>

                            <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">Confirm Password *</label>
                                <input autoComplete="off" onChange={handleInput} type="password" className="form-control formInputRegistraion" id="exampleFormControlInput1" name="cpassword" placeholder="" />
                            </div>



                            <div className="mb-3 formDivRegistraion techStaffRegistrationLabel"> <label for="exampleFormControlInput1" className="form-label">choose File *</label>
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
