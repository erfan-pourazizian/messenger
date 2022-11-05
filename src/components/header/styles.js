import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#05141c",
    display: "flex",
    height: "11vh",
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginRight: "0.5rem",
  },
  moreMenu: {
    marginLeft: "0.5rem",
  },
  leftMenu: {
    marginRight: "auto",
  },
  logo: {
    width: "36px",
    height: "36px",
    marginRight: 'auto',
    marginLeft: '1.5rem'
  },
}));

export default useStyles;
