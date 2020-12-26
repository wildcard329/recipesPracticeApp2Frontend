import store from '../store.js';
import * as Action from '../model/state/Action.js';
import RecipeServices from '../model/services/RecipeServices.js';

class RecipeController {
    async getRecipeList() {
        const recipeList = await RecipeServices.getRecipeList();
        store.dispatch(Action.getRecipeList(recipeList));
    };
    async getRecipeData(id) {
        const recipeData = await RecipeServices.getRecipeData(id);
        store.dispatch(Action.getRecipeData(recipeData));
    };
    async addRecipeData(recipe) {
        const newRecipeStatus = await RecipeServices.addRecipeData(recipe);
        store.dispatch(Action.setNewRecipeStatus(newRecipeStatus));
    };
};

export default new RecipeController();
