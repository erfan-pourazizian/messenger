import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import {getHashTags} from "../../api/api_tweet";
import {setHashTagList, useTweetDispatch, useTweetState} from "../../context/TweetContext";
import { toast} from "react-toastify";
import {useTranslation} from "react-i18next";


const RightSidebar = () => {
  const {t} = useTranslation();
  const classes = useStyle();
  const {hashTags} = useTweetState();
  const tweetDispatch = useTweetDispatch();
  //  fetch hashtags
  useEffect(() => {
    getHashTags((isOk, data) => {
      if (!isOk)
        return toast.error(t("error.hashTagFetch"));
      setHashTagList(tweetDispatch,data);
    })
  },
       // eslint-disable-next-line
      []);
  return (
    <div className={classes.root} >
      <Link to={"/"}>
        <Grid container direction={"row"} alignItems={'center'}>
          <Grid item>
            <img src={"/images/logo.png"} alt={"logo"}/>
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>
              {t("appName")}
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>
        {t("hashTagTitle")}
      </Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {
          hashTags.slice(0,15).map(item => <ButtonBase className={classes.hashTagParent}>
              <Link to={"/hashtags/" + item.text} style={{width: '100%'}}>
                <Grid item container>
                  <img src={"/images/hashtag.png"} alt={"hashtag"}/>
                  <Typography className={classes.hashtag}>
                    {item.text}
                  </Typography>
                </Grid>
              </Link>
            </ButtonBase>
          )
        }
      </Grid>
    </div>
  );
};

export default RightSidebar;