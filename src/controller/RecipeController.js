import store from '../store.js';
import * as Action from '../model/state/Action.js';
import RecipeServices from '../model/services/RecipeServices.js';

class RecipeController {
    async browseRecipes(id) {
        const sampleRecipes = await RecipeServices.browseRecipes(id);
        store.dispatch(Action.setSampleResults(sampleRecipes));
    }
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
    async getRecipeIngredients(id) {
        const ingredientsData = await RecipeServices.getRecipeIngredients(id);
        store.dispatch(Action.getRecipeIngredients(ingredientsData));
    };
    async getRecipeInstructions(id) {
        const instructionsData = await RecipeServices.getRecipeInstructions(id);
        store.dispatch(Action.getRecipeInstructions(instructionsData));
    };
    async addRecipeData({recipe, ingredients, instructions}) {
        await RecipeServices.addRecipeData({recipe, ingredients, instructions});
    };
    async editRecipeData({recipe, ingredients, instructions}, id) {
        await RecipeServices.editRecipeData({recipe, ingredients, instructions}, id);
    };
    async deleteRecipe(id) {
        await RecipeServices.deleteRecipe(id);
    };
    async sendSearchQuery(search) {
        const searchResults = await RecipeServices.sendSearchQuery(search);
        store.dispatch(Action.setSearchResults(searchResults));
    };
    async relayStatus(activeStatus) {
        console.log('active: ',activeStatus)
        store.dispatch(Action.setConveyor(activeStatus));
    };
};

export default new RecipeController();
