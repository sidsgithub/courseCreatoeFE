import { CONSTANTS } from "../actions";

export const activateCourse = (course)=>{
  return {
    type : CONSTANTS.ACTIVE_COURSE,
    payload : course
  }
}