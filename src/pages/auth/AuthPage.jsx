import {useEffect, useRef, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {loginApi, registerApi} from "../../api/api_auth";
import {useTranslation} from "react-i18next";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import BackGround from "../liveBackground/backGround";
import SocialmediaSection from "./SocialmediaSection";


const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;

const AuthPage = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    const [tab, setTab] = useState(LOGIN_TAB_VALUE);

    //login state
    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();

    //register state
    const [fullNameRegister, setFullNameRegister] = useState();
    const [usernameRegister, setUsernameRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [confPasswordRegister, setConfPasswordRegister] = useState();


    const handleChangeTab = (e, newValue) => {
        setTab(newValue);
    };
// validate login
    const validateLogin = (user) => {
        if (!user.username)
            return t("validate.userName");
        if (!user.password)
            return t("validate.password")
    };
    // validate register
    const validateRegister = (user) => {
        if (!user.username)
            return t("validate.userName");
        if (!user.name)
            return t("validate.name");
        if (!user.password)
            return t("validate.password");
        if (user.password !== user.confPasswordRegister)
            return t("validate.confPassword")
    };
// handle Register
    const handleRegister = () => {
        const user = {
            name: fullNameRegister,
            username: usernameRegister,
            password: passwordRegister,
            confPasswordRegister: confPasswordRegister,
        };
        const error = validateRegister(user);
        if (error)
            return toast.warn(error);
        user.confPasswordRegister = undefined;
        //set local storage after Register
        registerApi(user, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            toast.success(t("success.register"));
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload();
        })
    };
    // handle login
    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        };
        const error = validateLogin(user);
        if (error)
            return toast.warn(error);
        loginApi(user, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            //set local storage after login
            toast.success(t("success.login"));
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload();
        })
    };
    const signInFinder = () => document.getElementById("keyBind").click()

    document.onkeydown = function (ev) {
        ev = ev || window.event;
        switch (ev.which || ev.keyCode) {
            case 13 :
                signInFinder()
                break;
            default :
                break
        }
    };

    const loginInputRef = useRef(null);

    useEffect(()=>{
        loginInputRef.current.click();
    }, []);


    const usernameLoginHandler = e => setUsernameLogin(e.target.value)
    const passwordLoginHandler = e => setPasswordLogin(e.target.value)

    const fullNameRegisterHandler = e => setFullNameRegister(e.target.value)
    const usernameRegisterHandler = e => setUsernameRegister(e.target.value)
    const passwordRegisterHandler = e => setPasswordRegister(e.target.value)
    const confPasswordRegisterHandler = e => setConfPasswordRegister(e.target.value)


    return (
        <div className={classes.main}>
            <Paper className={classes.container}>
                <img className={classes.logo} alt={"twitterIcon"} src={"/images/twitter.png"}/>
                <Tabs
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChangeTab}
                >
                    <Tab label={t("tab.login")} value={LOGIN_TAB_VALUE} className={classes.tab}/>
                    <Tab label={t("tab.register")} value={REG_TAB_VALUE} className={classes.tab}/>
                </Tabs>
                {tab === LOGIN_TAB_VALUE &&
                    <div className={classes.containerInput}>
                        <Typography>{t("label.username")}</Typography>
                        <Input className={"uni_m_b_small"}
                               ref={loginInputRef}  value={usernameLogin} onChange={usernameLoginHandler}
                        >
                        </Input>
                        <Typography>{t("label.password")}</Typography>
                        <Input className={"uni_m_b_small"}
                               value={passwordLogin} onChange={passwordLoginHandler}
                        />
                        <FormControlLabel className={classes.markIcon}
                                          control={<Checkbox color="primary"/>}
                                          label={t("label.reminder")}
                        />
                        <Button id={"keyBind"} variant={"contained"} color="primary"
                                onClick={handleLogin}>
                            {t("btn.login")}
                        </Button>
                    </div>
                }
                {tab === REG_TAB_VALUE &&
                    <div className={classes.containerInput}>
                        <Typography>{t("label.fullName")}</Typography>
                        <Input className={"uni_m_b_small"}
                               value={fullNameRegister} onChange={fullNameRegisterHandler}
                        />
                        <Typography>{t("label.username")}</Typography>
                        <Input className={"uni_m_b_small"}
                               value={usernameRegister} onChange={usernameRegisterHandler}
                        />
                        <Typography>{t("label.password")}</Typography>
                        <Input className={"uni_m_b_small"}
                               value={passwordRegister} onChange={passwordRegisterHandler}
                        />
                        <Typography>{t("label.confPassword")}</Typography>
                        <Input className={"uni_m_b_small"}
                               value={confPasswordRegister} onChange={confPasswordRegisterHandler}
                        />
                        <Button id={"keyBind"} variant={"contained"} color="primary"
                                onClick={handleRegister}>{t("btn.register")}</Button>
                    </div>
                }
                <div className={classes.socialMedia}>
                    <SocialmediaSection/>
                </div>
            </Paper>
            <BackGround/>
        </div>

    );
};

export default AuthPage;
