import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useStyle from './styles';
import Grid from "@material-ui/core/Grid";


function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const classes = useStyle();
  // get profile
  const getImage = () => {
    if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image");
    return "/images/person.png"
  };

  return (
    <Dialog sx={{ direction: 'ltr' }} onClose={handleClose} open={open}>
      <DialogTitle sx={{ color: 'black' }}>Account details</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button onClick={() => handleListItemClick()}>
          <img src={getImage()} alt="profile" className={classes.dialogProfile} />
          <ListItemText disableTypography primary={
            <Typography sx={{ color: 'black', marginLeft: '1rem' }}>
              {localStorage.getItem("username")}
            </Typography>} />
        </ListItem>

        <ListItem button onClick={() => {
          localStorage.clear();
          window.location.reload()
        }}>
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText disableTypography primary={
          <Typography sx={{ color: 'black' }}>
            Change Account
          </Typography>} />
      </ListItem>
    </List>
    </Dialog >
  );
}


export default function ProfileDialog() {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const classes = useStyle();

  // get profile
  const getImage = () => {
    if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image");
    return "/images/person.png"
  };

  return (
    <div>
      <Grid container className={classes.container} onClick={handleClickOpen}>
        <img src="/images/arrow.png" className={classes.arrow} alt="arrow" />
        <Typography injectFirst className={classes.user}>
          {localStorage.getItem("username")}
        </Typography>
        <img src={getImage()} className={classes.profile} alt={"profile"} />
      </Grid>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
