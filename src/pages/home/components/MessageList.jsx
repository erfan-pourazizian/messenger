import Message from "./Message";


const MessageList = ({data}) => {
  return (
    <div>
      {data.map((message,index) => <Message data={message} key={index}  />)}
    </div>
  );
};

export default MessageList;