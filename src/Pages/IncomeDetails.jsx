import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Table from "../Components/Table";
import TableCell from "../Components/TableCell";
import AnimatedContent from "./AnimatedContent";
function IncomeDetails() {
  const { state } = useLocation();
  const [netIncome, setNetIncome] = useState(0);
  const [grossIncome, setGrossIncome] = useState(0);

  const headers = [
    { name: "Frequency", className: "text-left" },
    { name: "Gross", className: "text-right" },
    { name: "Tax", className: "text-right" },
    { name: "Net", className: "text-right" },
  ];
  const frequencies = ["Weekly", "Fortnightly", "Monthly", "Annual"];

  useEffect(() => {
    if (state.incomeType === "gross") {
      setGrossIncome(state.income);
      setNetIncome(state.income * 0.8);
    } else {
      setNetIncome(state.income);
      setGrossIncome(state.income * 1.25);
    }
  }, [state.income, state.incomeType]);
  return (
    <AnimatedContent>
      <div className="text-black flex flex-col justify-center p-3">
        <div className=" w-10/12 mx-auto flex flex-row justify-start align-content-center gap-5">
          <div className="bg-emerald-500  text-white font-semibold  py-2 px-3 border border-emerald-500 my-3 rounded">
            $
            {Math.round(state.incomeType === "gross" ? netIncome : grossIncome)}
          </div>
          <h1 className="h-5 mt-4 pt-1">
            - Your total {state.incomeType === "gross" ? "net" : "gross"} income
          </h1>
        </div>
        <div className="flex justify-center w-10/12 mx-auto bg-white py-5">
          <Table
            headers={headers.map((header) => (
              <th className={`${header.className} px-2`}>{header.name}</th>
            ))}
          >
            {frequencies.map((frequency) => {
              const multiplier = (value) => {
                switch (frequency) {
                  case "Weekly":
                    return value / 4;
                  case "Fortnightly":
                    return value / 2;
                  case "Monthly":
                    return value;
                  case "Annual":
                    return value * 12;
                  default:
                    return value;
                }
              };
              return (
                <tr className="hover:bg-emerald-400 hover:text-white shadow-[0px_2px_2px_-2px_rgba(0,0,0,0.5)]">
                  <TableCell>{frequency}</TableCell>
                  <TableCell className="text-right">
                    ${Math.round(multiplier(grossIncome))}
                  </TableCell>
                  <TableCell className="text-right">
                    ${Math.round(multiplier(grossIncome) * 0.2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${Math.round(multiplier(netIncome))}
                  </TableCell>
                </tr>
              );
            })}
          </Table>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default IncomeDetails;
