import React from 'react';
import PropTypes from 'prop-types';
import styles from './Routes.module.css';
import { AnimatedSwitch } from 'react-router-transition';
import {Route, Switch} from "react-router-dom";

// Import the pages

import Dashboard from "../../pages/Dashboard/Dashboard";
import Chat from "../../pages/Chat/Chat";
import Components from "../../pages/Components/Components";
import Calendar from "../../pages/Calendar/Calendar";
import Contacts from "../../pages/Contacts/Contacts";
import Forms from "../../pages/Forms/Forms";
import Tables from "../../pages/Tables/Tables";

const Routes = () => (
    <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switch_wrapper}
    >
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/chat" exact component={Chat}></Route>
        <Route path="/calendar" exact component={Calendar}></Route>
        <Route path="/contacts" exact component={Contacts}></Route>
        <Route path="/forms" exact component={Forms}></Route>
        <Route path="/tables" exact component={Tables}></Route>
    </AnimatedSwitch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
