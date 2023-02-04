import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from 'axios';
import "./ListTargets.scss";

const ListTargets = () => {
    // api/target_list
    // const [target_name, setTargetName] = useState("");
    // const [target_phone, setTargetPhone] = useState("");
    // const navigate = useNavigate();
    const [list, setList] = useState([]);
    const user = useContext(UserContext);

    const targetHandler = () => {
        const data = {
            company_username: user.company_name
        };
        console.log(data);
        axios.post('https://callbot-fxb6.onrender.com/target_list/', data)
        .then(function (response) {
            setList(response.data);
            console.log(list);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="Targetlist">
            <div className="Targetlist__card">
                <button onClick={targetHandler}>Hit</button>
                {list }
            </div>
        </div>
    );
};

export default ListTargets;