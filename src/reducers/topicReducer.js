import { CONSTANTS } from "../actions";

const initialState={
}

const topicReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CONSTANTS.UPDATE_TOPIC:
            const topics = action.payload;
            return {...state,topics};
        default:
          return state;
    }

}
export default topicReducer;