import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import Signup from "./pages/SignUpPage/Signup";
import Login from "./pages/LoginPage/Login";
import './App.css'
import { createContext, useContext } from "react";
import Dashboard from "./pages/DashBoard/Dashboard";

export const userContext = createContext({username: "", password: "", company_name: "", setUsername: () => {}, setPassword: () => {}, setCompanyName: ()=>{}});

function App() {
  const user = useContext(userContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user.username === "" ? <HomePage /> : <Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
