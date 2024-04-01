import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import {reducer, initialState} from "./reducers/UseReducer"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Components/HomePage"
import NewRegistration from "./Components/NewRegistration";
import NewConsumerRegistration from "./Components/NewConsumerRegistration/NewConsumerRegistration";
import NewEmpRegistration from "./Components/NewEmpRegistrations/NewEmpRegistration";
import Scale1Registration from "./Components/NewEmpRegistrations/Scale1Registration";
import Scale2Registration from "./Components/NewEmpRegistrations/Scale2Registration";
import Scale3Registration from "./Components/NewEmpRegistrations/Scale3Registration";
import Scale4Registration from "./Components/NewEmpRegistrations/Scale4Registration";
import TechnincalStaffRegistration from "./Components/NewEmpRegistrations/TechnicalStaffRegistraiton.js";

import RequestNewCurrentAccount from "./Components/NewConsumerRegistration/NewCurrentRegistration/RequestNewCurrentAccount";
import RequestNewSavingAccount from "./Components/NewConsumerRegistration/NewSavingAccount/RequestNewSavingAccount";

import ConfirmNewAccountRequest from "./Components/ConfirmNewAccountRequests/ConfirmNewAccountRequest";

import ConfirmNewSavingAccountRequest from "./Components/ConfirmNewAccountRequests/ConfirmNewSavingAccountRequest";
import ConfirmNewCurrentAccountRequest from "./Components/ConfirmNewAccountRequests/ConfirmNewCurrentAccountRequest";


import Temp1 from "./Components/TempFiles/Temp1";
import LoginOptions from "./Components/Login/LoginOptions";
import EmployeeLogin from "./Components/Login/EmployeeLogin";
import CustomerLogin from "./Components/Login/CustomerLogin";
import GradeSystem from "./Components/GradeSystem";

import Scale1EmpProfile from "./Components/ProfilePages/Scale1EmpProfile";
import Scale2EmpProfile from "./Components/ProfilePages/Scale2EmpProfile";
import Scale3EmpProfile from "./Components/ProfilePages/Scale3EmpProfile";
import Scale4EmpProfile from "./Components/ProfilePages/Scale4EmpProfile";
import Scale5EmpProfile from "./Components/ProfilePages/Scale5EmpProfile";
import TechStaffProfile from "./Components/TechnicalStaff/TechStaffProfile";


import CustomerSavingAccountsProfile from "./Components/ProfilePages/CustomerSavingAccountsProfile";
import CustomerCurrentAccountsProfile from "./Components/ProfilePages/CustomerCurrentAccountsProfile";

import Logout from "./Components/Logout";
import ErrorPage from "./Components/ErrorPage";

import EditEmpProfiles from "./Components/EditProfile/EditEmpProfiles";

import OptionsCreditDebitAmount from "./Components/CustomerCreditDebitAmount/OptionsCreditDebitAmount";
import CustomerCreditDebitAmount from "./Components/CustomerCreditDebitAmount/CustomerSavingCreditDebitAmount";
import CustomerCurrentCreditDebitAmount from "./Components/CustomerCreditDebitAmount/CustomerCurrentCreditDebitAmount";
import SavingCreditAmount from "./Components/CustomerCreditDebitAmount/SavingCreditAmount";
import SavingDebitAmount from "./Components/CustomerCreditDebitAmount/SavingDebitAmount";
import CurrentCreditAmount from "./Components/CustomerCreditDebitAmount/CurrentCreditAmount";
import CurrentDebitAmount from "./Components/CustomerCreditDebitAmount/CurrentDebitAmount";

import LoanOptions from "./Components/Loans/LoanOptions";
import CustomerCurrentLoans from "./Components/Loans/CustomerCurrentLoans";
import CustomerSavingLoans from "./Components/Loans/CustomerSavingLoans";
import SavingAccountApplyNewLoanForm from "./Components/Loans/SavingAccountApplyNewLoanForm";
import CurrentAccountApplyNewLoanForm from "./Components/Loans/CurrentAccountApplyNewLoanForm";
import ViewSavingAccountOngoingLoans from "./Components/Loans/ViewSavingAccountOngoingLoans";
import ViewCurrentAccountOngoingLoans from "./Components/Loans/ViewCurrentAccountOngoingLoans";

import FixedDepositOptions from "./Components/FixedDeposit/FixedDepositOptions";
import SavingAccountFixedDeposit from "./Components/FixedDeposit/SavingAccountFixedDeposit";
import CurrentAccountFixedDeposit from "./Components/FixedDeposit/CurrentAccountFixedDeposit";
import SavingAccountNewFixedDepositForm from "./Components/FixedDeposit/SavingAccountNewFixedDepositForm";
import CurrentAccountNewFixedDepositForm from "./Components/FixedDeposit/CurrentAccountNewFixedDepositForm";
import ViewSavingAccountOngoingFixedDeposit from "./Components/FixedDeposit/ViewSavingAccountOngoingFixedDeposit";
import ViewCurrentAccountOngoingFixedDeposit from "./Components/FixedDeposit/ViewCurrentAccountOngoingFixedDeposit";

import TransactionOptions from "./Components/Transactions/TransactionOptions";
import SavingAccountTransactions from "./Components/Transactions/SavingAccountTransactions";
import CurrentAccountTransactions from "./Components/Transactions/CurrentAccountTransactions";
import ShowSavingAccountTransactions from "./Components/Transactions/ShowSavingAccountTransactions";
import ShowCurrentAccountTransactions from "./Components/Transactions/ShowCurrentAccountTransactions";

import MyLoansSavingAccount from "./Components/CustomerPersonalDetails/SavingAccount/MyLoansSavingAccount";
import MyFixedDepositSavingAccount from "./Components/CustomerPersonalDetails/SavingAccount/MyFixedDepositSavingAccount";
import MyTransactionsSavingAccount from "./Components/CustomerPersonalDetails/SavingAccount/MyTransactionsSavingAccount";

import MyLoansCurrentAccount from "./Components/CustomerPersonalDetails/CurrentAccount/MyLoansCurrentAccount";
import MyFixedDepositCurrentAccount from "./Components/CustomerPersonalDetails/CurrentAccount/MyFixedDepositCurrentAccount";
import MyTransactionsCurrentAccount from "./Components/CustomerPersonalDetails/CurrentAccount/MyTransactionsCurrentAccount.js";
import InterestCalculator from "./Components/InterestCalculator/InterestCalculator.js";

import FarmersCompensation from "./Components/Employee4SpecialCompensationPower/FarmersCompensation.js";
import DefenceForcesCompensation from "./Components/Employee4SpecialCompensationPower/DefenceForcesCompensation.js";
import GovtJobCompensation from "./Components/Employee4SpecialCompensationPower/GovtJobCompensation.js";
import PensionHoldersCompensation from "./Components/Employee4SpecialCompensationPower/PensionHoldersCompensation.js";
import PrivateJobCompensation from "./Components/Employee4SpecialCompensationPower/PrivateJobCompensation.js";



import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export const UserContext = createContext();


function App() {

  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <UserContext.Provider value = {{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} > </Route>
          <Route path="/NewRegistration" element={<NewRegistration />} > </Route>
          <Route path="/NewConsumerRegistration" element={<NewConsumerRegistration />} > </Route>
          <Route path="/NewEmpRegistration" element={<NewEmpRegistration />} > </Route>
          <Route path="/Scale1Registration" element={<Scale1Registration />} > </Route>
          <Route path="/Scale2Registration" element={<Scale2Registration />} > </Route>
          <Route path="/Scale3Registration" element={<Scale3Registration />} > </Route>
          <Route path="/Scale4Registration" element={<Scale4Registration />} > </Route>
          <Route path="/TechnincalStaffRegistration" element={<TechnincalStaffRegistration />} > </Route>


          <Route path="/RequestNewSavingAccount" element={<RequestNewSavingAccount />} > </Route>
          <Route path="/RequestNewCurrentAccount" element={<RequestNewCurrentAccount />} > </Route>

          <Route path="/ConfirmNewAccountRequest" element={<ConfirmNewAccountRequest />} > </Route>

          <Route path="/ConfirmNewSavingAccountRequest" element={<ConfirmNewSavingAccountRequest />} > </Route>
          <Route path="/ConfirmNewCurrentAccountRequest" element={<ConfirmNewCurrentAccountRequest />} > </Route>


          <Route path="/Temp1" element={<Temp1 />} > </Route>
          <Route path="/LoginOptions" element={<LoginOptions />} > </Route>
          <Route path="/EmployeeLogin" element={<EmployeeLogin />} > </Route>
          <Route path="/CustomerLogin" element={<CustomerLogin />} > </Route>
          <Route path="/Logout" element={<Logout />} > </Route>
          <Route path="/GradeSystem" element={<GradeSystem />} > </Route>
          <Route path="/InterestCalculator" element={<InterestCalculator />} > </Route>


          <Route path="/Scale1EmpProfile" element={<Scale1EmpProfile />} > </Route>
          <Route path="/Scale2EmpProfile" element={<Scale2EmpProfile />} > </Route>
          <Route path="/Scale3EmpProfile" element={<Scale3EmpProfile />} > </Route>
          <Route path="/Scale4EmpProfile" element={<Scale4EmpProfile />} > </Route>
          <Route path="/Scale5EmpProfile" element={<Scale5EmpProfile />} > </Route>
          <Route path="/TechStaffProfile" element={<TechStaffProfile />} > </Route>

          <Route path="/CustomerSavingAccountsProfile" element={<CustomerSavingAccountsProfile />} > </Route>
          <Route path="/CustomerCurrentAccountsProfile" element={<CustomerCurrentAccountsProfile />} > </Route>

          <Route path="/EditEmpProfiles" element={<EditEmpProfiles />} > </Route>

          <Route path="/OptionsCreditDebitAmount" element={<OptionsCreditDebitAmount />} > </Route>
          <Route path="/CustomerSavingCreditDebitAmount" element={<CustomerCreditDebitAmount />} > </Route>
          <Route path="/CustomerCurrentCreditDebitAmount" element={<CustomerCurrentCreditDebitAmount />} > </Route>
          <Route path="/SavingCreditAmount" element={<SavingCreditAmount />} > </Route>
          <Route path="/SavingDebitAmount" element={<SavingDebitAmount />} > </Route>
          <Route path="/CurrentCreditAmount" element={<CurrentCreditAmount />} > </Route>
          <Route path="/CurrentDebitAmount" element={<CurrentDebitAmount />} > </Route>

          <Route path="/LoanOptions" element={<LoanOptions />} > </Route>
          <Route path="/CustomerCurrentLoans" element={<CustomerCurrentLoans />} > </Route>
          <Route path="/CustomerSavingLoans" element={<CustomerSavingLoans />} > </Route>
          <Route path="/SavingAccountApplyNewLoanForm" element={<SavingAccountApplyNewLoanForm />} > </Route>
          <Route path="/CurrentAccountApplyNewLoanForm" element={<CurrentAccountApplyNewLoanForm />} > </Route>

          <Route path="/ViewSavingAccountOngoingLoans" element={<ViewSavingAccountOngoingLoans />} > </Route>
          <Route path="/ViewCurrentAccountOngoingLoans" element={<ViewCurrentAccountOngoingLoans />} > </Route>

          <Route path="/FixedDepositOptions" element={<FixedDepositOptions />} > </Route>
          <Route path="/SavingAccountFixedDeposit" element={<SavingAccountFixedDeposit />} > </Route>
          <Route path="/CurrentAccountFixedDeposit" element={<CurrentAccountFixedDeposit />} > </Route>
          <Route path="/SavingAccountNewFixedDepositForm" element={<SavingAccountNewFixedDepositForm />} > </Route>
          <Route path="/CurrentAccountNewFixedDepositForm" element={<CurrentAccountNewFixedDepositForm />} > </Route>
          <Route path="/ViewSavingAccountOngoingFixedDeposit" element={<ViewSavingAccountOngoingFixedDeposit />} > </Route>
          <Route path="/ViewCurrentAccountOngoingFixedDeposit" element={<ViewCurrentAccountOngoingFixedDeposit />} > </Route>

          <Route path="/TransactionOptions" element={<TransactionOptions />} > </Route>
          <Route path="/SavingAccountTransactions" element={<SavingAccountTransactions />} > </Route>
          <Route path="/CurrentAccountTransactions" element={<CurrentAccountTransactions />} > </Route>
          <Route path="/ShowSavingAccountTransactions" element={<ShowSavingAccountTransactions />} > </Route>
          <Route path="/ShowCurrentAccountTransactions" element={<ShowCurrentAccountTransactions />} > </Route>

          <Route path="/MyLoansSavingAccount" element={<MyLoansSavingAccount />} > </Route>
          <Route path="/MyFixedDepositSavingAccount" element={<MyFixedDepositSavingAccount />} > </Route>
          <Route path="/MyTransactionsSavingAccount" element={<MyTransactionsSavingAccount />} > </Route>

          <Route path="/MyLoansCurrentAccount" element={<MyLoansCurrentAccount />} > </Route>
          <Route path="/MyFixedDepositCurrentAccount" element={<MyFixedDepositCurrentAccount />} > </Route>
          <Route path="/MyTransactionsCurrentAccount" element={<MyTransactionsCurrentAccount />} > </Route>


          <Route path="/FarmersCompensation" element={<FarmersCompensation />} > </Route>
          <Route path="/DefenceForcesCompensation" element={<DefenceForcesCompensation />} > </Route>
          <Route path="/GovtJobCompensation" element={<GovtJobCompensation />} > </Route>
          <Route path="/PensionHoldersCompensation" element={<PensionHoldersCompensation />} > </Route>
          <Route path="/PrivateJobCompensation" element={<PrivateJobCompensation />} > </Route>



          <Route path="*" element={<ErrorPage />} > </Route>

        </Routes>
        <Footer />
        

      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
