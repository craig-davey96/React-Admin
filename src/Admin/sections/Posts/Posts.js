import React from 'react';
import PropTypes from 'prop-types';
import styles from './Posts.module.css';
import TopNavigation from "../../components/TopNavigation/TopNavigation";

const Posts = () => (
  <div className={styles.Posts}>
      <TopNavigation pageTitle="Posts"/>
  </div>
);

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
