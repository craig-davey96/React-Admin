import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Formfields.module.css';

const TextField = (props) => (
    <div className={[styles.form_field , "email-field"].join(' ')}>
        <input type="text" required={props.required} name={props.fieldName} placeholder={props.placeholder} onChange={props.change} />
    </div>
);

TextField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    fieldLabel: PropTypes.string
};

TextField.defaultProps = {};

export default TextField;
