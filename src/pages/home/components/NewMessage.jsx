import React, {useEffect, useRef} from 'react';
import useStyle from '../styles'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import classnames from 'classnames'
import {newMessageRequest} from "../../../api/api_messages";
import {toast} from "react-toastify";
import {
    setMessageText as setMessage,
    updateHashTagList,
    useMessageDispatch,
    useMessageState
} from "../../../context/MessageContext";
import {useTranslation} from "react-i18next";

const NewMessage = ({updateMessages}) => {

    const inputFile = React.useRef();

    const {t} = useTranslation();
    const {messageText: message} = useMessageState();
    const messageDispatch = useMessageDispatch();
    const [imageFile, setImageFile] = React.useState();
    const [imagePath, setImagePath] = React.useState();

// send message
    const newMessageClick = () => {
        const messageText = message;
        if (!messageText)
            return;
        const formData = new FormData();
        formData.append("text", messageText);
        if (imageFile)
            formData.append("image", imageFile);
        newMessageRequest(formData, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            toast.success(t("success.newMessage"));
            updateMessages();
            setMessage(messageDispatch, "");
            setImagePath();
            setImageFile();
            if (messageText.includes("#"))
                updateHashTagList(messageDispatch);
        })
    };
// get profile for message
    const getImage = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image");
        return "/images/person.png"
    };

    const onChangeImg = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const selectImg = () => {
        inputFile.current.click();
    };
    // add enter keybind for newPost
    const newMessageFinder = () => document.getElementById("newMessageBtn").click()

    document.onkeydown = function (ev) {
        ev = ev || window.event;
        switch (ev.which || ev.keyCode) {
            case 13 : newMessageFinder()
                break;
            default:
                break
        }
    };

    const messageInputRef = useRef(null);

    useEffect(()=>{
        messageInputRef.current.focus();
    }, []);

   const messageHandler = e => setMessage(messageDispatch, e.target.value)

    const classes = useStyle();
    return (
        <div className={classes.newMessage}>
            <Grid container>
                <img src={getImage()}  className={classes.messengerProfile} alt={"sender_photo"}/>
                <input placeholder={t("label.doMessage")} ref={messageInputRef} className={classnames(classes.input)}
                       value={message} onChange={messageHandler}
                />
                <input type={"file"} style={{display: 'none'}} ref={inputFile} onChange={onChangeImg}/>
            </Grid>
            {
                imagePath &&
                <div>
                    <div style={{backgroundImage: `url(${imagePath})`}} className={classes.messageImg}/>
                </div>
            }
            <Grid container direction={"row-reverse"}className={classes.buttonSection}>
                <Button id={"newMessageBtn"} variant={"contained"} color={"primary"}
                        className={classes.newMessageBtn} onClick={newMessageClick}>{t("btn.message")}</Button>
                <IconButton className={classes.newMessageImgBtn} onClick={selectImg}>
                    <img src={"/images/gallery.png"}  alt={"gallery"}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewMessage;