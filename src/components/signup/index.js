import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import handleSignUp from "../../container/signup";
import useStyles from "./useStyles";

export default function SignUp() {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [role,setRole] = useState("student");

  const [formValues, setFormValues] = useState({
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleOnChange = (event, name) => {
    const newformValues = formValues
    switch (name) {
      case "role":
        const role = event.target.value;
        newformValues.role = role;
        setFormValues(newformValues);
        setRole(role);
        break;
      case "firstName":
        const firstName = event.target.value;
        newformValues.firstName = firstName;
        setFormValues(newformValues);
        break;
      case "lastName":
        const lastName = event.target.value;
        newformValues.lastName = lastName;
        setFormValues(newformValues);
        break;
      case "email":
        const email = event.target.value;
        newformValues.email = email;
        setFormValues(newformValues);
        break;
      case "password":
        const password = event.target.value;
        newformValues.password = password;
        setFormValues(newformValues);
        break;
      default:
        break;
    }
  };
  const onClickSubmit = () => {
    const user = {
      name: formValues.firstName + " " + formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
    };
    console.log(user);
    // setFormValues({
    //   role: "student",
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    // })
    handleSignUp(user);
    setOpen(true);
  };

  console.log(formValues)

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
                onChange={(e)=>handleOnChange(e,"firstName") }
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
              
                onChange={(e)=>handleOnChange(e,"lastName") }
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
                
                onChange={(e)=>handleOnChange(e,"email") }
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
                
                onChange={(e)=>handleOnChange(e,"password") }
              />
            </Grid>
            <Grid>
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={(e)=>handleOnChange(e,"role") }
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
            type="submit"
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
              <Link href="/signin" variant="body2">
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
    </Container>
  );
}
