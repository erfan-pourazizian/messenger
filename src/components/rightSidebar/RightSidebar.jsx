import { useEffect } from 'react';
import Typography from "@material-ui/core/Typography";
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import { getHashTags } from "../../api/api_messages";
import { setHashTagList, useMessageDispatch, useMessageState } from "../../context/MessageContext";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";



const RightSidebar = () => {
    const { t } = useTranslation();
    const classes = useStyle();
    const { hashTags } = useMessageState();
    const messageDispatch = useMessageDispatch();
    //  fetch hashtags
    useEffect(() => {
        getHashTags((isOk, data) => {
            if (!isOk)
                return toast.error(t("error.hashTagFetch"));
            setHashTagList(messageDispatch, data);
        })
    },
        // eslint-disable-next-line
        []);

    return (
        <div className={classes.root}>
            <Typography className={classes.hashTagTitle}>
                {t("hashTagTitle")}
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTags.slice(0, 10).map((item, index) => (
                        <ButtonBase key={index}
                            className={classes.hashTagParent}>
                            <Link to={"/hashtags/" + item.text} style={{ width: '100%' }}>
                                <Grid item container >
                                    <Grid item>
                                    <Typography className={classes.hashtag}>
                                        #{item.text}
                                    </Typography>
                                    <Typography className={classes.count}>
                                     {item.count + ' ' + t("message")} 
                                    </Typography>
                                    </Grid>
                                    <img className={classes.more} src="/images/more.png" alt="more" />
                                </Grid>
                            </Link>
                        </ButtonBase>
                    ))}
            </Grid>
        </div>
    );
};

export default RightSidebar;