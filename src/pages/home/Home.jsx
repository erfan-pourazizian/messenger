import {useEffect} from 'react';
import useStyle from './styles'
import Header from "../../components/header/Header";
import Divider from "@material-ui/core/Divider";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import {getAllTweets} from "../../api/api_tweet";
import {setTweetList, useTweetDispatch, useTweetState} from "../../context/TweetContext";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";

const Home = () => {
  const classes = useStyle();
  const {t} = useTranslation();
// context
  const tweetDispatch = useTweetDispatch();
  const {tweetList : tweets} = useTweetState();

  useEffect(() => {
    updateTweets();
  },
       // eslint-disable-next-line
      []);
// update tweets
  const updateTweets = () => {
    getAllTweets((isOk, data) => {
      if (!isOk)
        return toast.error(t("error.tweetFetch"));
      setTweetList(tweetDispatch,data);
    })
  }

  return (
    <div className={classes.root}>
      <Header title={t("home")} />
      <Divider className={classes.divider}/>
      <NewTweet updateTweets={updateTweets}/>
      <TweetList data={tweets}/>
    </div>
  );
};

export default Home;