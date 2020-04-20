import { CONSTANTS } from "../actions";

const initialState={
    activeCourse : ""
}

const courseReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CONSTANTS.ACTIVE_COURSE:
            return {...state,activeCourse:action.payload}
        default:
          return state;
    }

}
export default courseReducer;