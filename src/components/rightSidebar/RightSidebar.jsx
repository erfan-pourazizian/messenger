import {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import {getHashTags} from "../../api/api_messages";
import {setHashTagList, useMessageDispatch, useMessageState} from "../../context/MessageContext";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {Chip} from "@material-ui/core";


const RightSidebar = () => {
    const {t} = useTranslation();
    const classes = useStyle();
    const {hashTags} = useMessageState();
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

    const chipSelector = document.getElementById('chip')
    const handleDelete = () => {
        chipSelector.style.display = 'none'
    }
    return (
        <div className={classes.root}>
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
            <Chip
                id={'chip'}
                className={classes.chip}
                label={t("label.messengerGuide")}
                onDelete={handleDelete}
                color="primary"/>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTags.slice(0, 15).map((item, index) => <ButtonBase key={index}
                                                                           className={classes.hashTagParent}>
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