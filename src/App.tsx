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
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [company_name, setCompanyName] = useState("");
  // const user = {
  //   username: username,
  //   setUsername: setUsername,
  //   password: password,
  //   setPassword: setPassword,
  //   company_name: company_name,
  //   setCompanyName: setCompanyName,
  // };
  const user = useContext(UserContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user.username === "" ? <HomePage /> : <Dashboard />} />
          <Route path="/signup" element={<UserContext.Provider value={user}><Signup /></UserContext.Provider>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
