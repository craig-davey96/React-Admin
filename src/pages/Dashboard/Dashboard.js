import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import Card from "../../components/Card/Card";

class Dashboard extends React.Component{

    render() {
        return <div className={styles.Dashboard}>
            <div className="row">
                <div className="col-9">
                    <Card header="Hello">

                    </Card>
                </div>
                <div className="col-3">
                    <Card header="Hello">

                    </Card>
                </div>
            </div>
        </div>;
    }

}

export default Dashboard;
