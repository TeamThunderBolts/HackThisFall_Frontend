import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Login.scss";

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const signUpHandler = () => {
        const data = {
            username: username,
            password: password,
        }
        axios.post('https://callbot-fxb6.onrender.com/login/', data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="Login">
            <div className="Login__card">
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="uname" id="uname" onChange={e => setUserName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={signUpHandler}>Login</button>
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default Login;