import { CONSTANTS } from "../actions";

const initialState={
}

const courseReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CONSTANTS.UPDATE_COURSE:
            const courses = action.payload;
            return {...state,courses};

        default:
          return state;
    }

}
export default courseReducer;