import React from 'react';
import PropTypes from 'prop-types';
import '../Formfields.module.css';
import styles from "../Formfields.module.css";

function PasswordField(props){

    return (
        <div  className={[styles.form_field , "password-field"].join(' ')}>
            <input type="password" required={props.required} name={props.fieldName} placeholder={props.placeholder} onChange={props.change} />
        </div>
    );

}

PasswordField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    fieldLabel: PropTypes.string
};

PasswordField.defaultProps = {};

export default PasswordField;
