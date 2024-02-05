import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const CustomerCurrentLoans = () => {
    const navigate = useNavigate();
    let name, value;

    const [Profile, setProfile] = useState("");
    const [user, setUser] = useState({ searchinput: "" });
    const [Data, setData] = useState({ post: [] });

    useEffect(() => {

        axios.get('/empProfile').then(async (response) => {
            const data = await response.data;


            setProfile(data);


            console.log("data fetched successfully");



        }).catch((err) => { console.log(`Error during catch of setProfile -  ${err}`) })


        axios.get('/currentAccountCreditDebitAmount').then((response) => {

            const data = response.data;


            setData({ post: data });

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })

    }, [])

    let inputHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });

    };


    const Requests = () => {

        const tempSearches = user.searchinput;
        const searches = tempSearches.toString();

        if (Profile) {
            if (user.searchinput === "") {
                return (<div className="main-bodys"><h2>Please Enter Input</h2></div>)
            } else return (<><div className="main-body">

                {
                    Data.post.filter((data) => {
                        // if( Data.post.filter((data))){
                        //     return(<>
                        //         <h2>Sorry Not found!</h2>
                        //         </>)
                        // }
                        if (user.searchinput === "") {
                            return 0;
                        }
                        
                        else if (
                            (data.email.toLocaleLowerCase()).includes(searches.toLocaleLowerCase()) ||
                             (data.name.toLocaleLowerCase()).includes(searches.toLocaleLowerCase()) 
                            
                        ) {
                          
                            return data;
                        }
                        else {
                            return 0;
                        }
                    })
                        .map(({ _id, name, email, totalAmount, phoneNo_1, phoneNo_2, accountNumber, fatherName, bankName, bankBranch, accountType, accountStatus, }) => {
                            return (<div className="card-body jobSearchCard-body" key={email} style={{ padding: "2rem 0rem", border: "1rem solid black", marginBottom: "1rem" }}>

                                <div className="card-body jobSearchCard-body">
                                    <h5 className="mb-3 card-title centercard"><span className="cardspan">Name</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{name}</span></h5>
                                </div>

                                <div className="card-body jobSearchCard-body">
                                    <h5 className="mb-3 card-title centercard"><span className="cardspan">Account Number</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{accountNumber}</span></h5>
                                </div>

                                <div className="card-body jobSearchCard-body">
                                    <h5 className="mb-3 card-title centercard"><span className="cardspan">Phone Number(1) </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{phoneNo_1}</span></h5>
                                </div>

                                <div className="card-body jobSearchCard-body">
                                    <h5 className="mb-3 card-title centercard"><span className="cardspan">Phone Number (2) </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{phoneNo_2}</span></h5>
                                </div>

                                <div className="card-body jobSearchCard-body">
                                    <h5 className="mb-3 card-title centercard"><span className="cardspan">Email</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{email}</span></h5>
                                </div>

                                <div className="card-body jobSearchCard-body">
                                    <h5 className="mb-3 card-title centercard"><span className="cardspan">Current Amount</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}><span>&#8377;</span> {totalAmount}</span></h5>
                                </div>

                                <div className="mb-5" style={{
                                    textAlign: "center", display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>

                                    <button className="btn btn-primary btn-lg" onClick={() => {
                                        navigate("/ViewCurrentAccountOngoingLoans",
                                            {
                                                state: {
                                                    id: _id,
                                                    name: name,
                                                    email: email,
                                                    phoneNo_1: phoneNo_1,
                                                    phoneNo_2: phoneNo_2,
                                                    fatherName: fatherName,
                                                    bankName: bankName,
                                                    bankBranch: bankBranch,
                                                    accountNumber: accountNumber,
                                                    accountStatus: accountStatus,
                                                    accountType: accountType,
                                                    totalAmount: totalAmount

                                                }
                                            })
                                    }} style={{ float: "left" }}>

                                        View All Loans </button>

                                </div>


                                <div className="mb-5" style={{
                                    textAlign: "center", display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>

                                    <button type="submit" className="btn btn-primary btn-lg" onClick={() => {
                                        navigate("/CurrentAccountApplyNewLoanForm",
                                            {
                                                state: {
                                                    id: _id,
                                                    name: name,
                                                    email: email,
                                                    phoneNo_1: phoneNo_1,
                                                    phoneNo_2: phoneNo_2,
                                                    fatherName: fatherName,
                                                    bankName: bankName,
                                                    bankBranch: bankBranch,
                                                    accountNumber: accountNumber,
                                                    accountStatus: accountStatus,
                                                    accountType: accountType,
                                                    totalAmount: totalAmount
                                                }
                                            })
                                    }} style={{ float: "left" }}  >

                                        Apply New Loan </button>

                                </div>



                            </div>)
                        })

                }
            </div>

            </>)

        } else {
            return (<>
                <h2>Sorry Only Bank Employees can Visit This Page</h2>
                <h2>If You are Bank Employee Then Please Login</h2>

            </>)
        }

    }



    return (<><div className="m-5 searching main-body ">

<div className="mb-5" style={{
                                    textAlign: "center", display: "flex",
                                    float: "left",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    
                                }}>

                                    <button className="btn btn-primary btn-lg" onClick={() => {
                                        navigate("/CustomerSavingLoans")
                                    }} style={{ float: "left" }}>

                                      Click  For Saving Account Loans </button>

                                </div>
        <h2 className="searchtext1 main-body main-header" >Current Account Loans List : </h2>

        <h2 className="searchtext1 main-body" >Search Account by Account Holder Name / Registered Email : </h2>
        <div className="main-body">
            <input type="text" className="searchinput main-body" name="searchinput" autoComplete="off" onChange={inputHandler} placeholder="Please type for search Jobs" />
        </div>

        <br />

        <Requests />
    </div>
    </>)
}


export default CustomerCurrentLoans;