
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

const CustomerCurrentAccountProfile = () => {

    const [user, setUser] = useState("");

    const navigate = useNavigate();
    const Profile = async () => {
        try {

            const res = await fetch("/customerProfile",
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
            console.log(`Error during catch of CustomerCurrentAccountProfile -  ${err}`)
        }
    }

    useEffect(() => {
        Profile();
    }, []

    )


    return (
        <>
            <div className="main-body mt-5">
                 
            <div className="container" style={{ width: "100%" }}>
                        <div className="row">

                            <div className="col-xl-5">
                                <div className="row">
                                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                                        <div className="d-flex flex-column align-items-center">

                                            <p className="fw-bold h4 mt-3 mb-5"><span className="font-big" style={{ border: "3px solid red", borderRadius: "2em", padding: "0.7em", color: "white", background: "red" }}>{user.name}</span></p>

                                            <p className="mb-3"><span className="font-medium">{user.district}  , {user.state} , {user.country}</span></p>

                                            <p className="mb-3"><span className="font-medium">Account No. - {user.accountNumber}</span></p>

                                        </div>
                                    </div>

                                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">


                                    <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium">Bank-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.bankName}</span></p>

                                        </div>



                                    <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium">Branch-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.branchName}</span></p>

                                        </div>

                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium">Account Type -</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.accountType}</span></p>

                                        </div>


                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium">Aadhar No.-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.aadharCardNumber}</span></p>

                                        </div>
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-github-alt me-2"></span><span className="font-medium">PAN No.-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.panNumber}</span></p>

                                        </div>

                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2"></span><span className="font-medium">Election Voter Id. Card No.-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.electionVoterIdNo}</span></p>

                                        </div>

                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2"></span><span className="font-medium">Date Of Account Opening-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.dateOfFormSubmission}</span></p>

                                        </div>

                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2"></span><span className="font-medium">Maximum Qualification-</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.qualification}</span></p>

                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-7 ps-md-4">
                                <div className="row">
                                    <div className="col-12 bg-white px-3 mb-3 pb-3">

                                    <div className="d-flex ">
                                <div className="btn btn-primary me-2" style={{ marginBottom: "1em" }}><a href="/EditEmpProfiles" style={{ textAlign: "none", color: "white", padding: "0", fontWeight: "bold", }}>Edit Profile</a></div>

                            </div>
                                        
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Company Name</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.companyName}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Company's GST Number</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.gstNumber}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Company's Annual Turn Over</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.companyAnnualTurnover}</span></p>
                                        </div>
                                        
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Email</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.email}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Date Of Birth</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.dateOfBirth}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Age</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.age}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Phone -1</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.phoneNo_1}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Phone -2</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.phoneNo_2}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Country</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {user.country}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">State</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {user.state}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Full Address</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.fullAddress}</span></p>
                                        </div>

                                        
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Occupation </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.occupation}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Total Amount In Account</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{user.totalAmount}</span></p>
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

export default CustomerCurrentAccountProfile;


