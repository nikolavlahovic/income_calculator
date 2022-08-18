import React from "react";
import { useLocation } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
function IncomeDetails() {
  const { state } = useLocation();
  return (
    <AnimatedPage>
      <div className="text-black flex flex-col justify-center p-3">
        <h1>
          your {state.incomeType} income {state.income}
        </h1>
        <div className="flex justify-center w-60 mx-auto">
          <table className="">
            <thead>
              <tr>
                <td>Frequency</td>
                <td>Gross</td>
                <td>Tax</td>
                <td>Net</td>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:shadow-inner">
                <td>Monthly</td>
                <td>{state.income}</td>
                <td>{state.income * 0.8}</td>
                <td>{state.income * 0.5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default IncomeDetails;
