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

// Forms
export const ADD_RECIPE_INGREDIENT_TO_FORM = 'ADD_RECIPE_INGREDIENT_TO_FORM';
export const REMOVE_RECIPE_INGREDIENT_FROM_FORM = 'REMOVE_RECIPE_INGREDIENT_FROM_FORM';
export const REMOVE_RECIPE_INGREDIENT_ID_FROM_FORM = 'REMOVE_INGREDIENT_ID_FROM_FORM';
export const ADD_RECIPE_INSTRUCTION_TO_FORM = 'ADD_RECIPE_INSTRUCTION_TO_FORM';
export const REMOVE_RECIPE_INSTRUCTION_FROM_FORM = 'REMOVE_RECIPE_INSTRUCTION_FROM_FORM';
export const REMOVE_RECIPE_INSTRUCTION_ID_FROM_FORM = 'REMOVE_INSTRUCTION_ID_FROM_FORM';

export const addIngredientToForm = recipeIngredientAdd => {
    return { type: ADD_RECIPE_INGREDIENT_TO_FORM, recipeIngredientAdd };
}; 

export const removeIngredientFromForm = recipeIngredientRemove => {
    return { type: REMOVE_RECIPE_INGREDIENT_FROM_FORM, recipeIngredientRemove };
};

export const removeIngredientIdFromForm = ingredientId => {
    return { type: REMOVE_RECIPE_INGREDIENT_ID_FROM_FORM, ingredientId }
};

export const addInstructionToForm = recipeInstructionAdd => {
    return { type: ADD_RECIPE_INSTRUCTION_TO_FORM, recipeInstructionAdd }
};

export const removeInstructionFromForm = recipeInstructionRemove => {
    return { type: REMOVE_RECIPE_INSTRUCTION_FROM_FORM, recipeInstructionRemove }
};

export const removeInstructionIdFromForm = instructionId => {
    return { type: REMOVE_RECIPE_INSTRUCTION_ID_FROM_FORM, instructionId };
};
