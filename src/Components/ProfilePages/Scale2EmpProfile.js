import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BoyIcon from "@mui/icons-material/Boy";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const Scale2EmpProfile = () => {
  const [user, setUser] = useState("");
  const Navigate = useNavigate();

  const Profile = async () => {
    try {
      const res = await fetch("/empProfile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setUser(data);

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }
    } catch (err) {
      console.log(`Error during catch of Scale1EmpProfile -  ${err}`);
    }
  };

  useEffect(() => {
    Profile();
  }, []);

  return (
    <>
      <div
        className="main-body profile-main-div"
        // style={{ marginBottom: "10rem" }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="gridProfile">
            <div className="grid1">
              <p className="" style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    border: "3px solid red",
                    borderRadius: "1.5rem",
                    padding: "1rem",
                    color: "white",
                    background: "blue",
                    fontSize: "xxx-large",
                  }}
                >
                  {user.name}
                </span>
              </p>

              <p className="profile-div-both">
                <span>
                  {" "}
                  <PersonPinIcon
                    style={{ height: "3rem", width: "3rem" }}
                  ></PersonPinIcon>{" "}
                  &nbsp; Rank Scale - {user.scale}
                </span>
              </p>
              <div className="profile-div-both ">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <MilitaryTechIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></MilitaryTechIcon>{" "}
                    &nbsp; Designation (POST) -
                  </span>
                </p>
                <p className="py-2 text-muted">
                  <span className="profile-content-right">
                    {user.postDuringJoining}
                  </span>
                </p>
                <br />
              </div>
            </div>
            {/* Now Grid 2 */}
            <div className="grid2">
              <div className="btn-primaryProfile">
                <button
                  style={{
                    border: "4px solid black",
                    textDecoration: "none",
                    textAlign: "none",
                    backgroundColor: "red",
                    color: "white",
                    padding: "1rem",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                  onClick={function () {
                    Navigate("/EditEmpProfiles", {
                      state: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        scale: user.scale
                      },
                    });
                  }}
                >
                  {" "}
                  Edit Profile{" "}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{
                    border: "4px solid black",
                    textDecoration: "none",
                    textAlign: "none",
                    backgroundColor: "red",
                    color: "white",
                    padding: "1rem",
                    fontWeight: "bold",
                    fontSize: "larger",
                    // Cursor:"context-menu"
                  }}
                  onClick={function () {
                    Navigate("/ChangeEmpPassword", {
                      state: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        scale: user.scale
                      },
                    });
                  }}
                >
                  {" "}
                  Change Password{" "}
                </button>
              </div>

              <div className="profile-div-both3" style={{ marginTop: "1rem" }}>
                <p className="">
                  <span className="profile-content-left">
                    <BoyIcon
                      style={{ height: "3rem", width: "3rem" }}
                    ></BoyIcon>{" "}
                    Age -{" "}
                  </span>{" "}
                </p>
                <p className="">
                  <span className="profile-content-right">{user.age}</span>
                </p>
                <br />
              </div>
              <div className="profile-div-both3">
                <p className="">
                  <span className="profile-content-left">
                    <SchoolIcon
                      style={{
                        height: "3rem",
                        width: "3rem",
                        justifyContent: "center",
                      }}
                    ></SchoolIcon>{" "}
                    &nbsp; Qualifications -
                  </span>{" "}
                </p>
                <p className="">
                  <span className="profile-content-right">
                    {user.qualification}
                  </span>
                </p>
                <br />
              </div>
            </div>
            <div className="grid3">
              <div className="profile-div-both2">
                <p>
                  <span className="profile-content-left">
                    <AccountBalanceIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></AccountBalanceIcon>{" "}
                    &nbsp; Bank -
                  </span>
                </p>
                <p className="">
                  <span className="profile-content-right">{user.bankName}</span>
                </p>
                <br />
              </div>

              <div className=" profile-div-both2">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <AccountBalanceIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></AccountBalanceIcon>{" "}
                    &nbsp; Branch -
                  </span>
                </p>
                <p className="py-2 text-muted">
                  <span className="profile-content-right">
                    {user.bankBranch}
                  </span>
                </p>
                <br />
              </div>
              <div className="profile-div-both2">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <AttachEmailIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></AttachEmailIcon>{" "}
                    &nbsp; Job Apt. Letter No. -
                  </span>
                </p>
                <p className="">
                  <span className="profile-content-right">
                    {user.JobAppointmentLetterNo}
                  </span>
                </p>
                <br />
              </div>
              <div className="profile-div-both2">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <DateRangeIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></DateRangeIcon>{" "}
                    &nbsp; Date Of Joining -
                  </span>
                </p>
                <p className="">
                  <span className="profile-content-right">
                    {user.dateOfJoining}
                  </span>
                </p>
                <br />
              </div>
              <div className="profile-div-both2">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <CreditCardIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></CreditCardIcon>{" "}
                    &nbsp; Aadhar No. -
                  </span>
                </p>
                <p className="">
                  <span className="profile-content-right">
                    {user.aadharCardNumber}
                  </span>
                </p>
                <br />
              </div>

              <div className="profile-div-both2">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <CreditCardIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></CreditCardIcon>{" "}
                    &nbsp; PAN Number -
                  </span>
                </p>
                <p className="">
                  <span className="profile-content-right">
                    {user.panNumber}
                  </span>
                </p>
                <br />
              </div>
              <div className="profile-div-both2">
                <p>
                  <span className="fas fa-globe me-2"></span>
                  <span className="profile-content-left">
                    <CreditCardIcon
                      style={{ height: "2rem", width: "2rem" }}
                    ></CreditCardIcon>{" "}
                    &nbsp; Election ID No. -
                  </span>
                </p>
                <p className="">
                  <span className="profile-content-right">
                    {user.electionVoterIdNo}
                  </span>
                </p>
                <br />
              </div>
            </div>
            <div className="grid4">
              <div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <EmailIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></EmailIcon>{" "}
                      &nbsp; Email -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">{user.email}</span>
                  </p>
                  <br />
                </div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <CallIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></CallIcon>{" "}
                      &nbsp; Phone No. (1) -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">
                      {user.phoneNo_1}
                    </span>
                  </p>
                  <br />
                </div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <CallIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></CallIcon>{" "}
                      &nbsp; Phone No. (2) -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">
                      {user.phoneNo_2}
                    </span>
                  </p>
                  <br />
                </div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <FlagIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></FlagIcon>{" "}
                      &nbsp; Country -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">
                      {user.country}
                    </span>
                  </p>
                  <br />
                </div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <HolidayVillageIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></HolidayVillageIcon>{" "}
                      &nbsp; State -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">{user.state}</span>
                  </p>
                  <br />
                </div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <HomeIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></HomeIcon>{" "}
                      &nbsp; Address -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">
                      {user.fullAddress}
                    </span>
                  </p>
                  <br />
                </div>
                <div className="profile-div-both3  justify-content-between border-bottom">
                  <p className="">
                    <span className="profile-content-left">
                      <WorkIcon
                        style={{ height: "2rem", width: "2rem" }}
                      ></WorkIcon>{" "}
                      &nbsp; Post During Joining -
                    </span>{" "}
                  </p>
                  <p className="">
                    <span className="profile-content-right">
                      {user.postDuringJoining}
                    </span>
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="grid5"></div>
            <div className="grid6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scale2EmpProfile;
