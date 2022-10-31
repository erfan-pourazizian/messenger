import React from "react";
import { getHashTags } from "../api/api_messages";

const MessageStateContext = React.createContext();
const MessageDispatchContext = React.createContext();

function messageReducer(state, action) {
  switch (action.type) {
    case "SET_MESSAGE_TEXT":
      return { ...state, messageText: action.payload };
    case "SET_MESSAGE_LIST":
      return { ...state, messageList: action.payload };
    case "SET_HASHTAG_LIST":
      return { ...state, hashTags: action.payload };
    case "LIKE_MESSAGE":
      const messageId = action.payload;
      const foundIndex = state.messageList.findIndex(
        (item) => item._id === messageId
      );
      if (foundIndex === -1) return state;
      return {
        ...state,
        messageList: [
          ...state.messageList.slice(0, foundIndex),
          {
            ...state.messageList[foundIndex],
            likes: state.messageList[foundIndex].likes + 1,
          },
          ...state.messageList.slice(foundIndex + 1),
        ],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function MessageProvider({ children }) {
  const [state, dispatch] = React.useReducer(messageReducer, {
    messageText: "",
    messageList: [],
    hashTags: [],
  });
  return (
    <MessageStateContext.Provider value={state}>
      <MessageDispatchContext.Provider value={dispatch}>
        {children}
      </MessageDispatchContext.Provider>
    </MessageStateContext.Provider>
  );
}

function useMessageState() {
  const context = React.useContext(MessageStateContext);
  if (context === undefined) {
    throw new Error("useMessageState must be used within a MessageProvider");
  }
  return context;
}

function useMessageDispatch() {
  const context = React.useContext(MessageDispatchContext);
  if (context === undefined) {
    throw new Error("useMessageDispatch must be used within a MessageProvider");
  }
  return context;
}

export {
  MessageProvider,
  useMessageState,
  useMessageDispatch,
  setMessageText,
  likeMessage,
  setMessageList,
  setHashTagList,
  updateHashTagList,
};

// ###########################################################
function setMessageText(dispatch, messageText) {
  dispatch({
    type: "SET_MESSAGE_TEXT",
    payload: messageText,
  });
}

function likeMessage(dispatch, id) {
  dispatch({
    type: "LIKE_MESSAGE",
    payload: id,
  });
}

function setMessageList(dispatch, list) {
  dispatch({
    type: "SET_MESSAGE_LIST",
    payload: list,
  });
}

function setHashTagList(dispatch, list) {
  dispatch({
    type: "SET_HASHTAG_LIST",
    payload: list,
  });
}

function updateHashTagList(dispatch) {
  getHashTags((isOk, data) => {
    if (isOk) {
      dispatch({
        type: "SET_HASHTAG_LIST",
        payload: data,
      });
    }
  });
}
