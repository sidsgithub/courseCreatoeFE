import { CONSTANTS } from "../actions";

export const updatetopic = (topics) => {

  return {
    type: CONSTANTS.UPDATE_TOPIC,
    payload : topics
  };

};
