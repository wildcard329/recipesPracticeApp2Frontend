import * as Actions from './Action.js';

const initialState = {
    token: null,
    user: {},
    userList: [],
    userData: {},
    ingredientsData: [],
    instructionsData: [],
    sampleRecipes: [],
    recipeList: [],
    recipeData: {},
    ingredient: {},
    deleteIngredient: {},
    instruction: {},
    deleteInstruction: {},
    conveyorStatus: false,
    newRecipeId: null,
    searchResults: [],
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
        case Actions.SET_NEW_RECIPE_ID:
            return {
                ...state,
                newRecipeId: action.newRecipeId
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
        case Actions.RELAY_INGREDIENT:
            return {
                ...state,
                ingredient: {...action.ingredient}
            };
        case Actions.DELETE_INGREDIENT:
            return {
                ...state,
                deleteIngredient: {...action.deleteIngredient}
            };
        case Actions.RELAY_INSTRUCTION:
            return {
                ...state,
                instruction: {...action.instruction}
            };
        case Actions.DELETE_INSTRUCTION:
            return {
                ...state,
                deleteInstruction: {...action.deleteInstruction}
            };
        case Actions.SET_SAMPLE_RESULTS:
            return {
                ...state,
                sampleRecipes: {...action.sampleRecipes}
            }
        case Actions.SET_CONVEYOR:
            return {
                ...state,
                conveyorStatus: action.conveyorStatus
            }
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
        case Actions.GET_INGREDIENT_DATA:
            return {
                ...state,
                ingredientsData: action.ingredientsData
            };
        case Actions.GET_INSTRUCTION_DATA:
            return {
                ...state,
                instructionsData: action.instructionsData
            };
        case Actions.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: [action.searchResults]
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
