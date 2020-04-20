import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activateCourse } from "../../actions/courseAction";
import { handleAllCourses } from "../../container/home";
//imports from material UI.
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
//local imports 
import getModalStyle from "./getModalStyle";
import useStyles from "./useStyles";
//imports for utility functions
import {
  handleOpenCreateCourseCard,
  handleSubmitCourse,
  handleEditCourse,
  handleSubmitTitle,
  handleDeleteCourse,
  handleClose,
  handleCreateCourseClose,
} from "./utils";

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.users.obj.user);
  const role = useSelector((state) => state.users.obj.role);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenCreateCourse, setModalOpenCreateCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courseTitle, setCourseTitle] = useState();
  const [courseId, setCourseId] = useState();
  const [modalStyle] = useState(getModalStyle);

  //onMount, load courses.
  useEffect(() => {
    handleAllCourses(userId).then((response) =>
      setCourses(response.data.courses)
    );
    // console.log("on mount", courses);
  }, [userId,setCourses]);

  //load this effect whenever courses are updated.
  useEffect(() => {
    console.log("courses are updated : ", courses);
  }, [courses]);

  //selecting a course
  const handleCourseClick = (course) => {
    dispatch(activateCourse(course));
  };

  //modal for updating course title
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <TextField
          id="standard-basic"
          label="Enter Title"
          autoFocus="true"
          onChange={(e) => setCourseTitle(e.target.value)}
        />
        <Button
          onClick={() =>
            handleSubmitTitle(
              userId,
              courseId,
              courseTitle,
              courses,
              setCourses,
              setModalOpen
            )
          }
        >
          submit
        </Button>
      </div>
    </div>
  );

  //modal for create course
  const createCourseBody = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          autoFocus="true"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="body2"
          onClick={() =>
            handleSubmitCourse(
              userId,
              title,
              description,
              courses,
              setCourses,
              setModalOpenCreateCourse
            )
          }
        >
          Create
        </Button>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      {role === 2 ? (
        <Fab
          variant="extended"
          onClick={() => handleOpenCreateCourseCard(setModalOpenCreateCourse)}
          className={classes.courseButton}
        >
          Create Course{" "}
        </Fab>
      ) : null}
      <div>
        {/*  */}
        <Chip style={{ margin: "2%" }} label=" COURSES : " />
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              {courses.map((course, key) => (
                <Grid item>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Link
                          href="/course"
                          color="primary"
                          onClick={() => handleCourseClick(course)}
                          className={classes.link}
                        >
                          {course.title}
                        </Link>
                      </Typography>
                      <Typography variant="h5" component="h2"></Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Description
                      </Typography>
                      <Typography variant="body2" component="p">
                        {course.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {role === 2 ? (
                        <Button
                          color="secondary"
                          onClick={() =>
                            handleEditCourse(
                              setCourseId,
                              setModalOpen,
                              course.id
                            )
                          }
                        >
                          Edit
                        </Button>
                      ) : null}

                      {role === 2 ? (
                        <Button
                          color="secondary"
                          onClick={() =>
                            handleDeleteCourse(
                              course.id,
                              userId,
                              courses,
                              setCourses
                            )
                          }
                        >
                          Delete
                        </Button>
                      ) : null}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/*  */}
      </div>

      <Modal
        open={modalOpen}
        onClose={() => handleClose(setModalOpen)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Modal
        open={modalOpenCreateCourse}
        onClose={() => handleCreateCourseClose(modalOpenCreateCourse)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {createCourseBody}
      </Modal>
    </div>
  );
}
