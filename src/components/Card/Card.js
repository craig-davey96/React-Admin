import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => (
<div className={styles.Card}>
    <div className={styles.card_header}>{props.header}</div>
    <div className={styles.card_body}>
        {props.children}
    </div>
</div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
