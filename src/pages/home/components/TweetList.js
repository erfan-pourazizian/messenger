import React from 'react';
import Tweet from "./Tweet";


const TweetList = ({data}) => {
  return (
    <div>
      {data.map((tweet,index) => <Tweet data={tweet} key={index}  />)}
    </div>
  );
};

export default TweetList;