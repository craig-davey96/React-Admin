import React from 'react';
import PropTypes from 'prop-types';
import styles from './Routes.module.css';
import { AnimatedSwitch } from 'react-router-transition';
import {Route, Switch} from "react-router-dom";

// Import the pages

import Dashboard from "../../sections/Dashboard/Dashboard";
import Pages from "../../sections/Pages/Pages";
import Posts from "../../sections/Posts/Posts";
import Chat from "../../sections/Chat/Chat";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";

const Routes = () => (
    <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switch_wrapper}
    >
        <Route path="/admin/" exact component={Dashboard}></Route>
        <Route path="/admin/pages" exact component={Pages}></Route>
        <Route path="/admin/posts" exact component={Posts}></Route>
        <Route path="/admin/chat/" exact  component={Chat}></Route>
        <Route path="/admin/chat/:uid" component={Chat}></Route>
    </AnimatedSwitch>
);

const AuthRoutes = () => (
    <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switch_wrapper}
    >
        <Route path="/admin/register" exact component={Register}></Route>
        <Route path="/admin/" component={Login}></Route>
    </AnimatedSwitch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
export {AuthRoutes};
