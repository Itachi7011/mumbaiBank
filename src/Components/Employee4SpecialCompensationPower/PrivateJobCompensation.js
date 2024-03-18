import { useEffect, useState } from "react";
import axios from "axios";

const PrivateJobCompensation = () => {
    let name,value;
  const [Profile, setProfile] = useState("");

  useEffect(() => {
    axios.get("/empProfile").then(async (response) => {
        const data = await response.data;

        setProfile(data);

        console.log("data fetched successfully");
      })
      .catch((err) => {
        console.log(`Error during catch of setProfile -  ${err}`);
      });



  }, []);

  const [Data, setData] = useState({
    byEmployeeName:Profile.byEmployeeName,
    byEmployeeScale:Profile.byEmployeeScale,
    transactionDate:Date.now(),
    amount:""
  });
  

  const handleInput = (e) => {
    e.preventDefault();
     name= e.target.name;
     value= e.target.value;
    setData({
        ...Data, [name]: value
    })
  }

  const Requests = () => {
    if (Profile.scale === 4 || Profile.scale === 5 ) {
      return (
        <>
          <div>
            <div className="main-body">
            <h1 style={{backgroundColor:"green", color:"white", margin:"1rem 5rem", padding:"1rem"}}>
                Provide Compensation to All of The Private Job Employees' Accounts
            </h1>
            <br/>

            <h2 style={{backgroundColor:"#484547", color:"white", margin:"1rem 10rem", padding:"1rem"}}>Remember This is Irreversible Process, So be extra carefull !</h2>
            <br/>
            
            </div>
          </div>
        </>
      );
    }else{
        return( <> 
        <h1>Sorry You Don't Have Permission To Access This Page!</h1>

        </>      
)
    }
  };

  return <>
  <Requests/> 
  <br/>
            <br/>
            <div className="main-body">
                <form action="/privateJobCompensation" method="POST">
                <input type='hidden' name='byEmployeeName' ></input>
                <input type='hidden' name='byEmployeeScale'  ></input>
                <input type='hidden' name='transactionDate'  ></input>
                Compensation Amount : <input type='number' name='amount' onChange={handleInput}  ></input>
                <button type="submit">Submit</button>
            </form>
            </div>

            </>;
};

export default PrivateJobCompensation;
