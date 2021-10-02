import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className={styles.Navigation}>
        <div className={styles.navigation_user_block}></div>
        <ul>
            <li><NavLink activeClassName={styles.menu_link_active} exact="/" to="/">Dashboard</NavLink></li>
            <li><NavLink activeClassName={styles.menu_link_active} exact="/chat" to="/chat">Chat</NavLink></li>
            <li><NavLink activeClassName={styles.menu_link_active} exact="/components" to="/components">Components</NavLink></li>
        </ul>
    </nav>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
