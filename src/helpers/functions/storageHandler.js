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
};

export default CurrentUser;
