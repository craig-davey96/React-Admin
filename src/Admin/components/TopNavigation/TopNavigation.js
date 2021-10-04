import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopNavigation.module.css';
import {FiLogOut} from "react-icons/all";
import {toast} from "react-toastify";

function TopNavigation(props){

  function logOut(e){

    e.preventDefault();

      let formData = new FormData();
      formData.append('id' , localStorage.getItem('user'));

      fetch('/localapi/logout.php' ,
          {
              method: "POST",
              cache: "no-cache",
              body: formData
          }
      )
          .then(response => response.json())
          .then(data => {

              if(data.code == 200){

                  localStorage.removeItem('user');
                  localStorage.removeItem('user_username');
                  localStorage.removeItem('user_email');
                  localStorage.removeItem('user_status');

                  window.location.reload(false);

              }

          });

  }

  return(
      <div className={styles.TopNavigation}>
        <h3>{props.pageTitle}</h3>
        <ul className={styles.TopNavigationActions}>
          <li>
            <a onClick={logOut}><FiLogOut/>
            </a>
          </li>
        </ul>
      </div>
  );

};

TopNavigation.propTypes = {
    pageTitle: PropTypes.string.isRequired
};

TopNavigation.defaultProps = {};

export default TopNavigation;
