import {useEffect, useState} from 'react';
import useStyle from './styles'
import RightSidebar from "../rightSidebar/RightSidebar";
import Divider from "@material-ui/core/Divider";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import {getProfileRequest} from "../../api/api_auth";
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom'
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import {useMediaQuery, useTheme} from "@material-ui/core";
import MessengerDrawer from "../Drawer/MessengerDrawer";
import LeftSideDrawer from "../Drawer/LeftSideDrawer";
import Header from "../header/Header"


const Layout = (props) => {
    const classes = useStyle();
    const history = useHistory();
    const theme = useTheme();
    const {t} = useTranslation();
    // responsive for phone and tablet
    const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));
    const isPhoneSize = useMediaQuery(theme.breakpoints.down("xs"))
    // set Loading
    const [wait, setWait] = useState(true);

    useEffect(() => {
            getProfileRequest((isOk, data) => {
                if (!isOk) {
                    toast.error(data);
                    localStorage.clear();
                    return history.push("/login")
                }
                setWait(false);
                localStorage.setItem("name", data.name);
                localStorage.setItem("image", data.image);
                localStorage.setItem("username", data.username);
                localStorage.setItem("x-auth-token", data["x-auth-token"]);
            })
        },
        // eslint-disable-next-line
        [])
    // show circular progress until get response from api
    if (wait)
        return <div className={classes.waitParent}>
            <CircularProgress className={"uni_m_b_small"}/>
            <Typography>{t("wait")}</Typography>
        </div>;
    else
        return (
            <>
                <Header title={t("home")} />
            <div className={classes.root}>
                {/*collapse  right sidebar for tablet view*/}
                {isTabletSize ? <MessengerDrawer/> : <RightSidebar/>}
                <Divider orientation={"vertical"} className={classes.divider}/>
                <div className={classes.content}>
                    {props.children}
                </div>
                <Divider orientation={"vertical"} className={classes.divider}/>
                {/*collapse left sidebar for phone view*/}
                {isPhoneSize ? <LeftSideDrawer/> : <LeftSidebar/>}
            </div>
            </>
        )};

export default Layout;