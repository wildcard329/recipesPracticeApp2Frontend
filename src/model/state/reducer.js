import * as Actions from './Action.js';

const initialState = {
    token: null,
    user: {},
    userList: [],
    userData: {},
    recipeList: [],
    recipeData: {},
    recipeIngredientAdd: '',
    recipeIngredientRemove: '',
    recipeInstructionAdd: '',
    recipeInstructionRemove: '',
    loggedIn: false,
    destination: null
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
                token: action.token
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
            return {
                ...state,
                userRecipeList: [...action.userRecipeList]
            };
        case Actions.GET_RECIPE_DATA:
            return {
                ...state,
                recipeData: action.recipeData
            };
        case Actions.ADD_RECIPE_INGREDIENT_TO_FORM:
            return {
                ...state,
                recipeIngredientAdd: action.recipeIngredientAdd
            };
        case Actions.REMOVE_RECIPE_INGREDIENT_FROM_FORM:
            return {
                ...state,
                recipeIngredientRemove: action.recipeIngredientRemove
            };
        case Actions.ADD_RECIPE_INSTRUCTION_TO_FORM:
            return {
                ...state,
                recipeInstructionAdd: action.recipeInstructionAdd
            };
        case Actions.REMOVE_RECIPE_INSTRUCTION_FROM_FORM:
            return {
                ...state,
                recipeInstructionRemove: action.recipeIngredientRemove
            };
        case Actions.SET_DESTINATION:
            return {
                ...state,
                destination: action.destination
            };
        default:
            return state;
    };
};
