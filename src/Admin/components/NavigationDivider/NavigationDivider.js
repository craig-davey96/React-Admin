import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationDivider.module.css';

const NavigationDivider = (props) => (
  <li className={styles.NavigationDivider}>
      <p>{props.title}</p>
  </li>
);

NavigationDivider.propTypes = {};

NavigationDivider.defaultProps = {};

export default NavigationDivider;
