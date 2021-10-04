import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pages.module.css';
import {Card , CardHeader , CardBody} from "../../components/Card/Card";
import TopNavigation from "../../components/TopNavigation/TopNavigation";


class Pages extends React.Component{

    constructor() {
        super();
        this.state = {
            options : {
                filterType: 'checkbox',
            },

            curTime : null
        }
    }

    GetPages(){

        const headers = { 'Content-Type': 'application/json' }

        fetch('/localapi/getpages.php' ,  { headers })
            .then(response => response.json())
            .then(allpages => {

            });

    }

    componentDidMount() {

        this.GetPages();
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
            this.GetPages();
        },2000)

    }

    render() {

        return(
            <div className={styles.Pages}>
                <TopNavigation pageTitle="Pages"/>
                <Card>
                    <CardHeader>Hello</CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
            </div>
        )
    }

};

Pages.propTypes = {};

Pages.defaultProps = {};

export default Pages;
