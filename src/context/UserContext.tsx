import React, {createContext} from 'react';

const UserContext = createContext({
    username: "abhay",
    // setUsername: React.Dispatch<string>(""),
    password: "pass",
    // setPassword: () => {},
    company_name: "apple",
    // setCompanyName: () => {},
})

export default UserContext;