import { useState ,useRef} from "react";

const InterestCalculator = () => {
    let name, value;
    const principal = useRef(null)
    const rate = useRef(null)
    const timeInMonths = useRef(null)
    const interestCalculatorResult = useRef(null)
    const interestCalculatorTotalAmount = useRef(null)
  const [Data, setData] = useState({
    principal: "",
    rate: "",
    timeInMonths: "",
  });
  const  handleInputChange = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
    // console.log(principal.current.value);
    const Principal = principal.current.value;
    const Rate = rate.current.value;
    const TimeInMonths = timeInMonths.current.value;

    const A = Principal *
    (Math.pow((1 + Rate / 100), TimeInMonths));
    const Amount = A.toFixed(2);
  
  const CI = Amount - Principal;
  const CompoundInterest = CI.toFixed(2);
  interestCalculatorResult.current.value = `Rs. ${CompoundInterest}`;
  interestCalculatorTotalAmount.current.value = `Rs. ${Amount}`;

  

  }

  return (
    <>
      <div className="main-div">
        <div className="mainCalculatorDiv">
          <h1> Compound Interest Calculator </h1>
          <br />
          <br />
          <form>
            <label className="interestCalculatorLabel">
              Principal Amount (Rs.) :{" "}
            </label>
            <input
              type="number"
              className="interestCalculatorInput"
              name="principal"
              id="principal"
              ref={principal}
            />
            <br />
            <label className="interestCalculatorLabel">Annual rate : </label>
            <input
              type="number"
              className="interestCalculatorInput"
              id="rate"
              name="rate"
              ref={rate}
            />
            <br />
            <label className="interestCalculatorLabel">
              Total Duration (In Months) :{" "}
            </label>
            <input
              type="number"
              className="interestCalculatorInput"
              name="timeInMonths"
              id="timeInMonths"
              ref={timeInMonths}
            />
            <br />
            <button
              onClick={handleInputChange}
              className="interestCalculationButton"
            >
              Calculate
            </button>
            <br />
            <br />
            <br />
            <label className="interestCalculatorLabel">
              {" "}
              Total Compound Interest :{" "}
            </label>
            <input
              type="text"
              id="interestCalculatorResult"
              name="result"
              
              ref={interestCalculatorResult}

              readonly="readonly"
            />
            <br />
            <br />
            <label className="interestCalculatorLabel">
              {" "}
              Total Amount (Including CI ) :{" "}
            </label>
             <input
              type="text"
              id="interestCalculatorResult"
              name="result"
              
              ref={interestCalculatorTotalAmount}

              readonly="readonly"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default InterestCalculator;
