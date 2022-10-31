import useStyle from "./styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Tweeter = ({name, id, img}) => {
    const classes = useStyle();
    // show profile photo if exist
    const getImage = () => {
        if (img)
            return img;
        return "/images/person.png"
    }

    return <ButtonBase className={classes.eachBestUser}>
        <Grid container direction={"row"} className={classes.tweeterParent}>
            <img src={getImage()} className={classes.twitterImg} alt={"profile"}/>
            <Grid item container direction={"column"}
                  className={classes.tweeterNameParent}>
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>@{id}</Typography>
            </Grid>
        </Grid>
    </ButtonBase>
}