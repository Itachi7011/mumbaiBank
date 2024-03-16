import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

const EmployeesLogin = () => {
  const { state, dispatch } = useContext(UserContext);

  const [Data, setData] = useState({ post: [] });

  useEffect(() => {
    axios
      .get("/empSearchResults")
      .then((response) => {
        const data = response.data;

        setData({ post: data });

        if (data.status === 4000) {
          console.log("Sorry wrong credentials!");
        } else {
          console.log("Login Successful.");

          //dispatch function here
          dispatch({ type: "USER", payload: false });
        }

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let name, value;
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="main-body">
        <div className="nav-btn">
          <h1>Employees Login (Already Registered Users Only) : </h1>
          <h3>
            {" "}
            If not Registered Yet , Please visit{" "}
            <a href="/NewEmpRegistration"> Signup Page </a> :{" "}
          </h3>

          {/* Form Starts Here */}
          <form className="loginForm" action="/emplogin" method="POST">
            <div className="loginCSS">
              <div class="mb-3 row">
                <div class="col-sm-10">
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    class="form-control loginFormInput"
                    autoComplete
                    placeholder="Email"
                  />
                </div>

                <div class="mb-3 row">
                  <div class="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      onChange={handleInput}
                      class="form-control loginFormInput"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                value="signUp"
                className="btn btn-primary btn-lg m-1"
                style={{ float: "right" }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeesLogin;
