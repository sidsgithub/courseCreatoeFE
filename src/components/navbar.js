import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { loggedOut } from "../actions/navbarAction";
import { useDispatch  } from "react-redux";
import { userloggedOut } from '../actions/userAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(isAuth) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onClickLogout=()=>{
    dispatch(loggedOut())
    dispatch(userloggedOut())
  }

  return (
    <div className={classes.root}>
      {isAuth.isAuth ? (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Link href="/" color="inherit" onClick={onClickLogout} >Logout</Link>
          </Toolbar>
        </AppBar> 
      ) : (
        null
      )}
    </div>
  );
}

