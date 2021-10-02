import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from '../../Navigation.module.css';
import {NavLink} from "react-router-dom";

function DropdownNavItem(props){

    const [isActive, setActive] = useState(false);

    const toggleClass = (e) => {
        e.preventDefault();
        setActive(!isActive);
    };

    return (
        <li>
            <a className={isActive ? styles.navigation_open : null} onClick={toggleClass} href="">{props.icon} <p>{props.linktext}</p></a>
            <ul>
                {props.children}
            </ul>
        </li>
    );

}

export default DropdownNavItem;
