import {getAxiosInstanceApi } from "./api";

// get tweets

export const getAllTweets = (callback) => {
  getAxiosInstanceApi().post("getAllTweet")
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// sort tweet with hashtag

export const getTweetsByHashTagRequest = (hashTag ,callback) => {
  getAxiosInstanceApi().post("getAllTweet" , {hashTag})
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

// sort tweet with user

export const getTweetsByUserRequest = (user ,callback) => {
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

// post tweet

export const newTweetRequest = (data, callback) => {
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

export const likeTweetRequest = (id, callback) => {
  getAxiosInstanceApi().get("likeTweet/"+id)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  });
};