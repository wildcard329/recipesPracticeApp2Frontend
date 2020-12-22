import store from '../store.js';
import * as Action from '../model/state/Action.js';
import RecipeServices from '../model/services/RecipeServices.js';

class RecipeController {
    async getRecipeList() {
        const recipeList = await RecipeServices.getRecipeList();
        store.dispatch(Action.getRecipeList(recipeList));
    }
}

export default new RecipeController();
