class CurrentUser {
    static validateId(userData) {
        if (userData.id === undefined) {
            const { username, id, ...user } = { ...userData }
            return {
                ...user,
                username: localStorage.getItem('username'),
                id: localStorage.getItem('userid')
            }
        } else {
            return userData
        }
    }
}

export default CurrentUser;
