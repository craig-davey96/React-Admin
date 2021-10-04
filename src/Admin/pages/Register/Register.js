import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from '../Login/Login.module.css';
import Logo from "../../components/Logo/Logo";
import {toast, ToastContainer} from "react-toastify";
import EmailField from "../../components/FormFields/EmailField/EmailField";
import PasswordField from "../../components/FormFields/PasswordField/PasswordField";
import Button, {LinkButton} from "../../components/Button/Button";
import TextField from "../../components/FormFields/TextField/TextField";

function Register(){

    const [username , setUsername] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    function submitRegister(e){

        e.preventDefault();

        let formData = new FormData();
        formData.append('username' , username);
        formData.append('email' , email);
        formData.append('password' , password);

        fetch('/localapi/register.php' ,
            {
                method: "POST",
                cache: "no-cache",
                body: formData
            }
        )
            .then(response => response.json())
            .then(data => {

                if(data.code == 200){

                    toast.success("Registered successfully please login" , {autoClose: 1000});

                }else{

                    toast.error( data.error , {autoClose: 2000})

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

                    <h2>Register</h2>

                    <ToastContainer />

                    <form action="" onSubmit={submitRegister}>
                        <TextField fieldName='username' required placeholder='Username' change={(e) => setUsername(e.target.value)} />
                        <EmailField fieldName='email' required placeholder='Email' change={(e) => setEmail(e.target.value)} />
                        <PasswordField fieldName='password' required placeholder='Password' change={(e) => setPassword(e.target.value)}/>
                        <Button type="submit" title="Register"/>
                        <LinkButton to="/admin/login" title="Back To Login"/>
                    </form>

                </div>
            </div>
        </div>
    );

};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
