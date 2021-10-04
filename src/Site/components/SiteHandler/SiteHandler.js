import React from 'react';
import PropTypes from 'prop-types';
import styles from './SiteHandler.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PagesHandler from "../PagesHandler/PagesHandler";

const SiteHandler = () => (
  <BrowserRouter>
      <Switch>
          <Route path="/" exact component={PagesHandler}/>
          <Route path="/:pageslug" component={PagesHandler}/>
      </Switch>
  </BrowserRouter>
);

SiteHandler.propTypes = {};

SiteHandler.defaultProps = {};

export default SiteHandler;
