import { CONSTANTS } from "../actions";

export const loggedIn = () => {

  return {
    type: CONSTANTS.LOGGED_IN,
  };

};

export const loggedOut = () => {

    return {
      type: CONSTANTS.LOGGED_OUT,
    };
  
  };
