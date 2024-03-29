import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from 'axios';
import "./CreateTarget.scss";

const CreateTarget = () => {
    const [target_name, setTargetName] = useState("");
    const [target_phone, setTargetPhone] = useState("");
    // const navigate = useNavigate();
    const user = useContext(UserContext);

    const targetHandler = () => {
        const data = {
            target_name: target_name,
            target_phone: target_phone,
            company_username: user.company_name
        }
        console.log(data);
        axios.post('https://callbot-fxb6.onrender.com/add_target/', data)
        .then(function (response) {

            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="Target">
            <div className="Target__card">
                <div>
                    <label htmlFor="uname">Target Name</label>
                    <input type="text" name="uname" id="uname" onChange={e => setTargetName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="targetphonenumber">Target Phone Number</label>
                    <input type="tel" name="targetphonenumber" id="targetphonenumber" onChange={e => setTargetPhone(e.target.value)}/>
                </div>
                <div>
                    <button onClick={targetHandler}>Add Target</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTarget;