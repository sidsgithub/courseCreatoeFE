import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'; 
import { Redirect } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  radio : {
    flexDirection : "row",
    paddingLeft : 10
  }
}));

export default function SignUp() {

  const classes = useStyles();

  const [role, setRole] = useState("student");
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect,setRedirect] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleOnchangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleOnchangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickSubmit = () => {
    // here we will persist the data in the database and on "Success" we will redirect to signIn.
    //for now lets persist the object in localStorage 
    const user= {
      name : firstName +" "+ lastName,
      email ,
      password,
      role
    }
    localStorage.setItem("user",JSON.stringify(user));
    if(localStorage.getItem("user") ){
      console.log("user")
    }
    setOpen(true);
    setRedirect(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => handleOnchangeFirstName(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => handleOnchangeLastName(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => handleOnchangeEmail(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handleOnchangePassword(e)}
              />
            </Grid>
            <Grid>
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={handleChange}
                className={classes.radio}

              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="Student"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Administrator"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onClickSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          Sucessfully Signed Up!
        </MuiAlert>
      </Snackbar>
      </div>
      {redirect && <Redirect to ="/signin" />}
    </Container>
  );
}
