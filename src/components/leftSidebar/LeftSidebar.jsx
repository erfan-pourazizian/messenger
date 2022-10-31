import {useEffect, useRef, useState} from 'react';
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import {getUsers} from "../../api/api_tweet";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {uploadUserPhoto} from "../../api/api_auth";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {Tweeter} from "./Tweeter";
import {Chip} from "@material-ui/core";


const LeftSidebar = () => {
    const {t, i18n} = useTranslation();
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const [anchorMenu, setAnchorMenu] = useState();
    const inputRef = useRef();

    // get left side users(best tweeters)
    useEffect(() => {
            getUsers((isOk, data) => {
                if (!isOk)
                    return toast.error(t("error.userFetchError"));
                setUsers(data);
            })
        },
        // eslint-disable-next-line
        []);
// setting menu
    const handleToggleMenu = (e) => {
        if (anchorMenu)
            setAnchorMenu(null);
        else
            setAnchorMenu(e.currentTarget);
    };
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
// change language
    const changeLang = () => {
        if (i18n.language === "fa") {
            localStorage.setItem("lang", "en");
            i18n.changeLanguage("en");
        } else {
            localStorage.setItem("lang", "fa");
            i18n.changeLanguage("fa");
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

    const chipSelector = document.getElementById('leftChip')
    const handleDelete = () => {
        chipSelector.style.display = 'none'
    }

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu} className={classes.menuContainer}>
                <img src={getImage()} className={classes.profile} alt={"profile"}/>
                <Grid item container direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
                </Grid>
                <img className={classes.settingIcon} alt={"setting-img"} src={"/images/setting.png"}/>
                <input ref={inputRef} type={'file'} className={classes.fileInput} onChange={handleAvatarChange}/>
            </Grid>
            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>
                    {t("userListTitle")}
                </Typography>
                <Chip
                    id={'leftChip'}
                    className={classes.chip}
                    label={t("label.hashtagGuide")}
                    onDelete={handleDelete}
                    color="primary"/>
                {/*map server info for set id,name,img in tweeter func*/}
                {
                    users.slice(0, 20).map((item, index) => {
                        return (
                            <Link key={index} to={`/users/${item._id}/${item.name}`} className={classes.tweeters}>
                                <Tweeter name={item.name} id={item.username} img={item.image}/>
                                {index !== 8 && <Divider/>}
                            </Link>)
                    })
                }
            </Grid>
            {/*menu setting*/}
            <Menu open={Boolean(anchorMenu)} onClose={() => setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={() => {
                    inputRef.current.click();
                }}>{t("editProfilePhotoMenu")}</MenuItem>
                <MenuItem onClick={() => {
                    changeLang()
                }}>{t("changeLangMenu")}</MenuItem>
                <MenuItem onClick={() => {
                    localStorage.clear();
                    window.location.reload()
                }}>{t("logoutMenu")}</MenuItem>
            </Menu>
        </div>
    );
};

export default LeftSidebar;