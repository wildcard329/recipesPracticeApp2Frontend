import axios from 'axios';

const RecipesURL = new URL('http://localhost:5000/api/recipes')

class RecipeServices {
    async getRecipeList() {
        const response = await axios.get(`${RecipesURL}/all`);
        return response.data;
    };
    async getRecipeData(id) {
        const response = await axios.get(`${RecipesURL}/${id}`);
        return response.data;
    };
    async addRecipeData(recipe) {
        const response = await axios.post(`${RecipesURL}/create`, recipe);
        console.log('response: ',response)
        return response.status;
    };
};

export default new RecipeServices();
