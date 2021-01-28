import store from '../store.js';
import * as Action from '../model/state/Action.js';
import RecipeServices from '../model/services/RecipeServices.js';

class RecipeController {
    async getRecipeList() {
        const recipeList = await RecipeServices.getRecipeList();
        store.dispatch(Action.getRecipeList(recipeList));
    };
    async getUserRecipeList(id) {
        const userRecipeList = await RecipeServices.getUserRecipeList(id);
        store.dispatch(Action.getUserRecipeList(userRecipeList));
    };
    async getRecipeData(id) {
        const recipeData = await RecipeServices.getRecipeData(id);
        store.dispatch(Action.getRecipeData(recipeData));
    };
    async getRecipeDataEdit(id) {
        const editRecipeData = await RecipeServices.getRecipeData(id);
        store.dispatch(Action.setEditData(editRecipeData));
    }
    async addRecipeData(recipe) {
        const newRecipeStatus = await RecipeServices.addRecipeData(recipe);
        store.dispatch(Action.setNewRecipeStatus(newRecipeStatus));
    };
    async deleteRecipe(id) {
        await RecipeServices.deleteRecipe(id);
    };
    async sendSearchQuery(search) {
        const searchResults = await RecipeServices.sendSearchQuery(search);
        store.dispatch(Action.setSearchResults(searchResults));
    };
};

export default new RecipeController();
