import {userAction, userActionType, userState} from "../../types/todo";

const initialState: userState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: userAction): userState => {
    switch (action.type) {
        case userActionType.FETCH_USERS:
            return {users: [], loading: true, error: null};
        case userActionType.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null};
        case userActionType.FETCH_USER_ERROR:
            return {users: [], loading: false, error: action.payload};
        default:
            return state
    }
};