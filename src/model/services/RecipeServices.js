import axios from 'axios';

const RecipesURL = new URL('http://localhost:5000/api/recipes')

class RecipeServices {
    async getRecipeList() {
        const response = await axios.get(`${RecipesURL}/all`);
        console.log('R Service: ',response)
        return response.data;
    }
    async getRecipeData(id) {
        const response = await axios.get(`${RecipesURL}/${id}`);
        return response.data;
    }
};

export default new RecipeServices();
