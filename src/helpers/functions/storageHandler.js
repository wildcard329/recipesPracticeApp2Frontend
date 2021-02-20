class CurrentUser {
    static validateId(userData) {
        console.log('1')
        // This function is for maintaining the user across refreshes
        
        if (userData.id === undefined) {
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
    static setToken(token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', user.username);
        localStorage.setItem('userid', user.id);
    };
    static getUserId() {
        const id = localStorage.getItem('userid');
        return id;
    }
    static removeTokenSession() {
        localStorage.removeItem('username');
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
    };
};

export default CurrentUser;
