import update from "immutability-helper";
import * as reducerActionTypes from "../types/userTypes";

const INITIAL_STATE = {
    fullName: '',
    email: '',
    gender: ''
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case reducerActionTypes["UPDATE_USER_DATA"]: {
            return update(state, {
                $set: action.payload
            });
        }

        default:
            return state;
    }
};

export default UserReducer;