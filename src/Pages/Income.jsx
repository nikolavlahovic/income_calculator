import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

function Income() {
  const navigate = useNavigate();
  const [income, setIncome] = useState("");
  const [showRadio, setShowRadio] = useState(false);
  const [incomeType, setIncomeType] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowRadio(true);
    console.log(showRadio);
    navigate("/income_details", {
      state: { income: income, incomeType: incomeType },
    });
  };
  return (
    <AnimatedPage>
      <div className="text-black px-2 py-2 rounded-b-lg flex justify-left align-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="income" className="flex flex-col text-xl">
            <h1 className="ml-5 mb-2">What is your total income?</h1>
            <input
              className=" border-none active:border-none ml-5 bg-transparent outline-none shadow-[0px_2px_4px_-4px_rgba(0,0,0,1)]"
              type="number"
              name="income"
              id="income"
              placeholder="Income..."
              value={income}
              onChange={(event) => setIncome(event.target.value)}
            />
          </label>
          {!showRadio && (
            <button
              type="button"
              onClick={() => setShowRadio(true)}
              className="ml-5 bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-1 px-2 border border-emerald-500 my-3 hover:border-transparent rounded"
            >
              Continue
            </button>
          )}
          {showRadio && (
            <AnimatedPage>
              <h1 className="ml-5 mb-2 text-xl mt-3">
                Please choose the income type
              </h1>
              <div className="boxed ml-3 mt-3">
                <input
                  type="radio"
                  name="p2p"
                  id="gross"
                  value="gross"
                  onChange={() => setIncomeType("gross")}
                />
                <label htmlFor="gross">GROSS</label>
                <input
                  type="radio"
                  name="p2p"
                  id="net"
                  value="net"
                  onChange={() => setIncomeType("net")}
                />
                <label htmlFor="net">NET</label>
              </div>
              <button
                type="submit"
                className="ml-5 bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-1 px-2 border border-emerald-500 my-3 hover:border-transparent rounded"
              >
                Calculate
              </button>
            </AnimatedPage>
          )}
        </form>
      </div>
    </AnimatedPage>
  );
}

export default Income;
