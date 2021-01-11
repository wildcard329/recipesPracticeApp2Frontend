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
    async addRecipeData(recipe) {
        console.log('controller data: ',recipe)
        const newRecipeStatus = await RecipeServices.addRecipeData(recipe);
        store.dispatch(Action.setNewRecipeStatus(newRecipeStatus));
    };
    // Testing function
    async sendTestData(data) {
        await RecipeServices.sendTestData(data);
    };
};

export default new RecipeController();
