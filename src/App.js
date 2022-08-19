import "./App.css";
import Dashboard from "./Dashboard";
import { AnimatePresence } from "framer-motion";
import Income from "./Pages/Income";
import IncomeDetails from "./Pages/IncomeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route element={<Dashboard />} path={"/"}>
            <Route element={<Income />} path={"/"} />
            <Route element={<IncomeDetails />} path={"/income_details"} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
