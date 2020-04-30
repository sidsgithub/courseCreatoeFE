import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

//utility functions.
import {
  handleClickVideo,
} from "../../utils";

function SubTopic(props) {
  return (
    <ListItem
      key={props.idKey}
      button
      onClick={() => handleClickVideo(props.subtopic.url, props.setUrl)}
    >
      <ListItemText primary={props.subtopic.title} />
    </ListItem>
  );
}

export default SubTopic;