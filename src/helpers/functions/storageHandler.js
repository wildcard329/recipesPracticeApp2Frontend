import jwt_decode from 'jwt-decode';

class CurrentUser {
    static validateId(userData) {
        // This function is for maintaining the user across refreshes
        if (!userData) {
            return
        } else if (userData.id === undefined) {
            const { username, id, ...user } = { ...userData }
            return {
                ...user,
                username: localStorage.getItem('username'),
                id: localStorage.getItem('userid')
            }
        } else {
            return userData
        };
    };
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
};

export default CurrentUser;
