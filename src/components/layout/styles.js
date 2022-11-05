import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '89vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#05141c',
  },
  leftSidebar: {
    backgroundColor: '#05141c',
    width : '25%',
  },
  divider :{
    height : '100%',
    width : 1,
    backgroundColor:"#05141c !important",
    filter : "opacity(0.5)"
  },
  content:{
    flex: 1,
    overflowY : 'auto',
    backgroundColor : '#05141c',
    scrollbarWidth : 'none'
  },
  waitParent:{
    display :'flex',
    flexDirection : 'column',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:0,
    left:0,
    width : '100%',
    height:'100vh',
  }
});


export default useStyles;