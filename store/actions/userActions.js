import * as reducerActions from "../types/userTypes";

export const updateUserData = (defaultData) => ({
    type: reducerActions["UPDATE_USER_DATA"],
    payload: defaultData
})