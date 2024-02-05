import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { useLocation } from "react-router";


const ViewSavingAccountOngoingLoans = () => {

    const [Data, setData] = useState({ post: [] });

    const [Profile, setProfile] = useState("");

    const location = useLocation();
    const navigate = useNavigate();


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

        axios.get('/savingAccountFDList').then((response) => {

            const data = response.data;


            setData({ post: data });

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })



    }, []);



    const Requests = () => {
        if (Profile) {
            return (<>




                <div>
                    <div className="main-body">

                        <h2>Account Holder's Name is <span style={{backgroundColor:"red", color:"white"}}><b><i> {previousPageName} </i></b></span> with email id - <span style={{backgroundColor:"red", color:"white"}}><b><i>  {previousPageEmail} </i></b></span>.
                            <br /><br />
                            List Of All Loan Corresponding To <span style={{backgroundColor:"red", color:"white"}}><b><i>{previousPageName}'s</i></b></span> Account are :
                        </h2><br />

                        {
                            Data.post.filter((data) => {
                                if (data.email == previousPageEmail) {
                                    return data;
                                } else {
                                    return 0;
                                }

                            })
                                .map(({ name, email, accountNumber, fatherName, loanType, fixedDepositStartDate, fixedDepositEndDate, interestPerYearOnFixedDeposit, totalInterestOnfixedDeposit, totalAmountAfterAddingInterest, fixedDepositPercentage,  fixedDepositTotalTimeInYears, fixedDepositAmount ,ByEmployeeName ,ByEmployeeScale}) => {
                                    return (<div className="card-body jobSearchCard-body" key={email} style={{ padding: "2rem 0rem", border: "1rem solid black", marginBottom: "1rem" }}>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Name</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{name}</span></h5>
                                        </div>

                                       
                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Father's Name</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {fatherName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Account Number</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {accountNumber}</span></h5>
                                        </div>


                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">FD Time </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {fixedDepositTotalTimeInYears} Years</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">FD Amount </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> <span>&#8377;</span> {fixedDepositAmount}</span></h5>
                                        </div>


                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">FD Start Date </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {fixedDepositStartDate}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">FD End Date </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {fixedDepositEndDate} </span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">FD Percentage</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {fixedDepositPercentage} %</span></h5>
                                        </div>

                                        


                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Interest Per Year </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> <span>&#8377;</span> {interestPerYearOnFixedDeposit}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Total Interest On Loan </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> <span>&#8377;</span> {totalInterestOnfixedDeposit}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Total Amount After Adding Interest </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> <span>&#8377;</span> {totalAmountAfterAddingInterest}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">By Employee Name </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> {ByEmployeeName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">By Employee Scale </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>( {ByEmployeeScale} )</span></h5>
                                        </div>





                                    </div>)
                                }).reverse()

                        }



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

                <Requests />

                <div className="registrationForm">


                </div>

            </div>
        </>
    )
}


export default ViewSavingAccountOngoingLoans;
