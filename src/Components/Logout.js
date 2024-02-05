import { useEffect } from "react";
import {useNavigate} from "react-router";
import { useContext } from "react";
import { UserContext } from "../App";


const Logout = () => {

    const {state, dispatch} = useContext(UserContext);


    const navigate = useNavigate();
    
    
       const LogoutData = () => {
            try{
                fetch("/logout",
                {method: "GET",
            headers:{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        }).then((res) => {

            dispatch({ type : "USER", payload : true })


            console.log("Logout Successfull!")
            navigate("/LoginOptions");

            if(res != 200){
                throw new Error(res.Error);
            }
        })

            }catch(err){
                console.log(`error during logout fetching -${err}`)
            }
        }

        useEffect(
            ()=>{
                LogoutData();
            } , []
               
        )
    

    return(
        <>
        <div>Logut Page</div>
        </>
    )
}

export default Logout;