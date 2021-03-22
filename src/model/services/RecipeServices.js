import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

const RecipesURL = new URL('http://localhost:5000/api/recipes')
const IngredientsURL = new URL('http://localhost:5000/api/ingredients');
const InstructionsURL = new URL('http://localhost:5000/api/instructions');

class RecipeServices {
    async browseRecipes(id) {
        const response = await axiosWithAuth().get(`${RecipesURL}/${id}/browse`)
        return response.data;
    };
    async getRecipeList() {
        const response = await axiosWithAuth().get(`${RecipesURL}/all`);
        return response.data;
    };
    async getUserRecipeList(id) {
        const response = await axiosWithAuth().get(`${RecipesURL}/user/${id}`);
        return response.data;
    };
    async getRecipeData(id) {
        const response = await axiosWithAuth().get(`${RecipesURL}/${id}`);
        return response.data;
    };
    async getRecipeIngredients(id) {
        const response = await axiosWithAuth().get(`${IngredientsURL}/recipe/${id}`);
        return response.data;
    };
    async getRecipeInstructions(id) {
        const response = await axiosWithAuth().get(`${InstructionsURL}/recipe/${id}`);
        return response.data;
    }
    async addRecipeData(recipe) {
        await axiosWithAuth().post(`${RecipesURL}/create`, recipe)
    };
    async editRecipeData({recipe, ingredients, instructions}, id) {
        await axiosWithAuth().put(`${RecipesURL}/${id}`, recipe);
        await axiosWithAuth().put(`${IngredientsURL}/recipe/${id}`, ingredients);
        await axiosWithAuth().put(`${InstructionsURL}/recipe/${id}`,instructions);
    };
    async deleteRecipe(id) {
        await axiosWithAuth().delete(`${RecipesURL}/${id}`);
    };
    async sendSearchQuery(search) {
        const response = await axiosWithAuth().post(`${RecipesURL}/search`, search);
        return response.data;
    }
};

export default new RecipeServices();
