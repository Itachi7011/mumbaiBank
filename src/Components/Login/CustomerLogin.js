import {useState} from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

const CustomerLogin = () => {

    const {state, dispatch} = useContext(UserContext);

    const [Data, setData] = useState({ post: [] });

    useEffect(() => {
        axios.get('/empSearchResults').then((response) => {

            const data = response.data;


            setData({ post: data });

            if (data.status === 4000) {
                console.log("Sorry wrong credentials!")
            } else {

                console.log("Login Successful.")

                //dispatch function here
                dispatch({ type : "USER", payload : false })

               
            }


            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })


    }, [])

    let name, value;
    const [user, setUser] = useState({ email: "", password: "" });


    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    return(
        <>
<div className="main-body mt-5">
            <div className="nav-btn">
                <h1>Consumer Login (Already Registered Users Only) : </h1>
                <h3> If not Registered Yet , Please visit <a href="/NewConsumerRegistration"> Signup Page </a> : </h3>

                {/* Form Starts Here */}
            <form action="/customerlogin" method="POST">
                <div className="loginCSS">
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="email" name="email" onChange={handleInput} class="form-control" id="inputPassword" placeholder="Please Enter Your Registered Email ID only" />
                    </div>

                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password" name="password" onChange={handleInput} class="form-control" id="inputPassword"/>
                    </div>

                    
                    
                    </div>
                      

  </div>
  <button  type="submit" value="signUp" className="btn btn-primary btn-lg m-1" style={{ float: "right" }}>Login</button>
  </div>
  
  </form>

            </div>
            </div>
        </>
    )
}

export default CustomerLogin;