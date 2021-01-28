export const selectUserList = state => state.userList;
export const selectUserData = state => state.userData;
export const selectUser = state => state.user;
export const selectToken = state => state.token;
export const selectLoggedStatus = state => state.loggedIn;

export const selectRecipeList = state => state.recipeList;
export const selectUserRecipeList = state => state.userRecipeList;
export const selectRecipeData = state => state.recipeData;
export const selectEditRecipeData = state => state.editRecipeData;
export const searchResults = state => state.searchResults;

export const selectDestination = state => state.destination;

export const selectRecipeIngredient = state => state.recipeIngredientAdd;
export const selectRemovedRecipeIngredient = state => state.recipeIngredientRemove;
export const selectRecipeInstruction = state => state.recipeInstructionAdd;
export const selectRemoveRecipeInstruction = state => state.recipeInstructionRemove;
export const selectRemoveRecipeIngredientId = state => state.ingredientId;
export const selectRemoveRecipeInstructionId = state => state.instructionId;
