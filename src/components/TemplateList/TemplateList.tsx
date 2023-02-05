import { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import "./TemplateList.scss";

const TemplateList = () => {
    const [list, setList] = useState([]);
    const user = useContext(UserContext);

    const data = {
        company_username: user.company_name
    };
    useEffect(() => {
        console.log("Sending POST");
        axios.post('https://callbot-fxb6.onrender.com/template_list/', data)
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
                                Template Name: {data.template_name}
                                <br />
                                UseCases: {data.usecases}
                                <br />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );

}

export default TemplateList;