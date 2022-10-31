import {getAxiosInstanceApi } from "./api";

// get messages

export const getAllMessages = (callback) => {
  getAxiosInstanceApi().post("getAllTweet")
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// sort message with hashtag

export const getMessagesByHashTagRequest = (hashTag ,callback) => {
  getAxiosInstanceApi().post("getAllTweet" , {hashTag})
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// sort message with user

export const getMessagesByUserRequest = (user ,callback) => {
  getAxiosInstanceApi().post("getAllTweet" , {user})
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// get all hashtags

export const getHashTags = (callback) => {
  getAxiosInstanceApi().get("getAllHashTags")
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// get all users

export const getUsers = (callback) => {
  getAxiosInstanceApi().get("getAllUser")
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// post message

export const newMessageRequest = (data, callback) => {
  getAxiosInstanceApi().post("newTweet", data)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  });
};

// get likes that submitted in server

export const likeMessageRequest = (id, callback) => {
  getAxiosInstanceApi().get("likeTweet/"+id)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  });
};