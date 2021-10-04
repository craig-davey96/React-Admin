import React from 'react';
import PropTypes from 'prop-types';
import styles from './PagesHandler.module.css';
import {useParams} from "react-router-dom";

const PagesHandler = ({match}) => {

    const { pageslug } = useParams();
    var slug = !pageslug ? '/' : pageslug;

    return(
        <div className={styles.PagesHandler}>
            PagesHandler Component - Current Page <strong>{slug}</strong>
        </div>
    );

};

PagesHandler.propTypes = {};

PagesHandler.defaultProps = {};

export default PagesHandler;
