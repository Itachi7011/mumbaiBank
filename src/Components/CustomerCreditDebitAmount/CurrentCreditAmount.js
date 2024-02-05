import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


const CurrentCreditAmount = () => {

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
    const previousPageCompanyName = location.state.companyName;
    const previousPageGstNumber = location.state.gstNumber;



    const [Profile, setProfile] = useState("");

    const [Data, setData] = useState({
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
        amount:"",
        creditUsing:"",
        ChequeNumber:"",
        ChequeHolderName:"",
        ChequeHolderAccountNumber:"",
        DDNumber:"",
        DDSenderName:"",
        DDSenderAccountNumber:"",
        transactionDate: "",
        transactionType: "",
        ByEmployeeName : "",
        ByEmployeeScale:"",
        companyName: previousPageCompanyName,
        gstNumber: previousPageGstNumber

    });

    let name, value;

    let inputHandler = async (e) => {
        name = e.target.name;
        value = e.target.value;
        await setData({ ...Data, [name]: value });

    };

    useEffect(() => {

        axios.get('/empProfile').then(async (response) => {
            const data = await response.data;


            setProfile(data);


            console.log("data fetched successfully");



        }).catch((err) => { console.log(`Error during catch of setProfile -  ${err}`) })
    },[])

    const Requests = () => {
        if (Profile) {
            return (<>
                <div>
                    <div className="main-body">
                        
                        <h2>Account Holder's Name is " <span className="boldSpan1" ><b><i> {previousPageName} </i></b></span> " with email id - " {previousPageEmail} ".
                            <br /><br />
                            Please Enter Amount to <span className="boldSpan1" ><b><i> Credit / Add </i></b></span> into <span className="boldSpan1" ><b><i> {previousPageName} 's </i></b></span> Account
                        </h2>

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


    return (
        <>
            <Requests />
            <div className="creditDebitForm">
                <form action="/confirmCurrentAccountCredit" method="post">
                    <input type="hidden" name="name" value={previousPageName}></input>
                    <input type="hidden" name="email" value={previousPageEmail}></input>
                    <input type="hidden" name="id" value={previousPageId}></input>
                    <input type="hidden" name="phoneNo_1" value={previousPagePhoneNo_1}></input>
                    <input type="hidden" name="phoneNo_2" value={previousPagePhoneNo_2}></input>
                    <input type="hidden" name="fatherName" value={previousPageFatherName}></input>
                    <input type="hidden" name="companyName" value={previousPageCompanyName}></input>
                    <input type="hidden" name="gstNumber" value={previousPageGstNumber}></input>
                    <input type="hidden" name="accountNumber" value={previousPageAccountNumber}></input>
                    <input type="hidden" name="accountType" value={previousPageAccountType}></input>
                    <input type="hidden" name="accountStatus" value={previousPageAccountStatus}></input>
                    <input type="hidden" name="bankName" value={previousPageBankName}></input>
                    <input type="hidden" name="bankBranch" value={previousPageBankBranch}></input>
                    <input type="hidden" name="transactionDate" value={new Date()}></input>
                    <input type="hidden" name="transactionType" value="credit"></input>
                    <input type="hidden" name="ByEmployeeName" value={Profile.name}></input>
                    <input type="hidden" name="ByEmployeeScale" value={Profile.scale}></input>


                   
                    <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Credit Using : *</label>
                            

                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="creditUsing">
                                <option value="Cheque">Cheque</option>
                                <option value="DD(DemandDraft)">D D (Demand Draft)</option>
                                <option value="Bank_Credit_General_Form/Slip">Bank Credit General Form / Slip</option>
                               
                                
                            </select>

                        </div>
                        <br/><br/><br/><br/><br/>


                        <div className="mb-3"> <div className="form-label"> ------------------------------------------------------ Fill Only If Cheque Selected------------------------------------------------------ </div></div>



                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">Cheque Number </label>
                            <input autoComplete="off" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" name="ChequeNumber" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Cheque Holder Name </label>
                            <input autoComplete="off" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" name="ChequeHolderName" placeholder="" />
                        </div>


                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label"> Cheque Holder Account Number </label>
                            <input autoComplete="off" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" name="ChequeHolderAccountNumber" placeholder="" />
                        </div><br/><br/><br/><br/>


                        <div className="mb-3"> <div className="form-label"> ------------------------------------------------------ Fill Only If Demand Draft Selected------------------------------------------------------</div></div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">  DD (Demand Draft) Number </label>
                            <input autoComplete="off" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" name="DDNumber" placeholder="" />
                        </div>

                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">DD SenderName </label>
                            <input autoComplete="off" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" name="DDSenderName" placeholder="" />
                        </div>



                        <div className="mb-3"> <label for="exampleFormControlInput1" className="form-label">DD Sender Account Number </label>
                            <input autoComplete="off" onChange={inputHandler} type="text" className="form-control" id="exampleFormControlInput1" name="DDSenderAccountNumber" placeholder="" />
                        </div>



                    <input type="number" name="amount" onSubmit={inputHandler}></input>
                    <button className="btn btn-primary btn-lg" type="submit"> Submit </button>
                </form>
            </div>
        </>
    )
}

export default CurrentCreditAmount;