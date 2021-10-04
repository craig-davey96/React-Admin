import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../sections/Chat/Chat.module.css';
import {NavLink} from "react-router-dom";

class LastMessage extends React.Component{

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
          message: '',
        };
    }

    getMessages(){

        let formData = new FormData();
        formData.append('current_user' , localStorage.getItem('user'));
        formData.append('user_send_to' , this.props.uid);

        fetch('/localapi/getMessages.php' ,
            {
                method: "POST",
                cache: "no-cache",
                body: formData
            }
        )
            .then(response => response.json())
            .then(data => {
                let length = data.length - 1;
                if(length > -1){
                    this.setState({ message: data[length].message });
                }else{
                    this.setState({ message: '' });
                }
            });

    }

    componentDidMount() {
        this._isMounted = true;
        this.getMessages();
        setInterval( () => {
            if(this._isMounted){
                this.setState({
                    curTime1 : new Date().toLocaleString()
                })
                this.getMessages();
            }
        },500)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return(
            <p style={{fontSize: 10, margin: 0}}>{this.state.message}</p>
        )
    }

}

class ChatUsers extends React.Component{

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    getUsers(uid){

        fetch('/localapi/getusers.php?uid='+uid)
            .then(response => response.json())
            .then(users => {
                this.setState({users: users});
            })

    }

    componentDidMount() {

        this._isMounted = true;

        this.getUsers(localStorage.getItem('user'));
        setInterval( () => {
            if(this._isMounted){
                this.setState({
                    curTime : new Date().toLocaleString()
                })
                this.getUsers(localStorage.getItem('user'));
            }
        },10000)

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {


        return(
            <div className={styles.ChatUsers}>
                <ul>
                    {this.state.users.map((user , i) => {
                        return <li key={i}>
                            <NavLink activeClassName={styles.activeChat} exact to={'/admin/chat/'+user.id}>
                                {user.username}
                                <LastMessage uid={user.id}/>
                            </NavLink>
                        </li>;
                    })}
                </ul>
            </div>
        )
    };

};

ChatUsers.propTypes = {};

ChatUsers.defaultProps = {};

export default ChatUsers;
