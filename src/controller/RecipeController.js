import store from '../store.js';
import * as Action from '../model/state/Action.js';
import RecipeServices from '../model/services/RecipeServices.js';

class RecipeController {
    async browseRecipes(id) {
        try {
            const sampleRecipes = await RecipeServices.browseRecipes(id);
            store.dispatch(Action.setSampleResults(sampleRecipes));
        } catch (err) {
            console.log(err);
        }
    }
    async getRecipeList() {
        try {
            const recipeList = await RecipeServices.getRecipeList();
            store.dispatch(Action.getRecipeList(recipeList));
        } catch (err) {
            console.log(err);
        };
    };
    async getUserRecipeList(id) {
        try {
            const userRecipeList = await RecipeServices.getUserRecipeList(id);
            store.dispatch(Action.getUserRecipeList(userRecipeList));
        } catch (err) {
            console.log(err);
        };
    };
    async getRecipeData(id) {
        try {
            const recipeData = await RecipeServices.getRecipeData(id);
            store.dispatch(Action.getRecipeData(recipeData));
        } catch (err) {
            console.log(err);
        };
    };
    async getRecipeIngredients(id) {
        try {
            const ingredientsData = await RecipeServices.getRecipeIngredients(id);
            store.dispatch(Action.getRecipeIngredients(ingredientsData));
        } catch (err) {
            console.log(err);
        };
    };
    async getRecipeInstructions(id) {
        try {
            const instructionsData = await RecipeServices.getRecipeInstructions(id);
            store.dispatch(Action.getRecipeInstructions(instructionsData));
        } catch (err) {
            console.log(err);
        }
    };
    async addRecipeData({recipe, ingredients, instructions}) {
        try {
            await RecipeServices.addRecipeData({recipe, ingredients, instructions});
        } catch (err) {
            console.log(err);
        };
    };
    async editRecipeData({recipe, ingredients, instructions}, id) {
        try {
            await RecipeServices.editRecipeData({recipe, ingredients, instructions}, id);
        } catch (err) {
            console.log(err);
        };
    };
    async deleteRecipe(id) {
        try {
            await RecipeServices.deleteRecipe(id);
        } catch (err) {
            console.log(err);
        };
    };
    async sendSearchQuery(search) {
        try {
            const searchResults = await RecipeServices.sendSearchQuery(search);
            store.dispatch(Action.setSearchResults(searchResults));
        } catch (err) {
            console.log(err);
        };
    };
};

export default new RecipeController();
