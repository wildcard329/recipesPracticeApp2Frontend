import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

const RecipesURL = new URL('http://localhost:5000/api/recipes')

class RecipeServices {
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
    async addRecipeData(recipe) {
        await axiosWithAuth().post(`${RecipesURL}/create`, recipe);
    };
    async deleteRecipe(id) {
        await axiosWithAuth().delete(`${RecipesURL}/${id}`);
    };
    async sendSearchQuery(search) {
        const response = await axiosWithAuth().post(`${RecipesURL}/search`, search);
        console.log("res: ",response)
        return response.data;
    }
};

export default new RecipeServices();
