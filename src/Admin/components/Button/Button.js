import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import {BrowserRouter, Link, NavLink} from "react-router-dom";

const Button = (props) => (
  <button type={props.type} className={styles.Button}>{props.title}</button>
);

const LinkButton = (props) => (
    <NavLink to={props.to} className={styles.Button}>{props.title}</NavLink>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
export {LinkButton};
