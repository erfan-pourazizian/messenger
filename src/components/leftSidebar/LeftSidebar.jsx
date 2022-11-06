import { useEffect, useRef, useState } from 'react';
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { getUsers } from "../../api/api_messages";
import { uploadUserPhoto } from "../../api/api_auth";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Messenger } from "./Messenger";
import { Button } from '@mui/material';



const LeftSidebar = () => {
    const { t } = useTranslation();
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const inputRef = useRef();

    // get left side users(best sub)
    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk)
                return toast.error(t("error.userFetchError"));
            setUsers(data);
        })
    },
        // eslint-disable-next-line
        []);
    // set profile photo(avatar)
    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0])

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            const formData = new FormData();
            formData.append("image", e.target.files[0]);
            uploadUserPhoto(formData, (isOk, data) => {
                if (!isOk)
                    return toast.error(data);
                toast.success(t("success.uploadProfPic"))
                localStorage.setItem("image", data.imagePath);
            })
        }
    };

    // get profile
    const getImage = () => {
        if (imagePath)
            return imagePath;
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image");
        return "/images/user-profiles.png"
    };


    const classes = useStyle();
    return (
        <div className={classes.root}>

            <div className={classes.menuContainer}>
                <img src="/images/avatar-background.jpg" alt="avatar-background" className={classes.avatar_background} >
                </img>
                <img src={getImage()} className={classes.profile} alt={"profile"} />
                <Grid item container direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>@{localStorage.getItem("username")}</Typography>
                </Grid>
                <Divider className={classes.divider} />
                <div className={classes.profButton}>
                    <Button sx={{textTransform: 'initial'}} variant="text" onClick={() => {
                        inputRef.current.click();
                    }}>My Profile</Button>
                </div>
                <input ref={inputRef} type={'file'} className={classes.fileInput} onChange={handleAvatarChange} />
            </div>

            <Grid item container direction={"column"} className={classes.messengerRoot}>
                <div className={classes.bestSub}>
                    <Typography className={classes.messengerTitle}>
                        {t("peopleYouMightKnow")}
                    </Typography>
                </div>
                {/*map server info for set id,name,img in messenger func*/}
                {
                    users.slice(0, 5).map((item, index) => {
                        return (
                            <Link key={index} to={`/users/${item._id}/${item.name}`} className={classes.messages}>
                                <Messenger name={item.name} id={item.username} img={item.image} />
                            </Link>)
                    })
                }
            </Grid>
        </div>
    );
};

export default LeftSidebar;