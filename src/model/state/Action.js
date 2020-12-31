// User
export const GET_USER_LIST = 'GET_USER_LIST';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const getUserList = userList => {
    return { type: GET_USER_LIST, userList };
};

export const getUserData = userData => {
    return { type: GET_USER_DATA, userData };
};

export const setUser = user => {
    return { type: SET_USER, user };
};

export const removeUser = user => {
    return { type: REMOVE_USER, user };
};

// Recipe
export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';
export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';
export const SET_NEW_RECIPE_STATUS = 'SET_NEW_RECIPE_STATUS';

export const getRecipeList = recipeList => {
    return { type: GET_RECIPE_LIST, recipeList };
};

export const getRecipeData = recipeData => {
    return { type: GET_RECIPE_DATA, recipeData };
};

export const setNewRecipeStatus = newRecipeStatus => {
    return { type: SET_NEW_RECIPE_STATUS, newRecipeStatus };
};
