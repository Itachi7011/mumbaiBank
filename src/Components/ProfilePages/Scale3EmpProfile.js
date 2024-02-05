import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

const Scale3EmpProfile = () => {

    const [user, setUser] = useState("");

    const navigate = useNavigate();
    const Profile = async () => {
        try {

            const res = await fetch("/empProfile",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

            const data = await res.json();

            setUser(data);

            if (!res === 200) {
                throw new Error(`Error during retreive data - ${Error}`)
            }

        } catch (err) {
            console.log(`Error during catch of Scale1EmpProfile -  ${err}`)
        }
    }

    useEffect(() => {
        Profile();
    }, []

    )


    return (
        <>
           <div className="main-body profile-main-div mt-5" style={{marginBottom: "10rem"}}>
                 
            <div className="container" style={{ width: "100%" }}>
                        <div className="row">

                            <div className="col-xl-5 div-left-profile">
                                <div className="row">
                                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                                        <div className="d-flex flex-column align-items-center">

                                            <p className="fw-bold h4 mt-3 mb-5" style={{marginBottom:"3rem"}}><span className="font-big" style={{ border: "3px solid red", borderRadius: "1.5rem", padding: "1rem", color: "white", background: "red", fontSize:"x-large" }}>{user.name}</span></p>

                                           

                                            <p className="mb-3 profile-div-both  "><span className="font-medium">Rank Scale - {user.scale}</span></p>

                                        </div>
                                    </div>

                                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">



                                    <div className="d-flex justify-content-between profile-div-both border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium profile-content-left">Bank-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.bankName}</span></p><br/>

                                        </div>



                                    <div className="d-flex justify-content-between profile-div-both  border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium profile-content-left">Branch-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.branchName}</span></p><br/>

                                        </div>


                                        <div className="d-flex justify-content-between  profile-div-both border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium profile-content-left">Designation (POST) -</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.postDuringJoining}</span></p><br/>

                                        </div>




                                        <div className="d-flex justify-content-between  profile-div-both border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium profile-content-left">Aadhar No.-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.aadharCardNumber}</span></p><br/>

                                        </div>
                                        <div className="d-flex justify-content-between profile-div-both  border-bottom py-2 px-3">
                                            <p><span className="fab fa-github-alt me-2"></span><span className="font-medium profile-content-left">PAN No.-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.panNumber}</span></p><br/>

                                        </div>



                                        <div className="d-flex justify-content-between  profile-div-both border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium profile-content-left">Election ID No. -</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.electionVoterIdNo}</span></p><br/>

                                        </div>



                                        <div className="d-flex justify-content-between profile-div-both  border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2"></span><span className="font-medium profile-content-left">Date Of Joining-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.dateOfJoining}</span></p><br/>

                                        </div>

                                        <div className="d-flex justify-content-between profile-div-both  border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2"></span><span className="font-medium profile-content-left">Job Apt. Letter No.-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium profile-content-right">{user.JobAppointmentLetterNo}</span></p><br/>

                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-7 ps-md-4">
                                <div className="row">
                                    <div className="col-12 bg-white px-3 mb-3 pb-3">

                                    <div className="d-flex ">
                                <div className="btn btn-primary me-2" style={{ marginBottom: "2rem" }}><a href="/EditEmpProfiles" style={{border:"4px solid black", textAlign: "none", backgroundColor:"red", color: "white", padding: "1rem", fontWeight: "bold", fontSize:"larger" , marginBottom: "2rem"}}>Edit Profile</a></div>

                            </div>
                                        

                                        <div className="d-flex align-items-center profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Email - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.email}</span></p><br/>
                                        </div>
                                        <div className="d-flex align-items-center profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Age - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.age}</span></p><br/>
                                        </div>

                                        <div className="d-flex align-items-center  profile-div-both1 justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Phone -1 - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.phoneNo_1}</span></p><br/>
                                        </div>

                                        <div className="d-flex align-items-center  profile-div-both1 justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Phone -2 - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.phoneNo_2}</span></p><br/>
                                        </div>

                                        <div className="d-flex align-items-center  profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Country - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {user.country}</span></p><br/>
                                        </div>
                                        <div className="d-flex align-items-center profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">State - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {user.state}</span></p><br/>
                                        </div>

                                        <div className="d-flex align-items-center profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Address - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.fullAddress}</span></p><br/>
                                        </div>

                                        
                                        <div className="d-flex align-items-center profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Work As - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.postDuringJoining}</span></p><br/>
                                        </div>
                                        <div className="d-flex align-items-center profile-div-both1  justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Qualifications - </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.qualification}</span></p><br/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                 


                





        </div >
        </>
    )
}

export default Scale3EmpProfile;