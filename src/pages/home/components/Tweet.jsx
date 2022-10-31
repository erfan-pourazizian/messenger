import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useStyle from '../styles'
import Typography from "@material-ui/core/Typography";
import { likeTweet, setTweetText, useTweetDispatch } from "../../../context/TweetContext";
import { likeTweetRequest } from "../../../api/api_tweet";
import { toast } from "react-toastify";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


const Tweet = ({ data }) => {

    const tweetDispatch = useTweetDispatch();
    //  make after # text blue
    const renderTweet = (text) => {
        return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>") };
    };
    // set profile if user have it
    const getImage = () => {
        if (data.user.image)
            return data.user.image;
        else return "/images/person.png";
    };
    // handle tweets like
    const handleLike = () => {
        likeTweetRequest(data._id, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            likeTweet(tweetDispatch, data._id);
        });
    }

    // SnackBar
    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
    }

    const [state, setState] = useState({
        open: false,
    });
    // retweet button setState
    const retweetClick = () => {
        setTweetText(tweetDispatch, data.text);
        setState({
            open: true,
        });
    }
    // handle SnackBar close
    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    const classes = useStyle();
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img className={classes.profile} src={getImage()} alt={"sender_photo"} />
                <Grid item container className={classes.tweetContainer} direction={"column"} >
                    <Grid item container>
                        <Typography className={classes.tweetItemName}>{data.user.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.user.username}@</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText}
                        component={"p"} />
                    {
                        data.image &&
                        <img src={data.image} className={classes.tweetImg} alt={"tweetPhoto"}></img>
                    }
                </Grid>
            </Grid>
            <Grid container className={classes.retweetGrid} direction={"row-reverse"}>
                <IconButton className={classes.newTweetImgBtn} onClick={retweetClick}>
                    <img src={"/images/copy.png"} className={classes.newTweetImg} alt={"retweet"} />
                </IconButton>
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={SlideTransition}
                    message="پیام مورد نظر جای گذاری شد"
                    autoHideDuration={5000}
                    className={classes.Snackbar}
                />
                <FormControlLabel className={classes.newTweetLike} control={<Checkbox
                    onClick={handleLike}
                    icon={<FavoriteBorder className={classes.newTweetLike_icon} />}
                    checkedIcon={<Favorite />} />} />
                <Typography className={classes.likeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    );
};

export default Tweet;