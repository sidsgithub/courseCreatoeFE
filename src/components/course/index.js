import React, { useEffect, useState } from "react";
import { Player } from "video-react";
import { useSelector } from "react-redux";
import ReusableComponent from "../reusable";
//helpers for Topics
import {
  handleListTopics,
  handleListWatchedTopics,
} from "../../container/course";
// material UI imports
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Checkbox from "@material-ui/core/Checkbox";
import ComputerIcon from "@material-ui/icons/Computer";
import useStyles from "./useStyles";
import getModalStyle from "../home/getModalStyle";

//utility functions.
import {
  handleAddTopic,
  handleSubmitTopicTitle,
  handleSubmitAddTopic,
  onClickCheck,
} from "./utils";

import Topic from "./topic/index";

function Course() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const role = useSelector((state) => state.users.obj.role);
  const userId = useSelector((state) => state.users.obj.user);
  const courseId = useSelector((state) => state.course.activeCourse.id);
  const courseTitle = useSelector((state) => state.course.activeCourse.title);
  const courseDescription = useSelector(
    (state) => state.course.activeCourse.description
  );
  const [topics, setTopics] = useState([]);
  const [openTopicModal, setOpenTopicModal] = useState(false);
  const [topicTitle, setTopicTitle] = useState();
  const [openAddSubtopicModal, setOpenAddSubtopicModal] = useState(false);
  const [topicId, setTopicId] = useState();
  const [subTopicTitle, setSubTopicTitle] = useState();
  const [url, setUrl] = useState();
  const [expansion, setExpansion] = useState(`panel_`);
  const [subtopics, setSubtopics] = useState([]);
  const [watchedTopics, setWatchedTopics] = useState([]);
  const [check, setChecked] = useState(`check_`);
  const [onclick, setOnclick] = useState();

  //on mount load all the topics of the course
  useEffect(() => {
    handleListTopics(userId, courseId).then((response) => {
      setTopics(response.data.topics);
      // console.log("on mount", topics);
    });
  }, [userId, courseId, setTopics]);

  //on change topics
  useEffect(() => {
    console.log("topics are updated : ", topics);
  }, [topics]);

  //on mount load watched topics
  useEffect(() => {
    handleListWatchedTopics(userId, courseId).then((response) => {
      if (response.data.message === "success") {
        setWatchedTopics(response.data.topics.map((topic) => topic.topicId));
      }
    });
  }, [userId, courseId]);

  //check box for watched and not watched topics
  const checkBoxFunction = (foundkey, id) => {
    console.log("from", id);
    const found = watchedTopics.find((watchedid) => watchedid === id);
    if (found) {
      return (
        <div>
          <Checkbox checked={true} />
        </div>
      );
    }
    return (
      <div>
        <Checkbox
          checked={`check_${foundkey}` === check}
          onClick={() =>
            onClickCheck(foundkey, id, userId, courseId, setChecked)
          }
        />
      </div>
    );
  };

  //modal body to add a new topic to the course.
  const AddTopicBody = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <TextField
          id="standard-basic"
          label="Enter Title"
          autoFocus="true"
          onChange={(e) => setTopicTitle(e.target.value)}
        />
        <Button
          onClick={() =>
            handleSubmitTopicTitle(
              userId,
              courseId,
              topicTitle,
              topics,
              setTopics,
              topicId,
              setOpenTopicModal,
              onclick
            )
          }
        >
          submit
        </Button>
      </div>
    </div>
  );

  //modal body to add a sub topic.
  const AddSubTopicbody = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <TextField
          id="standard-basic"
          label="Enter Title"
          autoFocus="true"
          onChange={(e) => setSubTopicTitle(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Enter URl"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          onClick={() =>
            handleSubmitAddTopic(
              userId,
              courseId,
              topicId,
              subTopicTitle,
              url,
              subtopics,
              setSubtopics,
              setOpenAddSubtopicModal
            )
          }
        >
          submit
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Chip
        className={classes.root}
        icon={<ComputerIcon />}
        label={`${courseTitle} description : ${courseDescription}`}
        variant="outlined"
      />
      {role === 2 ? (
        <Button
          style={{ margin: "2%" }}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={() => handleAddTopic(setOpenTopicModal, setOnclick)}
        >
          Add topic
        </Button>
      ) : null}

      <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      />

      <br />
      <div className={classes.compartment}>
        <div className={classes.topics}>
          {topics.map((topic, key) => (
            <Topic
              key={key}
              idKey = {key}
              expansion={expansion}
              topic={topic}
              userId={userId}
              courseId={courseId}
              setSubtopics={setSubtopics}
              setExpansion={setExpansion}
              checkBoxFunction={checkBoxFunction}
              setOnclick={setOnclick}
              setTopicId={setTopicId}
              setOpenTopicModal={setOpenTopicModal}
              topics={topics}
              setTopics={setTopics}
              setOpenAddSubtopicModal={setOpenAddSubtopicModal}
              setUrl={setUrl}
              subtopics={subtopics}
            />
          ))}
        </div>
        <div className={classes.player} style={{ marginRight: "5%" }}>
          <Player autoPlay playsInline poster="/assets/poster.png" src={url} />
        </div>
      </div>
      <ReusableComponent
        openModal={openTopicModal}
        onClose={() => setOpenTopicModal(false)}
        body={AddTopicBody}
      />
      <ReusableComponent
        openModal={openAddSubtopicModal}
        onClose={() => setOpenAddSubtopicModal(false)}
        body={AddSubTopicbody}
      />
    </div>
  );
}

export default Course;