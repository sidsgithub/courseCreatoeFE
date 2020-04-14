import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  courseButton: {
    margin: "10",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  const [secondary, setSecondary] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateCourse = () => {
    setState(true);
  };
  const handleSubmitCourse = () => {
    setState(false);
    //send the title and course description to the array of courses.
    console.log(title, description);
    //course will take a title, description and userId.
    
  };

  return (
    <div className={classes.root}>
      <Fab
        variant="extended"
        onClick={handleCreateCourse}
        className={classes.courseButton}
      >
        Create Course{" "}
      </Fab>
      {state ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  onChange={onChangeTitle}
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  onChange={onChangeDescription}
                />
                <Button variant="contained" onClick={handleSubmitCourse}>
                  Default
                </Button>
              </form>
            </Typography>
          </CardContent>
        </Card>
      ) : null}

      {/* list */}
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="View Course Description"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Courses
          </Typography>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
