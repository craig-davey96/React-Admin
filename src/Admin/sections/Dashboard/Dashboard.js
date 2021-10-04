import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import {Card, CardBody, CardHeader} from "../../components/Card/Card";

const Dashboard = () => {

    let username = localStorage.getItem('user_username');

    return(
        <div className={styles.Dashboard}>
            <TopNavigation pageTitle="Dashboard"/>
            <Card>
                <CardHeader>Welcome To Your Admin Area</CardHeader>
                <CardBody>
                    {username}
                </CardBody>
            </Card>
        </div>
    );

};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
