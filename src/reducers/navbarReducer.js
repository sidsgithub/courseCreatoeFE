import { CONSTANTS } from "../actions";

const initialState={
    isAuth : false
}

const navbarReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CONSTANTS.LOGGED_OUT:
            return {...state, isAuth:false};

        case CONSTANTS.LOGGED_IN:
            return {...state, isAuth : true};

        default:
          return state;
    }

}
export default navbarReducer;