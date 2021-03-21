import store from '../store.js';
import * as Action from '../model/state/Action.js';
import RecipeServices from '../model/services/RecipeServices.js';

class RecipeController {
    async browseRecipes(id) {
        try {
            const sampleRecipes = await RecipeServices.browseRecipes(id);
            store.dispatch(Action.setSampleResults(sampleRecipes));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        }
    }
    async getRecipeList() {
        try {
            const recipeList = await RecipeServices.getRecipeList();
            store.dispatch(Action.getRecipeList(recipeList));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async getUserRecipeList(id) {
        try {
            const userRecipeList = await RecipeServices.getUserRecipeList(id);
            store.dispatch(Action.getUserRecipeList(userRecipeList));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async getRecipeData(id) {
        try {
            const recipeData = await RecipeServices.getRecipeData(id);
            store.dispatch(Action.getRecipeData(recipeData));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async getRecipeIngredients(id) {
        try {
            const ingredientsData = await RecipeServices.getRecipeIngredients(id);
            store.dispatch(Action.getRecipeIngredients(ingredientsData));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async getRecipeInstructions(id) {
        try {
            const instructionsData = await RecipeServices.getRecipeInstructions(id);
            store.dispatch(Action.getRecipeInstructions(instructionsData));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        }
    };
    async addRecipeData({recipe, ingredients, instructions}) {
        try {
            await RecipeServices.addRecipeData({recipe, ingredients, instructions});
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async editRecipeData({recipe, ingredients, instructions}, id) {
        try {
            await RecipeServices.editRecipeData({recipe, ingredients, instructions}, id);
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async deleteRecipe(id) {
        try {
            await RecipeServices.deleteRecipe(id);
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
    async sendSearchQuery(search) {
        try {
            const searchResults = await RecipeServices.sendSearchQuery(search);
            store.dispatch(Action.setSearchResults(searchResults));
        } catch (err) {
            store.dispatch(Action.setErrorMessage(err));
        };
    };
};

export default new RecipeController();
