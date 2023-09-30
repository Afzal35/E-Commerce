import React from "react";

const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => { },
    logut: () => { },
});

export default AuthContext;