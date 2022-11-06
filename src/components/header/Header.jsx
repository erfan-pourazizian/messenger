import useStyle from './styles'
import { useMediaQuery, useTheme } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import GroupIcon from '@material-ui/icons/Group';
import { toggleDrawer, toggleLeftDrawer, useLayoutDispatch } from "../../context/LayoutContext";
import ProfileDialog from './ProfileDialog';
import Divider from "@material-ui/core/Divider";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from "react-i18next";

const Header = ({ title }) => {
    const theme = useTheme()
    // responsive for phone and tablet
    const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"))
    const isPhoneSize = useMediaQuery(theme.breakpoints.down("xs"))

    const classes = useStyle();
    const layoutDispatch = useLayoutDispatch();

    const handleRightToggle = () => toggleDrawer(layoutDispatch)
    const handleLeftToggle = () => toggleLeftDrawer(layoutDispatch)

    // change language
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        if (i18n.language === "fa") {
            localStorage.setItem("lang", "en");
            i18n.changeLanguage("en");
        } else {
            localStorage.setItem("lang", "fa");
            i18n.changeLanguage("fa");
        }
    };

    return (
        <div className={classes.header}>
            {/*just show icon for tablet drawer*/}
            {isTabletSize && (
                <iconButton onClick={handleRightToggle} className={classes.moreMenu} >
                    <MenuRoundedIcon color="secondary" />
                </iconButton>
            )}

            <ProfileDialog />

            <Divider orientation={"vertical"} className={classes.divider} />

            <Badge color="secondary" badgeContent=" " variant="dot" overlap="circular" sx={{ marginRight: '1rem' }}>
                <NotificationsIcon sx={{ color: '#c7d6e5', padding: '2px 4px'}} />
            </Badge>

            <TranslateIcon sx={{ color: '#c7d6e5', marginRight: '1rem', cursor: 'pointer' }} onClick={() => {
                changeLang()
            }}/>

                <img className={classes.logo} src={"/images/logo.png"} alt={"logo"} />

                {/*just show icon for phone  drawer*/}
                {isPhoneSize && (
                    <iconButton onClick={handleLeftToggle} className={classes.leftMenu}>
                        <GroupIcon color="secondary" />
                    </iconButton>
                )}
        </div>
    );
};

export default Header;