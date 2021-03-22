import jwt_decode from 'jwt-decode';

class CurrentUser {
    static setToken(token) {
        const user = jwt_decode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('username', user.username);
        localStorage.setItem('userid', user.userId);
    };
    static getToken() {
        const token = localStorage.getItem('token');
        return token;
    }
    static getUserId() {
        const id = localStorage.getItem('userid');
        return id;
    }
    static getUsername() {
        const username = localStorage.getItem('username');
        return username;
    }
    static removeTokenSession() {
        localStorage.removeItem('username');
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
    };
    static setRecipeId(id) {
        localStorage.setItem('recipeId', id);
    };
    static getRecipeId() {
        const id = localStorage.getItem('recipeId');
        return id;
    };
    static removeRecipeId() {
        localStorage.removeItem('recipeId');
    };
    static storeRecipe(recipe) {
        localStorage.setItem('recipeName', recipe.name);
        localStorage.setItem('recipeDescription', recipe.description);
        localStorage.setItem('recipeType', recipe.type);
        localStorage.setItem('recipeIngredients', this.packStorageList(recipe.ingredients));
        localStorage.setItem('recipeInstructions', this.packStorageList(recipe.instructions));
    };
    static packStorageList(inputArr) {
        let storageArr = [];
        inputArr && inputArr.map(item => {
            storageArr.push(item.name.concat('***'));
        });
        const storageString = storageArr.toString();
        console.log('arr: ',storageArr,'\nstring: ',storageString)
        return storageString;
    }
    static retrieveName() {
        const name = localStorage.getItem('recipeName');
        return name;
    };
    static retrieveDescription() {
        const description = localStorage.getItem('recipeDescription');
        return description;
    };
    static retrieveType() {
        const type = localStorage.getItem('recipeType');
        return type;
    };
    static retrieveIngredients() {
        const ingredients = localStorage.getItem('recipeIngredients').split('***');
        let ingredientsArr = [];
        ingredients.map(ingredient => {
            ingredientsArr.push({name: ingredient})
        })
        return ingredientsArr;
    };
    static retrieveInstructions() {
        const instructions = localStorage.getItem('recipeInstructions').split('***');
        let instructionsArr = [];
        instructions.map(instruction => {
            instructionsArr.push({name: instruction})
        })
        return instructions;
    };
};

export default CurrentUser;
