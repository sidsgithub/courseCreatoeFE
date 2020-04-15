import React from "react";
// import '~video-react/dist/video-react.css';
import { Player } from "video-react";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ComputerIcon from "@material-ui/icons/Computer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: 10,
  },
  player: {
    float:"left",
    width: "50%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
  },
  list: {
    marginLeft:"30",
    float:"left",
    display: "flex",
    justifyContent: "center",
    flexWrap:"nowrap"
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Course() {
  const classes = useStyles();
  const handleOnClickCourseTitle = () => {
    console.log("we can edit the course title here as well as add topics.");
  };
  return (
    <div>
      <Chip
        className={classes.root}
        icon={<ComputerIcon />}
        label="course Title"
        onClick={handleOnClickCourseTitle}
        // onDelete={handleDelete}
        variant="outlined"
      />
      <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      />
      <br />
      <div>
        <div className={classes.player}>
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <div className={classes.list}>
          <List>
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </div>
      </div>
      <div className={classes.list}>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemLink>
        </List> */}
      </div>
      <div className={classes.player}>
        {/* <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
      </div>
    </div>
  );
}
export default Course;

/* 
course edits here
adding topics to course
editing topics and deleting topic

*/
