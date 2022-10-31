import {useEffect, useState} from 'react';
import useStyle from "../home/styles";
import Header from "../../components/header/Header";
import Divider from "@material-ui/core/Divider";
import MessageList from "../home/components/MessageList";
import PersonIcon from '@material-ui/icons/Person';
import {getMessagesByUserRequest} from "../../api/api_messages";
import {useLocation} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";

const MessagesByUser = (props) => {

  const [messages, setMessages] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMessagesByUserRequest(props.match.params.id, (isOk, data) => {
      if (!isOk)
        return alert(data.message);
      else setMessages(data);
    });
  },
      // eslint-disable-next-line
          [location]);

  const {t} = useTranslation();
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header title={props.match.params.name} icon={<PersonIcon/>}/>
      <Divider className={classes.divider}/>
      {messages.length === 0 &&
      <Typography>{t("warn.noMessageFromUser")}</Typography>
      }
      <MessageList data={messages}/>
    </div>
  );
};

export default MessagesByUser;