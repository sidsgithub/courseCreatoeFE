import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateCourse } from "../../../actions/courseAction";

//local imports
import useStyles from "../useStyles";

//imports from material UI.
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

//imports for utility functions
import { handleEditCourse, handleDeleteCourse } from "../utils";

function CourseMap(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.users.obj.role);
  const userId = useSelector((state) => state.users.obj.user);

  //selecting a course
  const handleCourseClick = (course) => {
    dispatch(activateCourse(course));
  };

  return (
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
              onClick={() => handleCourseClick(props.course)}
              className={classes.link}
            >
              {props.course.title}
            </Link>
          </Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Typography className={classes.pos} color="textSecondary">
            Description
          </Typography>
          <Typography variant="body2" component="p">
            {props.course.description}
          </Typography>
        </CardContent>
        <CardActions>
          {role === 2 ? (
            <Button
              color="secondary"
              onClick={() =>
                handleEditCourse(
                  props.setCourseId,
                  props.setModalOpen,
                  props.course.id
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
                  props.course.id,
                  userId,
                  props.courses,
                  props.setCourses
                )
              }
            >
              Delete
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CourseMap;
