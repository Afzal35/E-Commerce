import React, { useState, useEffect, useCallback } from "react";
import AuthContext from "./auth-context";

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingTime = adjExpirationTime - currentTime;
    return remainingTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime
    };
}

const AuthProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initalToken;
    if (tokenData) {
        initalToken = tokenData.token;
    }
    const [token, setToken] = useState(initalToken);
    const isLoggedIn = !!token;
    const loginHandler = (tokenId, email, expirationTime) => {
        setToken(tokenId);
        localStorage.setItem("token", tokenId);
        localStorage.setItem("email", email);
        localStorage.setItem("expirationTime", expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);

    };

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData]);

    const authContext = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (<AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthProvider;