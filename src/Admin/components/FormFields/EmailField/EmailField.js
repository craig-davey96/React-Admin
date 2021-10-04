import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Formfields.module.css';

function EmailField(props){

    return (
        <div className={[styles.form_field , "email-field"].join(' ')}>
            <input type="email" required={props.required} name={props.fieldName} placeholder={props.placeholder} onChange={props.change} />
        </div>
    );

}

EmailField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    fieldLabel: PropTypes.string
};

EmailField.defaultProps = {};

export default EmailField;
