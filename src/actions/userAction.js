import { CONSTANTS } from "../actions";

export const userloggedIn = (userId,roleId) => {


  return {
    type: CONSTANTS.ADD_USER,
    payload: {userId,roleId}
  };

};
export const userloggedOut = () => {

  return {
    type: CONSTANTS.REMOVE_USER
  };

};


