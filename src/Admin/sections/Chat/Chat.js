import React, {useState , useEffect , useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import {NavLink} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";
import {FiSend} from "react-icons/all";
import {toast} from "react-toastify";
import ChatUsers from "../../components/ChatUsers/ChatUsers";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

const Chat = ({match}) => {

    return(
        <>
            <TopNavigation pageTitle="Chat"/>
            <div className={styles.Chat}>
                <ChatUsers/>
                <ChatWindow userID={match.params.uid}/>
            </div>
        </>
    );

};


Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
