import {
  handleListSubTopics,
  handleOnAddSubTopic,
} from "../../container/course";
import {
  handleOnAddTopic,
  handleOnDeleteTopic,
  handleOnUpdateTopic,
  handleOnClickWatchTopics,
} from "../../container/course";

//for expanding the expansion panel
export const handleExpansion = (
  topicId,
  expansionPanelKey,
  userId,
  courseId,
  setSubtopics,
  setExpansion
) => {
  handleListSubTopics(userId, courseId, topicId).then((response) =>
    setSubtopics(response.data.sub_topics)
  );
  console.log("expansionPanelKey", expansionPanelKey);
  setExpansion(`panel_${expansionPanelKey}`);
};

export //opening the modal to add title for the topic.
const handleAddTopic = (setOpenTopicModal, setOnclick) => {
  setOpenTopicModal(true);
  setOnclick("ADD_TOPIC");
};

//creating a new Topic.
export const handleSubmitTopicTitle = (
  userId,
  courseId,
  topicTitle,
  topics,
  setTopics,
  topicId,
  setOpenTopicModal,
  onclick
) => {
  if (onclick === "ADD_TOPIC") {
    handleOnAddTopic(userId, courseId, topicTitle).then((response) => {
      const newTopic = [...topics, response.data.topic];
      setTopics(newTopic);
    });
  } else if (onclick === "UPDATE_TOPIC") {
    handleOnUpdateTopic(userId, courseId, topicId, topicTitle).then(
      (response) => {
        const newTopics = [...topics];
        const foundIndex = topics.findIndex((x) => x.id === topicId);
        newTopics[foundIndex] = response.data;
        setTopics(newTopics);
      }
    );
  }
  setOpenTopicModal(false);
};

//opening the modal to update title of the topic.
export const handleUpdateTopic = (
  topicid,
  setOnclick,
  setTopicId,
  setOpenTopicModal
) => {
  setOnclick("UPDATE_TOPIC");
  setTopicId(topicid);
  setOpenTopicModal(true);
};

//deleting topic
export const handleDeleteTopic = (
  topicId,
  userId,
  courseId,
  topics,
  setTopics
) => {
  handleOnDeleteTopic(userId, courseId, topicId).then((response) => {
    if (response) {
      const newTopics = [...topics];
      const foundIndex = topics.findIndex((x) => x.id === topicId);
      newTopics.splice(foundIndex, 1);
      setTopics(newTopics);
    }
  });
};

//open modal for adding subTopics
export const handleAddSubTopic = (
  topicid,
  setTopicId,
  setOpenAddSubtopicModal
) => {
  setTopicId(topicid);
  setOpenAddSubtopicModal(true);
};

//adding sub topics
export const handleSubmitAddTopic = (
  userId,
  courseId,
  topicId,
  subTopicTitle,
  url,
  subtopics,
  setSubtopics,
  setOpenAddSubtopicModal
) => {
  handleOnAddSubTopic(userId, courseId, topicId, subTopicTitle, url).then(
    (response) => {
      const newSub_topic = [...subtopics, response.data.sub_topic];
      setSubtopics(newSub_topic);
    }
  );
  setOpenAddSubtopicModal(false);
};


//selecting the watched topics
export const onClickCheck = (key, topicId, userId, courseId,setChecked) => {
    handleOnClickWatchTopics(userId, courseId, topicId).then((r) =>
      console.log(r)
    );
    setChecked(`check_${key}`);
  };

  //adding url
  export const handleClickVideo = (url,setUrl) => {
    console.log("this is the url", url);
    setUrl(url);
  };