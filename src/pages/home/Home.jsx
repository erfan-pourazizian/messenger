import {useEffect} from 'react';
import useStyle from './styles'
import NewMessage from "./components/NewMessage";
import MessageList from "./components/MessageList";
import {getAllMessages} from "../../api/api_messages";
import {setMessageList, useMessageDispatch, useMessageState} from "../../context/MessageContext";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";

const Home = () => {
  const classes = useStyle();
  const {t} = useTranslation();
// context
  const messageDispatch = useMessageDispatch();
  const {messageList : messages} = useMessageState();

  useEffect(() => {
    updateMessages();
  },
       // eslint-disable-next-line
      []);
// update messages
  const updateMessages = () => {
    getAllMessages((isOk, data) => {
      if (!isOk)
        return toast.error(t("error.messageFetch"));
      setMessageList(messageDispatch,data);
    })
  }

  return (
    <div className={classes.root}>
      <NewMessage updateMessages={updateMessages}/>
      <MessageList data={messages}/>
    </div>
  );
};

export default Home;