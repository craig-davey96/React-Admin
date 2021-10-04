import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import EmailField from "../../components/FormFields/EmailField/EmailField";
import PasswordField from "../../components/FormFields/PasswordField/PasswordField";
import Button, {LinkButton} from "../../components/Button/Button";
import {Redirect, Router} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../components/Logo/Logo";
import data from "bootstrap/js/src/dom/data";

function Login() {

    const [username , setUsername] = useState()
    const [password , setPassword] = useState()
    const [loggedIn , setloggedIn] = useState()

    function loginHandle(event){

        event.preventDefault();

        let formData = new FormData();
            formData.append('email' , username);
            formData.append('password' , password)

        // Post the data to the api to check if user exists

        fetch('/localapi/login.php' ,
            {
                    method: "POST",
                    cache: "no-cache",
                    body: formData
                }
            )
            .then(response => response.json())
            .then(data => {
                if(data.code == 200){
                    toast.success("Logged In" , {autoClose: 1000});
                    localStorage.setItem('user', data.user.id);
                    localStorage.setItem('user_username', data.user.username);
                    localStorage.setItem('user_email', data.user.email);
                    localStorage.setItem('user_status', data.user.status);
                    window.location.href = '/admin/';
                }else{
                    toast.error("Username or password is incorrect" , {autoClose: 2000})
                }
            });

    }

    return(

        <div className={styles.Login}>
            <div className={styles.login_block}>
                <div className={styles.login_block_left}>
                    <Logo/>
                </div>
                <div className={styles.login_block_right}>

                    <h2>Login</h2>

                    <ToastContainer />

                    <form action="" onSubmit={loginHandle}>
                        <EmailField fieldName='username' required placeholder='Email' change={(e) => setUsername(e.target.value)} />
                        <PasswordField fieldName='password' required placeholder='Password' change={(e) => setPassword(e.target.value)} />
                        <Button type="submit" title="Login"/>
                        <LinkButton to="/admin/register" title="Register"/>
                    </form>

                </div>
            </div>
        </div>
    )

};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
