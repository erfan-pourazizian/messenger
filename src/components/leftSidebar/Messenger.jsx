import useStyle from "./styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from '@mui/material';

export const Messenger = ({ name, id, img }) => {
    const classes = useStyle();
    // show profile photo if exist
    const getImage = () => {
        if (img)
            return img;
        return "/images/person.png"
    }
    return (
        <ButtonBase className={classes.eachBestUser}>
            <Grid container direction={"row"} className={classes.messengerParent}>
                <img src={getImage()} className={classes.messageImg} alt={"profile"} />
                <Grid item container direction={"column"}
                    className={classes.messengerNameParent}>
                    <Typography className={classes.peopleProfName}>{name}</Typography>
                    <Typography className={classes.peopleProfId}>@{id}</Typography>
                </Grid>
                <Button injectFirst className={classes.messengerButton} variant="contained">مشاهده</Button>
            </Grid>
        </ButtonBase>
    )
}