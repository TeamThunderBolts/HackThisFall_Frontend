import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import axios from 'axios';
import "./ListTargets.scss";

const ListTargets = () => {
    const [list, setList] = useState([]);
    const user = useContext(UserContext);

    const data = {
        company_username: user.company_name
    };
    useEffect(() => {
        console.log("Sending POST");
        axios.post('https://callbot-fxb6.onrender.com/target_list/', data)
            .then(function (response) {
                setList(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(list);
    }, []);

    return (
        <div className="Targetlist">
            <div className="Targetlist__card">
                {
                    list.map((data: any) => {
                        return (
                            <div>
                                Target Name: {data.tagret_name}
                                <br />
                                Target Phone: {data.target_phone}
                                <br />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ListTargets;