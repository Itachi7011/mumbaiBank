import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { useLocation } from "react-router";


const ShowSavingAccountTransactions = () => {

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


            console.log("Profile data fetched successfully");



        }).catch((err) => { console.log(`Error during catch of setProfile -  ${err}`) })

        axios.get('/savingAccountTransactionList').then((response) => {

            const data = response.data;


            setData({ post: data });

            console.log("Transactions data fetch successfully");
        }).catch((err) => { console.log(err) })





    }, []);



    const Requests = () => {
        if (Profile) {
            return (<>




                <div>
                    <div className="main-body">

                        <h2>Saving Account Holder's Name is <span className="boldSpan" ><b><i> {previousPageName} </i></b></span> and with Account Number-  <span className="boldSpan" ><b><i> {previousPageAccountNumber} </i></b></span> and with email id - <span className="boldSpan"><b><i>  {previousPageEmail} </i></b></span>.<br />

                            List Of All Transactions Corresponding To <span className="boldSpan"><b><i>{previousPageName}'s </i> </b></span> and Account Number -<span className="boldSpan"><b><i>{previousPageAccountNumber}  </i></b></span>  are :
                        </h2><br />

                        {
                            Data.post.filter((data) => {
                                if (data.email == previousPageEmail) {
                                    return data;
                                } else {
                                    return 0;
                                }

                            })
                                .map(({email, usedService, previousAmount, credit_Add_Amount, debit_Subtract_Amount, newAmount, ByEmployeeName, ByEmployeeScale, transactionDate, ChequeNumber, ChequeHolderName, ChequeHolderAccountNumber ,DDRecieverAccountNumber ,DDRecieverName ,DDSenderAccountNumber ,DDSenderName ,DDNumber }) => {
                                    return (<div className="card-body jobSearchCard-body" key={email} style={{ padding: "2rem 0rem", border: "1rem solid black", marginBottom: "1rem" }}>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Transaction Time</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{transactionDate}</span></h5>
                                        </div>

                                       
                                        


                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Used Service </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{usedService} </span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Previous Amount </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}><span>&#8377;</span> {previousAmount}</span></h5>
                                        </div>

                                      
                                            <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Credited/Added Amount </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> + {credit_Add_Amount}</span></h5>
                                        </div>

                                        
                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Debited/Subtracted Amount </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}> - {debit_Subtract_Amount}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">New Amount </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{newAmount}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan"> Cheque Number </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{ChequeNumber}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan"> Cheque Holder Name </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{ChequeHolderName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Cheque Holder Account Number</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{ChequeHolderAccountNumber}</span></h5>
                                        </div>

                                        
                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan"> Cheque Number </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{DDNumber}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan"> DD Sender/Reciever Name </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>Sender - {DDSenderName}</span><span style={{ color: "red", fontWeight: "bolder" }}> || </span><span style={{ color: "rgb(189, 159, 159)", fontWeight: "bolder" }}>Reciever - {DDRecieverName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan"> DD Sender / Reciever A/C No. </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>Sender - {DDSenderAccountNumber}</span> <span style={{ color: "red", fontWeight: "bolder" }}> || </span><span style={{ color: "rgb(189, 159, 159)", fontWeight: "bolder" }}> Reciever - {DDRecieverAccountNumber} </span></h5>
                                        </div>


                                      

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">By Employee </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{ByEmployeeName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span className="cardspan">Employee Scale </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{ByEmployeeScale}</span></h5>
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


export default ShowSavingAccountTransactions;
