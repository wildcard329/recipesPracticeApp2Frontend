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
export const SET_SAMPLE_RESULTS = 'SET_SAMPLE_RESULTS';
export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';
export const GET_USER_RECIPE_LIST = 'GET_USER_RECIPE_LIST';
export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';
export const GET_INGREDIENT_DATA = 'GET_INGREDIENT_DATA';
export const GET_INSTRUCTION_DATA = 'GET_INSTRUCTION_DATA';
export const SET_NEW_RECIPE_ID = 'SET_NEW_RECIPE_ID';
export const SET_EDIT_DATA = 'SET_EDIT_DATA';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_CONVEYOR = 'SET_CONVEYOR';
export const SET_CONVEYOR_INCREMENT = 'SET_CONVEYOR_INCREMENT';

export const setSampleResults = sampleRecipes => {
    return { type: SET_SAMPLE_RESULTS, sampleRecipes }
}

export const getRecipeList = recipeList => {
    return { type: GET_RECIPE_LIST, recipeList };
};

export const getUserRecipeList = userRecipeList => {
    return { type: GET_USER_RECIPE_LIST, userRecipeList };
};

export const getRecipeData = recipeData => {
    return { type: GET_RECIPE_DATA, recipeData };
};

export const getRecipeIngredients = ingredientsData => {
    return { type: GET_INGREDIENT_DATA, ingredientsData };
};

export const getRecipeInstructions = instructionsData => {
    return { type: GET_INSTRUCTION_DATA, instructionsData };
};

export const setNewRecipeId = newRecipeId => {
    return { type: SET_NEW_RECIPE_ID, newRecipeId};
};

export const setSearchResults = searchResults => {
    return { type: SET_SEARCH_RESULTS, searchResults };
};

export const setConveyor = conveyorStatus => {
    return { type: SET_CONVEYOR, conveyorStatus };
};

export const setConveyorIncrement = conveyorIncrementStatus => {
    return { type: SET_CONVEYOR_INCREMENT, conveyorIncrementStatus };
};

// form

export const RELAY_INGREDIENT = 'RELAY_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const RELAY_INSTRUCTION = 'RELAY_INSTRUCTION';
export const DELETE_INSTRUCTION = 'DELETE_INSTRUCTION';

export const relayIngredient = ingredient => {
    return { type: RELAY_INGREDIENT, ingredient };
};

export const deleteIngredient = deleteIngredient => {
    return { type: DELETE_INGREDIENT, deleteIngredient };
};

export const relayInstruction = instruction => {
    return { type: RELAY_INSTRUCTION, instruction };
};

export const deleteInstruction = deleteInstruction => {
    return { type: DELETE_INSTRUCTION, deleteInstruction }; 
};
