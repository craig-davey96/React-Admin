import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import NavigationDivider from "../NavigationDivider/NavigationDivider";
import {
    FiAperture,
    FiCalendar,
    FiGrid,
    FiHome, FiList,
    FiMessageSquare,
    FiUsers,
} from "react-icons/all";
import DropdownNavItem from "./DropdownNavItem/Navigation/DropdownNavItem";

function Navigation(){

    return (
        <nav className={styles.Navigation}>
            <div className={styles.logo_block}>
                <img src="logo.svg" alt=""/>
            </div>
            <div className={styles.navigation_user_block}></div>
            <ul>

                <li><NavLink activeClassName={styles.menu_link_active} exact="/" to="/"><FiHome/> <p>Dashboard</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} exact="/chat" to="/chat"><FiMessageSquare/> <p>Chat</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} exact="/calendar" to="/calendar"><FiCalendar/> <p>Calendar</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} exact="/contacts" to="/contacts"><FiUsers/> <p>Contacts</p></NavLink></li>

                <NavigationDivider title="Components"/>

                <DropdownNavItem linktext="Ui Elements" icon={<FiGrid/>} >
                    <li><NavLink activeClassName={styles.menu_link_active} to="/cards"><p>cards</p></NavLink></li>
                    <li><NavLink activeClassName={styles.menu_link_active} to="/sliders"><p>Sliders</p></NavLink></li>
                    <li><NavLink activeClassName={styles.menu_link_active} to="/alerts"><p>Alerts</p></NavLink></li>
                </DropdownNavItem>

                <li><NavLink activeClassName={styles.menu_link_active} exact="/forms" to="/forms"><FiAperture/> <p>Forms</p></NavLink></li>
                <li><NavLink activeClassName={styles.menu_link_active} exact="/tables" to="/tables"><FiList/> <p>Tables</p></NavLink></li>

            </ul>
        </nav>
    );

}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
