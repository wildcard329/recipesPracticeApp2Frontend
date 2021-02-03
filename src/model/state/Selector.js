export const selectUserList = state => state.userList;
export const selectUserData = state => state.userData;
export const selectUser = state => state.user;
export const selectToken = state => state.token;
export const selectLoggedStatus = state => state.loggedIn;

export const selectRecipeList = state => state.recipeList;
export const selectUserRecipeList = state => state.userRecipeList;
export const selectRecipeData = state => state.recipeData;
export const selectNewRecipeId = state => state.newRecipeId;
export const selectIngredientsData = state => state.ingredientsData;
export const selectInstructionsData = state => state.instructionsData;
export const searchResults = state => state.searchResults;

export const selectDestination = state => state.destination;

export const selectIngredient = state => state.ingredient;
export const selectDeleteIngredient = state => state.deleteIngredient;
export const selectInstruction = state => state.instruction;
export const selectDeleteInstruction = state => state.deleteInstruction;
