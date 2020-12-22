import * as Actions from './Action.js';

const initialState = {
    userList: [],
    userData: {}
};

export const reducer = (state=initialState, action) => {
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
        case Actions.GET_RECIPE_LIST:
            return {
                ...state,
                recipeList: [...action.recipeList]
            }
            case Actions.GET_RECIPE_DATA:
            return {
                ...state,
                recipeData: [...action.recipeData]
            }
        default:
            return state;
    };
};
