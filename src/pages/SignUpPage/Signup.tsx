import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.scss";

const Signup = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();
    
    const signUpHandler = () => {
        const data = {
            username: username,
            password: password,
            company_name: company
        }
        console.log(data);
        axios.post('https://callbot-fxb6.onrender.com/signup/', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="Signup">
            <div className="Signup__card">
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="uname" id="uname" onChange={e => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="cname">Company Name</label>
                    <input type="text" name="cname" id="cname" onChange={e => setCompany(e.target.value)}/>
                </div>
                <div>
                    <button onClick={signUpHandler}>Sign Up</button>
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;