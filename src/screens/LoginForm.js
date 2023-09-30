import React, { Fragment, useRef, useState, useContext } from "react";
import AuthContext from "../store/AuthContext/auth-context";
import { useHistory } from "react-router-dom";
import Button from "../components/UI/Button";
import "./LoginForm.css";

const LoginForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(false);
    const history = useHistory();
    const authctx = useContext(AuthContext);
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        let url = "";
        if (!isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7Q5Ve9kzPGzkrZvGPtyf1YWILCwSQzvw";
        }
        else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7Q5Ve9kzPGzkrZvGPtyf1YWILCwSQzvw";
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then((data) => {
                        throw new Error(data.error.message);
                    })
                }
            }).then((data) => {
                const expirationTime = new Date((new Date().getTime() + (+data.expiresIn * 1000)));
                authctx.login(data.idToken, enteredEmail, expirationTime.toISOString());
                history.replace("/");
            })
            .catch((err) => window.alert(err.message));
    }
    const changeHandler = () => {
        setIsLogin(!isLogin);
    }
    return (
        <Fragment>
            <form className="loginForm" onSubmit={submitHandler}>
                <p>{isLogin && <span onClick={changeHandler}>Create new Account</span>}</p>
                <p>{!isLogin && <span onClick={changeHandler}>Already have an account.. Login Here</span>}</p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email address" ref={emailInputRef} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password" ref={passwordInputRef} />
                <Button type="submit" className="btn btn-submit">{isLogin ? "Login" : "Sign Up"}</Button>
            </form>
        </Fragment >)
}

export default LoginForm;