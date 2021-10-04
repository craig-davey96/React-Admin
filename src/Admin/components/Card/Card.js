import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({children}) => (
  <div className={styles.Card}>
      {children}
  </div>
);

const CardHeader = ({children}) => (
    <div className={styles.CardHeader}>
        {children}
    </div>
);

const CardBody = ({children}) => (
    <div className={styles.CardBody}>
        {children}
    </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export {Card , CardHeader , CardBody};
