import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import NavigationDivider from "../NavigationDivider/NavigationDivider";
import {
    FiAperture,
    FiCalendar, FiFile,
    FiGrid,
    FiHome, FiList, FiMessageCircle,
    FiMessageSquare,
    FiUsers,
} from "react-icons/all";
import DropdownNavItem from "./DropdownNavItem/DropdownNavItem";
import Logo from "../Logo/Logo";

function Navigation(){

    return (
        <nav className={styles.Navigation}>
            <div className={styles.logo_block}>
                <Logo/>
            </div>
            <div className={styles.navigation_user_block}></div>
            <ul>

                <li><NavLink activeClassName={styles.menu_link_active} exact="/admin/" to="/admin/"><FiHome/> <p>Dashboard</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} to="/admin/chat"><FiMessageSquare/> <p>Chat</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} exact="/admin/posts" to="/admin/posts"><FiFile/> <p>Posts</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} exact="/admin/pages" to="/admin/pages"><FiList/> <p>Pages</p></NavLink></li>

            </ul>
        </nav>
    );

}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
