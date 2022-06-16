import React from 'react';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import {useTranslation} from "react-i18next";

const SocialmediaSection = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div>
            <Divider variant={"middle"} className={classes.divider}/>
            <Typography className={classes.dividerText}> {t("label.or")}</Typography>
            <div className={classes.iconsParent}>
                <a href={"https://www.instagram.com/mr.pourazizan/"}>
                    <img className={classes.icon} alt={"instagram-Icon"} src={"/images/instagram.png"}/>
                </a>
                <a href = {"mailto: erfan8202@gmail.com"}>
                    <img className={classes.icon} alt={"google-Icon"} src={"/images/google.png"}/>
                </a>
                <a href={"https://ir.linkedin.com/in/erfan-pourazizian"}>
                    <img className={classes.icon} alt={"linkedin-Icon"} src={"/images/linkedin.png"}/>
                </a>
                <a href={"https://github.com/Enzo8202"}>
                    <img className={classes.icon} alt={"github-Icon"} src={"/images/github.png"}/>
                </a>
            </div>
        </div>
    );
};

export default SocialmediaSection;