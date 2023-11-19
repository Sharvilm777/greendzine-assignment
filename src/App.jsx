import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/user" element={<EmployeeList />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/employee/:id" element={<Employee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
