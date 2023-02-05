import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import Signup from "./pages/SignUpPage/Signup";
import Login from "./pages/LoginPage/Login";
import './App.css'
import { createContext, useContext, useState } from "react";
import Dashboard from "./pages/DashBoard/Dashboard";
import UserContext from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("abhay");
  const [password, setPassword] = useState("vijay");
  const [company_name, setCompanyName] = useState("mlh");
  // const user = {
  //   username: username,
  //   setUsername: setUsername,
  //   password: password,
  //   setPassword: setPassword,
  //   company_name: company_name,
  //   setCompanyName: setCompanyName,
  // };
  // const user = useContext(UserContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/signup" element={<Signup setUsername={setUsername} setPassword={setPassword} setCompany={setCompanyName} username={username} password={password} company_name={company_name} />} />
          <Route path="/login" element={<Login setUsername={setUsername} setPassword={setPassword} setCompany={setCompanyName} username={username} password={password} company_name={company_name} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
