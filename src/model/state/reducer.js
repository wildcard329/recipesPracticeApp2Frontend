import * as Actions from './Action.js';

const initialState = {
    token: '',
    userList: [],
    userData: {},
    recipeList: [],
    recipeData: {},
    newRecipeStatus: false
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case Actions.LOGIN_USER:
            console.log(`reducer token: ${action.token}`)
            localStorage.setItem('token', action.token)
            return {
                ...state,
                token: {...action.token}
            };
        case Actions.GET_USER_LIST:
            console.log('state: ',state)
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
                console.log('State: ',state)
            return {
                ...state,
                recipeData: {...action.recipeData}
            }
        default:
            return state;
    };
};
