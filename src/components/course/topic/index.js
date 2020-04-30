import React from "react";
import { useSelector } from "react-redux";

// material UI imports
import useStyles from "../useStyles";
import List from "@material-ui/core/List";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

//utility functions.
import {
  handleExpansion,
  handleUpdateTopic,
  handleDeleteTopic,
  handleAddSubTopic,
} from "../utils";

import SubTopic from './sub_topic';

function Topic(props) {
  const classes = useStyles();
  const role = useSelector((state) => state.users.obj.role);

  return (
    <div className={classes.list}>
      <ExpansionPanel
        style={{ marginLeft: "5%" }}
        className={classes.panel}
        expanded={`panel_${props.idKey}` === props.expansion}
        onClick={() =>
          handleExpansion(
            props.topic.id,
            props.idKey,
            props.userId,
            props.courseId,
            props.setSubtopics,
            props.setExpansion
          )
        }
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          {/* check-box */}

          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            label={<h4>{props.topic.title}</h4>}
            control={props.checkBoxFunction(props.idKey, props.topic.id)}
          />
          {role === 2 ? (
            <Button
              onClick={() =>
                handleUpdateTopic(
                  props.topic.id,
                  props.setOnclick,
                  props.setTopicId,
                  props.setOpenTopicModal
                )
              }
            >
              EDIT
            </Button>
          ) : null}

          {role === 2 ? (
            <Button
              color="secondary"
              onClick={() =>
                handleDeleteTopic(
                  props.topic.id,
                  props.userId,
                  props.courseId,
                  props.topics,
                  props.setTopics
                )
              }
            >
              DELETE
            </Button>
          ) : null}

          {role === 2 ? (
            <Button
              color="primary"
              onClick={() =>
                handleAddSubTopic(
                  props.topic.id,
                  props.setTopicId,
                  props.setOpenAddSubtopicModal
                )
              }
            >
              ADD
            </Button>
          ) : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {props.subtopics.map((subtopic, key) => 
            <SubTopic key={key} idKey={key} subtopic={subtopic} setUrl={props.setUrl}/>              
            )}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Topic;
