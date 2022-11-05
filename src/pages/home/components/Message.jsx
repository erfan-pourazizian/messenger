import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useStyle from '../styles'
import Typography from "@material-ui/core/Typography";
import { likeMessage, setMessageText, useMessageDispatch } from "../../../context/MessageContext";
import { likeMessageRequest } from "../../../api/api_messages";
import { toast } from "react-toastify";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import moment from 'jalali-moment'


const Message = ({ data }) => {

    const messageDispatch = useMessageDispatch();
    //  make after # text blue
    const renderMessage = (text) => {
        return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>") };
    };
    // set profile if user have it
    const getImage = () => {
        if (data.user.image)
            return data.user.image;
        else return "/images/person.png";
    };
    // handle messages like
    const handleLike = () => {
        likeMessageRequest(data._id, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            likeMessage(messageDispatch, data._id);
        });
    }

    // SnackBar
    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
    }

    const [state, setState] = useState({
        open: false,
    });
    // copy button setState
    const copyClick = () => {
        setMessageText(messageDispatch, data.text);
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
        <div className={classes.messageItem}>
            <Grid container>
                <img className={classes.profile} src={getImage()} alt={"sender_photo"} />
                <Grid item container className={classes.messageContainer} direction={"column"} >
                    <Grid item container>
                        <Typography className={classes.messageItemName}>{data.user.name}</Typography>
                        <Typography className={classes.messageItemId}>{data.user.username}@</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderMessage(data.text)} className={classes.messageText}
                        component={"p"} />
                </Grid>
                    {
                        data.image &&
                        <img src={data.image} className={classes.messageImg} alt={"messagePhoto"}></img>
                    }
            </Grid>
            <Grid container className={classes.copyGrid} direction={"row-reverse"}>
                <IconButton className={classes.newMessageImgBtn} onClick={copyClick}>
                    <img src={"/images/copy.png"} className={classes.newMessageImg} alt={"copy"} />
                </IconButton>
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={SlideTransition}
                    message="پیام مورد نظر جای گذاری شد"
                    autoHideDuration={5000}
                    className={classes.Snackbar}
                />
                <FormControlLabel className={classes.newMessageLike} control={<Checkbox
                    onClick={handleLike}
                    icon={<FavoriteBorder className={classes.newMessageLike_icon} />}
                    checkedIcon={<Favorite />} />} />
                <Typography className={classes.likeCount}>{data.likes}</Typography>
                <Typography className={classes.date}>
                {moment(data.date, 'YYYY/MM/DD').format('YYYY/MM/DD')}
                </Typography>
            </Grid>
        </div>
    );
};

export default Message;