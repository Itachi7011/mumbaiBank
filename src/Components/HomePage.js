import fraudImage2 from "./Images/fraud2.png";

const HomePage = () => {


  return (
    <>
      <div className="main-div" style={{ marginTop: "2rem" }}>
        <div className="gridHomePage" style={{ width: "80%", margin: "auto" }}>
          <div
            className="gridHomePage1"
            style={{ padding: "1rem", paddingBottom: "-2rem", margin: "1rem" }}
          >
            <h1>
              Always Choose <br/> Mumbai Bank Of India Because Here : <br/> " Always You First "
            </h1>
          </div>
          <div
            className="gridHomePage3"
            style={{ padding: "2rem", margin: "2rem" }}
          >
            <img src={fraudImage2} alt="" style={{width:"100%"}} />
        </div>

          <div
            className="gridHomePage5"
            style={{ padding: "2rem", margin: "2rem" }}
          >
            <p className="homepagePara">
              <h2>Open A New Savings Account<br /> At Good Interest Rate: </h2>
              <button className="homePagebtn">
                <a
                  href="/RequestNewSavingAccount"
                  style={{ textDecoration: "none" }}
                >
                  New Savings Account
                </a>
              </button>
            </p>
          </div>
          <div
            className="gridHomePage6"
            style={{ padding: "2rem", margin: "2rem" }}
          >
            <p className="homepagePara">
              <h2>Open A New Current Account <br/> (For Companies, Enterprises, Firms, Trusts,
              Societies, etc)<br /> At Good Interest Rate:</h2> <br />
              <button className="homePagebtn">
                <a
                  href="/RequestNewCurrentAccount"
                  style={{ textDecoration: "none" }}
                >
                  New Current Account
                </a>
              </button>
            </p>
          </div>
          <div
            className="gridHomePage7"
            style={{ padding: "2rem", margin: "2rem" }}
          >
            <p className="homepagePara">
              <h2>Searching For Loans At Less Interest Rate: </h2><br />
              <button className="homePagebtn">
                <a href="/LoanOptions" style={{ textDecoration: "none" }}>
                  Loans
                </a>
              </button>
            </p>
          </div>
          <div
            className="gridHomePage8"
            style={{ padding: "2rem", margin: "2rem" }}
          >
            <p className="homepagePara">
              <h2>Open A New Fixed Deposit (FD) <br/> For Savings / Current Accounts<br /> At Good Interest Rate:</h2> <br />
              <button className="homePagebtn">
                <a
                  href="/SavingAccountNewFixedDepositForm"
                  style={{ textDecoration: "none" }}
                >
                  New FD (Fixed Deposit) 
                </a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
