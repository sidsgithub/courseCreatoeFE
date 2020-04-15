import { CONSTANTS } from "../actions";

const initialState={
}

const listReducer = (state = initialState, action)=>{
    switch (action.type) {

        case CONSTANTS.ADD_USER:{
            const role = action.payload.roleId;
            const user = action.payload.userId;
            console.log("reducer",role,user)
            const obj = {
                user,role
            }
            return {...state,obj}
        }

        case CONSTANTS.REMOVE_USER:
            const obj = {
                user : null,
                role : null
            }
            return {...state,obj}
        default:
          return state;
    }

}
export default listReducer;