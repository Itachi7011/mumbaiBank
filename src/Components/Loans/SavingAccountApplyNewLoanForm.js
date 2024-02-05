import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";


const SavingAccountApplyNewLoanForm = () => {

    const [Profile, setProfile] = useState("");
    const location = useLocation();

    const previousPageId = location.state.id;
    const previousPageEmail = location.state.email;
    const previousPageName = location.state.name;
    const previousPagePhoneNo_1 = location.state.phoneNo_1;
    const previousPagePhoneNo_2 = location.state.phoneNo_2;
    const previousPageAccountNumber = location.state.accountNumber;
    const previousPageAccountType = location.state.accountType;
    const previousPageBankName = location.state.bankName;
    const previousPageBankBranch = location.state.bankBranch;
    const previousPageAccountStatus = location.state.accountStatus;
    const previousPageFatherName = location.state.fatherName;


    useEffect(() => {

        axios.get('/empProfile').then(async (response) => {
            const data = await response.data;


            setProfile(data);


            console.log("data fetched successfully");



        }).catch((err) => { console.log(`Error during catch of setProfile -  ${err}`) })
    },[]);

    const Requests = () => {
        if (Profile) {
            return (<>
                <div>
                    <div className="main-body">
                        
                        <h2>Account Holder's Name is " {previousPageName} " with email id - " {previousPageEmail} ".
                            <br /><br />
                            Form To Apply For Loan corresponding to {previousPageName} 's Account with {previousPageAccountNumber} Saving Account Number: 
                        </h2><br />

                    </div>
                </div>
            </>)
        } else {
            return (<>
                <h2>Sorry Only Bank Employees can Visit This Page</h2>
                <h2>If You are Bank Employee Then Please Login</h2>
            </>)
        }
    }

    let name, value;

    const [user, setUser] = useState({

        id: previousPageId,
        email: previousPageEmail,
        name: previousPageName,
        phoneNo_1: previousPagePhoneNo_1,
        phoneNo_2: previousPagePhoneNo_2,
        fatherName: previousPageFatherName,
        accountNumber: previousPageAccountNumber,
        accountType: previousPageAccountType,
        bankName: previousPageBankName,
        bankBranch: previousPageBankBranch,
        accountStatus: previousPageAccountStatus,
        loanStartDate: "",
        loanTotalTimeInYears: "",       
        loanType: "",
        loanAmount : "",
        mortgageName: "",
        mortgageDescription : "",
        mortgageMinimumValue : "",
        ByEmployeeScale:"",
        ByEmployeeName : ""
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
            <div className="m-5">

                <Requests/>
                
                <div className="registrationForm">

                    <form className="mb-5" action="/savingAccountNewLoan" method="POST">

                        {/* Firstly Hidden Material Only */}

                        <input type="hidden" name="name" value={previousPageName}></input>
                    <input type="hidden" name="email" value={previousPageEmail}></input>
                    <input type="hidden" name="id" value={previousPageId}></input>
                    <input type="hidden" name="phoneNo_1" value={previousPagePhoneNo_1}></input>
                    <input type="hidden" name="phoneNo_2" value={previousPagePhoneNo_2}></input>
                    <input type="hidden" name="fatherName" value={previousPageFatherName}></input>
                    <input type="hidden" name="accountNumber" value={previousPageAccountNumber}></input>
                    <input type="hidden" name="accountType" value={previousPageAccountType}></input>
                    <input type="hidden" name="accountStatus" value={previousPageAccountStatus}></input>
                    <input type="hidden" name="bankName" value={previousPageBankName}></input>
                    <input type="hidden" name="bankBranch" value={previousPageBankBranch}></input>
                    <input type="hidden" name="loanStartDate" value={new Date()}></input>
                    <input type="hidden" name="ByEmployeeName" value={Profile.name}></input>
                    <input type="hidden" name="ByEmployeeScale" value={Profile.scale}></input>

                    {/* Now Inputs That will show on Page */}


                        <div className="mb-5">
                            <label for="exampleFormControlInput1" className="form-label">Type Of Loan : *</label>

                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="loanType">
                                <option value="HomeLoan">Home Loan</option>
                                <option value="LoanAgainstProperty">Loan Against Property</option>
                                <option value="LoanAgainstInsurance">Loan Against Insurance</option>
                                <option value="LoanAgainstFixedDesposit">Loan Against Fixed Desposit</option>
                                <option value="PersonalLoan">Personal Loan</option>
                                <option value="BusinessLoan">Business Loan</option>
                                <option value="EducationLoan">Education Loan</option>
                                <option value="Non_E-V_VehicleLoan">(Non E-V) Vehicle Loan</option>
                                <option value="E-V_VehicleLoan">(E-V) Vehicle Loan (Less Interest)</option>
                                
                            </select>

                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Loan Amount (in Rupees Only) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="loanAmount" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Total Time To Repay Loan (In Years And also without any Decimal) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="loanTotalTimeInYears" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Mortgage Name *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="mortgageName" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Mortgage Description *</label>
                            <input autoComplete="off" onChange={handleInput} type="text" className="form-control" id="exampleFormControlInput1" name="mortgageDescription" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Minimum Value Of Mortgage (in Rupees Only) *</label>
                            <input autoComplete="off" onChange={handleInput} type="number" className="form-control" id="exampleFormControlInput1" name="mortgageMinimumValue" placeholder="" />
                        </div>

                        


                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> <b><i>Approved By Employee - " {Profile.name} " of  Scale - " {Profile.scale} " </i></b></label>

                            <button type="submit" className="btn btn-primary btn-lg m-3" style={{ float: "right" }}>Register</button>

                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}


export default SavingAccountApplyNewLoanForm;
