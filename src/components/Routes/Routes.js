import React from 'react';
import PropTypes from 'prop-types';
import styles from './Routes.module.css';
import { AnimatedSwitch } from 'react-router-transition';
import {Route, Switch} from "react-router-dom";

// Import the pages

import Dashboard from "../../pages/Dashboard/Dashboard";
import Chat from "../../pages/Chat/Chat";
import Components from "../../pages/Components/Components";

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
        <Route path="/components" exact component={Components}></Route>
    </AnimatedSwitch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
