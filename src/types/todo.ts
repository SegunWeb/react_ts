export interface userState {
    users: any[],
    loading: boolean,
    error: null | string
}

export enum userActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

interface fetchUserAction {
    type: userActionType.FETCH_USERS,
}
interface fetchUserSuccess {
    type: userActionType.FETCH_USERS_SUCCESS,
    payload: any[]
}
interface fetchUserError {
    type: userActionType.FETCH_USER_ERROR,
    payload: string
}

export type userAction = fetchUserAction | fetchUserSuccess | fetchUserError