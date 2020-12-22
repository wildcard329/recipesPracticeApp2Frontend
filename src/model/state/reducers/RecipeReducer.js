import * as Actions from '../recipe/RecipeAction.js';

const initialState = {
    recipeList: [],
    recipeData: {}
};

export const recipeReducer =(state=initialState, action) => {
    switch (action.type) {
        case Actions.GET_RECIPE_LIST:
            console.log('reducer: ',state)
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
    }
}
