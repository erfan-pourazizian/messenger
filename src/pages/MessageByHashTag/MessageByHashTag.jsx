import {useEffect} from 'react';
import useStyle from "../home/styles";
import Header from "../../components/header/Header";
import Divider from "@material-ui/core/Divider";
import MessageList from "../home/components/MessageList";
import {getMessagesByHashTagRequest} from "../../api/api_messages";
import {toast} from "react-toastify";
import {setMessageList, useMessageDispatch, useMessageState} from "../../context/MessageContext";
import {useLocation} from 'react-router-dom';

const MessageByHashTag = (props) => {

  const location = useLocation();
  const {messageList} = useMessageState();
  const messageDispatch = useMessageDispatch();
  useEffect(() => {
    getMessagesByHashTagRequest(props.match.params.hashtag, (isOk, data) => {
      if (!isOk)
        return toast.error(data);
      setMessageList(messageDispatch, data);
    })
  },
       // eslint-disable-next-line
      [location]);

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"} alt={"hashtag_icon"}/>}/>
      <Divider className={classes.divider}/>
      <MessageList  data={messageList}/>
    </div>
  );
};

export default MessageByHashTag;