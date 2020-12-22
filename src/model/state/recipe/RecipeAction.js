export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';
export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';

export const getRecipeList = recipeList => {
    return { type: GET_RECIPE_LIST, recipeList };
};

export const getRecipeData = recipeData => {
    return { type: GET_RECIPE_DATA, recipeData };
};
