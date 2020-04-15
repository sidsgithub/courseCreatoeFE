import React, { useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Link from '@material-ui/core/Link';
import ListItem from "@material-ui/core/ListItem";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { handleOnCreateCourse, handleAllCourses, handleOnDeleteCourse } from "../container/home";
import { useSelector } from "react-redux";
import updateCourse from '../actions/courseAction'
import { useDispatch  } from "react-redux";


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
  title: {
    flexGrow: 1,
    textDecorationLine:"none"
  },
}));

export default function Home() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  const [viewCourse, setViewCourse] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  const userId = useSelector((state) => state.users.obj.user);

  useEffect( function effectFunction(){
    handleAllCourses(userId)
      .then( (r) => dispatch(updateCourse(r.data.courses) ) )
  }
    ) 
  
  const handleCreateCourse = () => {
    setState(!state);
  };
  const handleViewCourse = () => {
    setViewCourse(!viewCourse);
  };
  const handleSubmitCourse = () => {
    handleOnCreateCourse(userId, title, description);
    setState(false);
  };

  const handleDeleteCourse =(courseId)=>{
    handleOnDeleteCourse(userId,courseId)
  }

  const handleCourseClick = ()=>{

  }

  return (
    <div className={classes.root}>
      <Fab
        variant="extended"
        onClick={handleCreateCourse}
        className={classes.courseButton}
      >
        Create Course{" "}
      </Fab>
      <Fab
        variant="extended"
        onClick={handleViewCourse}
        className={classes.courseButton}
      >
        View Courses{" "}
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
                  onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  onChange={(e)=>setDescription(e.target.value)}
                />
                <Typography className={classes.root}>

                <Button variant="body2" onClick={handleSubmitCourse}>
                  Create
                </Button>
                </Typography>
              </form>
            </Typography>
          </CardContent>
        </Card>
      ) : null}
      {viewCourse ? (
        <div>
          <FormGroup row></FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                Courses
              </Typography>
              <div className={classes.demo}>
                <List>
                  {courses.map((course) => (
                    <ListItem>
                      <Typography variant="h6" className={classes.title}>
                      <Link href="/course" color="primary" onClick={handleCourseClick} className={classes.link}>
                        {course.title}
                      </Link>
                      </Typography>
                      <Button color="secondary" onClick={()=>handleDeleteCourse(course.id)}>Delete</Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}