import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";


const MyTransactionsSavingAccount = () => {

    const [Profile, serProfiles] = useState("");
    
    const [Data, setData] = useState({post: []});

    const Profiles = async () => {
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

            serProfiles(data);

            if (!res === 200) {
                throw new Error(`Error during retreive data - ${Error}`)
            }

            axios.get('/savingAccountTransactionList').then((response) => {

                const data = response.data;
    
    
                setData({ post: data });
    
                console.log("Transactions data fetch successfully");
            }).catch((err) => { console.log(err) })
    

        } catch (err) {
            console.log(`Error during catch of CustomerSavingAccountProfiles -  ${err}`)
        }
    }

    useEffect(() => {
        Profiles();
    }, []

    )


    const Requests = () => {
        if (Profile) {
            return (<>




                <div>
                    <div className="main-body">

                        <h2>Account Holder's Name is <span className="boldSpan" ><b><i> {Profile.name} </i></b></span> with email id - <span className="boldSpan"><b><i>  {Profile.email} </i></b></span>.
                            <br /><br />
                            List Of All Transactions Corresponding To <span className="boldSpan"><b><i>{Profile.name}'s </i> </b></span> and Account Number -<span className="boldSpan"><b><i>{Profile.accountNumber}  </i></b></span>  are :
                        </h2><br />

                        {
                            Data.post.filter((data) => {
                                if (data.email == Profile.email) {
                                    return data;
                                } else {
                                    return 0;
                                }

                            })
                                .map(({email, usedService, previousAmount, credit_Add_Amount, debit_Subtract_Amount, newAmount, ByEmployeeName, ByEmployeeScale, transactionDate, ChequeNumber, ChequeHolderName, ChequeHolderAccountNumber ,DDRecieverAccountNumber ,DDRecieverName ,DDSenderAccountNumber ,DDSenderName ,DDNumber,creditUsing, debitUsing }) => {
                                    return (<div className="card-body jobSearchCard-body" key={email} style={{ padding: "2rem 0rem", border: "1rem solid black", marginBottom: "1rem" }}>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Transaction Time : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}>{transactionDate}</span></h5>
                                        </div>


                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Used Service : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}>{usedService} </span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Medium Of Credit/Debit : </span> <span style={{ color: "yellow", fontWeight: "bolder" }}>{creditUsing} {debitUsing} </span></h5>
                                        </div>
                                        

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Previous Amount : </span> <span style={{ color: "yellow", fontWeight: "bolder" }}><span>&#8377;</span> {previousAmount}</span></h5>
                                        </div>

                                      
                                            <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Credited/Added Amount : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}> + <span>&#8377;</span> {credit_Add_Amount}</span></h5>
                                        </div>

                                        
                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Debited/Subtracted Amount : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}> - <span>&#8377;</span>{debit_Subtract_Amount}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">New Amount : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}> <span>&#8377;</span>{newAmount}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan"> Cheque Number  : </span><span style={{ color: "yellow", fontWeight: "bolder" }}>{ChequeNumber}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan"> Cheque Holder Name  : </span><span style={{ color: "yellow", fontWeight: "bolder" }}>{ChequeHolderName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Cheque Holder Account Number : </span> <span style={{ color: "yellow", fontWeight: "bolder" }}>{ChequeHolderAccountNumber}</span></h5>
                                        </div>

                                        
                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan"> Cheque Number : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}>{DDNumber}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan"> DD Sender/Reciever Name : </span>  <span style={{ color: "yellow", fontWeight: "bolder" }}>Sender - {DDSenderName}</span><span style={{ color: "red", fontWeight: "bolder" }}> || </span><span style={{ color: "rgb(189, 159, 159)", fontWeight: "bolder" }}>Reciever - {DDRecieverName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan"> DD Sender / Reciever A/C No. : </span> <span style={{ color: "yellow", fontWeight: "bolder" }}>Sender - {DDSenderAccountNumber}</span> <span style={{ color: "red", fontWeight: "bolder" }}> || </span><span style={{ color: "rgb(189, 159, 159)", fontWeight: "bolder" }}> Reciever - {DDRecieverAccountNumber} </span></h5>
                                        </div>


                                      

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">By Employee  : </span><span style={{ color: "yellow", fontWeight: "bolder" }}>{ByEmployeeName}</span></h5>
                                        </div>

                                        <div className="card-body jobSearchCard-body">
                                            <h5 className="mb-3 card-title centercard" style={{ color: "white", fontWeight: "bolder" }}><span style={ { marginRight:"1rem" } } className="cardspan">Employee Scale  : </span><span style={{ color: "yellow", fontWeight: "bolder" }}>{ByEmployeeScale}</span></h5>
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


    return(<>

<div className="main-body">


    <Requests/>


</div>

    
    </>)
}
export default MyTransactionsSavingAccount;