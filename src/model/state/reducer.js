import * as Actions from './Action.js';

const initialState = {
    token: null,
    user: {},
    userList: [],
    userData: {},
    recipeList: [],
    recipeData: {},
    loggedIn: false
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case Actions.SET_USER:
            return {
                ...state,
                user: {...action.user}
            };
        case Actions.SET_TOKEN:
            return {
                ...state,
                token: {...action.token}
            };
        case Actions.SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: true
            };
        case Actions.REMOVE_USER:
            return {
                state: initialState
            }
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
            };
        case Actions.GET_USER_RECIPE_LIST:
            console.log('state: ',state)
            return {
                ...state,
                userRecipeList: [...action.userRecipeList]
            };
        case Actions.GET_RECIPE_DATA:
            return {
                ...state,
                recipeData: {...action.recipeData}
            };
        default:
            return state;
    };
};
