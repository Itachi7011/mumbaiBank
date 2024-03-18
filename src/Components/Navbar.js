import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const NavbarData = async () => {
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

      const res1 = await fetch("/customerProfile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data1 = await res1.json();

      setUser(data1);

      if (!res1 === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }
    } catch (err) {
      console.log(`Error during catch of Navbar -  ${err}`);
    }
  };

  useEffect(() => {
    NavbarData();
  }, []);

  const RenderMenu = () => {
    if (!state) {
      if (user.scale == 1) {
        return (
          <>
            <NavLink className="nav-link" to="/Scale4EmpProfile">
              My-Profile
            </NavLink>
            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
                Credit/Debit Amount
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingCreditDebitAmount">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentCreditDebitAmount">Current Account</NavLink>
                
              </div>
            </div>


           

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              New-Account-Requests
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/ConfirmNewSavingAccountRequest">Saving Account</NavLink>
                <NavLink to="/ConfirmNewCurrentAccountRequest">Current Account</NavLink>
                
              </div>
            </div>

           
             {/* Dropdown Menu  */}
            
             <div class="dropdown">
              <button class="dropbtn">
              Loans
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingLoans">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentLoans">Current Account</NavLink>
                
              </div>
            </div>

            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              F-D s
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountFixedDeposit">Saving Account</NavLink>
                <NavLink to="/CurrentAccountFixedDeposit">Current Account</NavLink>
                
              </div>
            </div>

            

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              Transactions
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountTransactions">Saving Account</NavLink>
                <NavLink to="/CurrentAccountTransactions">Current Account</NavLink>
                
              </div>
            </div>

            <NavLink className="nav-link" to="/InterestCalculator">
            Interest Calculator
            </NavLink>

            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (user.scale === 2) {
        return (
          <>
            <NavLink className="nav-link" to="/Scale4EmpProfile">
              My-Profile
            </NavLink>
            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
                Credit/Debit Amount
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingCreditDebitAmount">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentCreditDebitAmount">Current Account</NavLink>
                
              </div>
            </div>


           

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              New-Account-Requests
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/ConfirmNewSavingAccountRequest">Saving Account</NavLink>
                <NavLink to="/ConfirmNewCurrentAccountRequest">Current Account</NavLink>
                
              </div>
            </div>

           
             {/* Dropdown Menu  */}
            
             <div class="dropdown">
              <button class="dropbtn">
              Loans
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingLoans">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentLoans">Current Account</NavLink>
                
              </div>
            </div>

            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              F-D s
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountFixedDeposit">Saving Account</NavLink>
                <NavLink to="/CurrentAccountFixedDeposit">Current Account</NavLink>
                
              </div>
            </div>

            

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              Transactions
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountTransactions">Saving Account</NavLink>
                <NavLink to="/CurrentAccountTransactions">Current Account</NavLink>
                
              </div>
            </div>


            <NavLink className="nav-link" to="/InterestCalculator">
            Interest Calculator
            </NavLink>

 

            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (user.scale === 3) {
        return (
          <>
            <NavLink className="nav-link" to="/Scale4EmpProfile">
              My-Profile
            </NavLink>
            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
                Credit/Debit Amount
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingCreditDebitAmount">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentCreditDebitAmount">Current Account</NavLink>
                
              </div>
            </div>


           

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              New-Account-Requests
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/ConfirmNewSavingAccountRequest">Saving Account</NavLink>
                <NavLink to="/ConfirmNewCurrentAccountRequest">Current Account</NavLink>
                
              </div>
            </div>

           
             {/* Dropdown Menu  */}
            
             <div class="dropdown">
              <button class="dropbtn">
              Loans
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingLoans">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentLoans">Current Account</NavLink>
                
              </div>
            </div>

            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              F-D s
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountFixedDeposit">Saving Account</NavLink>
                <NavLink to="/CurrentAccountFixedDeposit">Current Account</NavLink>
                
              </div>
            </div>

            

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              Transactions
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountTransactions">Saving Account</NavLink>
                <NavLink to="/CurrentAccountTransactions">Current Account</NavLink>
                
              </div>
            </div>



            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (user.scale === 4) {
        return (
          <>
            <NavLink className="nav-link" to="/Scale4EmpProfile">
              My-Profile
            </NavLink>
            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
                Credit/Debit Amount
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingCreditDebitAmount">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentCreditDebitAmount">Current Account</NavLink>
                
              </div>
            </div>


           

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              New-Account-Requests
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/ConfirmNewSavingAccountRequest">Saving Account</NavLink>
                <NavLink to="/ConfirmNewCurrentAccountRequest">Current Account</NavLink>
                
              </div>
            </div>

           
             {/* Dropdown Menu  */}
            
             <div class="dropdown">
              <button class="dropbtn">
              Loans
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingLoans">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentLoans">Current Account</NavLink>
                
              </div>
            </div>

            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              F-D s
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountFixedDeposit">Saving Account</NavLink>
                <NavLink to="/CurrentAccountFixedDeposit">Current Account</NavLink>
                
              </div>
            </div>

            

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              Transactions
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountTransactions">Saving Account</NavLink>
                <NavLink to="/CurrentAccountTransactions">Current Account</NavLink>
                
              </div>
            </div>


            <NavLink className="nav-link" to="/InterestCalculator">
            Interest Calculator
            </NavLink>

            <div class="dropdown">
              <button class="dropbtn">
              Compensations
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/FarmersCompensation">Farmers Compensations</NavLink>
                <NavLink to="/PrivateJobCompensation">Private Jobs Compensations</NavLink>
                <NavLink to="/DefenceForcesCompensation">Defence Forces (Active) Compensations</NavLink>
                <NavLink to="/PensionHoldersCompensation">Pension Holders Compensations</NavLink>
                <NavLink to="/GovtJobCompensation">Govt. Jobs Compensations</NavLink>

              </div>
            </div>

            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (user.scale === 5) {
        return (
          <>
            <NavLink className="nav-link" to="/Scale4EmpProfile">
              My-Profile
            </NavLink>
            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
                Credit/Debit Amount
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingCreditDebitAmount">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentCreditDebitAmount">Current Account</NavLink>
                
              </div>
            </div>


           

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              New-Account-Requests
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/ConfirmNewSavingAccountRequest">Saving Account</NavLink>
                <NavLink to="/ConfirmNewCurrentAccountRequest">Current Account</NavLink>
                
              </div>
            </div>

           
             {/* Dropdown Menu  */}
            
             <div class="dropdown">
              <button class="dropbtn">
              Loans
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/CustomerSavingLoans">Saving Account</NavLink>
                <NavLink to="/CustomerCurrentLoans">Current Account</NavLink>
                
              </div>
            </div>

            
            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              F-D s
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountFixedDeposit">Saving Account</NavLink>
                <NavLink to="/CurrentAccountFixedDeposit">Current Account</NavLink>
                
              </div>
            </div>

            

            {/* Dropdown Menu  */}
            
            <div class="dropdown">
              <button class="dropbtn">
              Transactions
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/SavingAccountTransactions">Saving Account</NavLink>
                <NavLink to="/CurrentAccountTransactions">Current Account</NavLink>
                
              </div>
            </div>



            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (user.accountType === "saving") {
        return (
          <>
            <NavLink className="nav-link" to="/CustomerSavingAccountsProfile">
              My-Profile
            </NavLink>

            <NavLink className="nav-link" to="/MyLoansSavingAccount">
              My-Loans
            </NavLink>

            <NavLink className="nav-link" to="/MyFixedDepositSavingAccount">
              My-Fixed Deposits
            </NavLink>

            <NavLink className="nav-link" to="/MyTransactionsSavingAccount">
              My-Transactions
            </NavLink>


            <NavLink className="nav-link" to="/InterestCalculator">
            Interest Calculator
            </NavLink>

 

            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (user.accountType === "current") {
        return (
          <>
            <NavLink className="nav-link" to="/CustomerCurrentAccountsProfile">
              My-Profile
            </NavLink>

            <NavLink className="nav-link" to="/MyLoansSavingAccount">
              My-Loans
            </NavLink>

            <NavLink className="nav-link" to="/MyFixedDepositSavingAccount">
              My-Fixed Deposits
            </NavLink>

            <NavLink className="nav-link" to="/MyTransactionsSavingAccount">
              My-Transactions
            </NavLink>


            <NavLink className="nav-link" to="/InterestCalculator">
            Interest Calculator
            </NavLink>

 

            <NavLink className="nav-link" to="/Logout">
              Logout
            </NavLink>
          </>
        );
      } else if (!state) {
        return (
          <>
            <NavLink className="nav-link" to="/LoginOptions">
              Login
            </NavLink>

            <NavLink className="nav-link" to="/NewRegistration">
              SignUp
            </NavLink>


            <NavLink className="nav-link" to="/InterestCalculator">
            Interest Calculator
            </NavLink>

 


          </>
        );
      }
    }
  };

  return (
    <>
      <h1 className="mainLogo">Mumbai National Bank Of India</h1>
      <div className="navbar ">
        <div className="container-fluid">
          <NavLink className="" aria-current="page" to="/">
            Home
          </NavLink>

          <RenderMenu />
        </div>
      </div>
    </>
  );
};
export default Navbar;
