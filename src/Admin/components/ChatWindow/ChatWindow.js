import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../sections/Chat/Chat.module.css';
import {FiSend} from "react-icons/all";

class ChatWindow extends React.Component{

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: []
        }
        this.setMessage = this.setMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage(event){

        event.preventDefault();

        let formData = new FormData();
        formData.append('current_user' , localStorage.getItem('user'));
        formData.append('user_send_to' , this.props.userID);
        formData.append('message' , this.state.message);

        fetch('/localapi/sendMessage.php' ,
            {
                method: "POST",
                cache: "no-cache",
                body: formData
            }
        )
            .then(response => response.json())
            .then(data => {
                if(data.code == 200){
                    this.setState({message: ''});
                    let messageDiv = document.querySelector('.chat-window');
                }
            });

    }

    setMessage(event){
        this.setState({
            message: event.target.value
        });
    }

    getMessages(){

        let formData = new FormData();
        formData.append('current_user' , localStorage.getItem('user'));
        formData.append('user_send_to' , this.props.userID);

        fetch('/localapi/getMessages.php' ,
            {
                method: "POST",
                cache: "no-cache",
                body: formData
            }
        )
            .then(response => response.json())
            .then(data => {
                this.setState({ messages: data });
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
            <div className={styles.ChatWindow}>
                <div className={styles.ChatWindowTop}></div>
                <div className={styles.ChatWindowContent+' chat-window'}>
                    {this.state.messages.map((message , i) => {
                        if(message.sender != localStorage.getItem('user')){
                            return <div key={i} className={[message.message_id , styles.message , styles.received].join(' ')}><div>{message.message}</div></div>
                        }else{
                            return <div key={i} className={[message.message_id , styles.message , styles.sent].join(' ')}><div>{message.message}</div></div>
                        }
                    })}
                </div>
                <div className={styles.ChatWindowBottom}>
                    <form onSubmit={this.submitMessage} action="" className={styles.ChatForm}>
                        <input value={this.state.message} type="message"  onChange={this.setMessage}/>
                        <button type="submit"><FiSend/></button>
                    </form>
                </div>
            </div>
        )
    };


};

ChatWindow.propTypes = {};

ChatWindow.defaultProps = {};

export default ChatWindow;
