import * as Actions from './UserAction.js';

const initialState = {
    userList: [],
    userData: {}
};

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case Actions.GET_USER_LIST:
            return {
                ...state,
                userList: [...action.userList]
            };
        case Actions.GET_USER_DATA:
            return {
                ...state,
                userData: {...action.userData}
            };
        default:
            return state;
    };
};
