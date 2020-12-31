import * as Actions from './Action.js';

const initialState = {
    user: {},
    userList: [],
    userData: {},
    recipeList: [],
    recipeData: {}
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case Actions.SET_USER:
            console.log('state: ',state)
            return {
                ...state,
                user: {...action.user}
            };
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
            console.log('state: ',state)
            return {
                ...state,
                recipeList: [...action.recipeList]
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
