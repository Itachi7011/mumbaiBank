
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";


const ConfirmNewCurrentAccountRequest = () => {
    const [user, setUser] = useState({ post: [] });
    const [profile, setProfile] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('/empProfile').then(async (response) => {
            const data = await response.data;


            setProfile(data);
            console.log(data.name);

            console.log("data fetched successfully");



        }).catch((err) => { console.log(`Error during catch of setProfile -  ${err}`) })


        axios.get('/newCurrentAccountRequest').then((response) => {

            const data = response.data;


            setUser({ post: data });

            console.log("data fetch successfully");
        }).catch((err) => { console.log(`Error during catch of confirmNewAccountRequest -  ${err}`) })
    }, [])

    const Requests = () => {
        if(profile.scale == "4" || profile.scale == "5"){
            return(user.post.map(({ _id, name, email }) => {
                return (<div className="card-body jobSearchCard-body" key={email}>
    
                    <div className="card-body jobSearchCard-body">
                        <h5 className="mb-3 card-title centercard"><span className="cardspan">Name</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{name}</span></h5>
                    </div>
    
                    <div className="card-body jobSearchCard-body">
                        <h5 className="mb-3 card-title centercard"><span className="cardspan">Email</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{email}</span></h5>
                    </div>
    
                    <div className="mb-5" style={{
                        textAlign: "center", display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <form action="/confirmNewCurrentAccountRequest" method="POST">
                            <input type="hidden" value={_id} name="id" ></input>
                            <input type="hidden" value={name} name="name" ></input>
                            <input type="hidden" value={email} name="email" ></input>

                            <button type="submit" className="btn btn-primary btn-lg" style={{ float: "left" }}>
    
                                Confirm Request </button>
                        </form>
                    </div>
    
    
                    <div className="mb-5" style={{
                        textAlign: "center", display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <form action="/rejectNewCurrentAccountRequest" method="POST">
                            <input type="hidden" value={_id} name="id" ></input>
                            <input type="hidden" value={email} name="email" ></input>

                            <button type="submit" className="btn btn-primary btn-lg" style={{ float: "left" }}>
    
                                Reject Request </button>
                        </form>
                    </div>
    
    
    
                </div>)
            }
            ))
        }else{
            return(<>
            <h2>Sorry Only Bank Employees can Visit This Page</h2>
            <h2>If You are Bank Employee Then Please Login</h2>
            
            </>)
        }
    }




    return (
        <div className="main-body">
            <h2>New Saving Accounts Opening pending requests :</h2>
            <Requests/>

        </div>
    )
}
export default ConfirmNewCurrentAccountRequest;

