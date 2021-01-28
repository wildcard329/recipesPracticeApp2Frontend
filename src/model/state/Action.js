// User
export const GET_USER_LIST = 'GET_USER_LIST';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_USER = 'SET_USER';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_DESTINATION = 'SET_DESTINATION';

export const getUserList = userList => {
    return { type: GET_USER_LIST, userList };
};

export const getUserData = userData => {
    return { type: GET_USER_DATA, userData };
};

export const setUser = user => {
    return { type: SET_USER, user };
};

export const setLoggedIn = () => {
    return { type: SET_LOGGED_IN }
}

export const setToken = token => {
    return { type: SET_TOKEN, token };
};

export const removeUser = user => {
    return { type: REMOVE_USER, user };
};

export const setDestination = destination => {
    return { type: SET_DESTINATION, destination };
};

// Recipe
export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';
export const GET_USER_RECIPE_LIST = 'GET_USER_RECIPE_LIST';
export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';
export const SET_NEW_RECIPE_STATUS = 'SET_NEW_RECIPE_STATUS';
export const SET_EDIT_DATA = 'SET_EDIT_DATA';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const getRecipeList = recipeList => {
    return { type: GET_RECIPE_LIST, recipeList };
};

export const getUserRecipeList = userRecipeList => {
    return { type: GET_USER_RECIPE_LIST, userRecipeList };
};

export const getRecipeData = recipeData => {
    return { type: GET_RECIPE_DATA, recipeData };
};

export const setNewRecipeStatus = newRecipeStatus => {
    return { type: SET_NEW_RECIPE_STATUS, newRecipeStatus };
};

export const setEditData = editRecipeData => {
    return { type: SET_EDIT_DATA, editRecipeData };
};

export const setSearchResults = searchResults => {
    return { type: SET_SEARCH_RESULTS, searchResults };
};
