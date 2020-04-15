import { CONSTANTS } from "../actions";

const updateCourse = (courses) => {

  return {
    type: CONSTANTS.UPDATE_COURSE,
    payload : courses
  };

};

export default updateCourse;