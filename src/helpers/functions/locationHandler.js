class UserLocation {
    static setRouteDestination(destination) {
        switch (destination) {
            case 'login':
                return '/auth/login';
            case 'register':
                return '/auth/register';
            case 'all users':
                return '/users/all';
            case 'add user':
                return '/users/add';
            case 'user info':
                return '/users/info';
            case 'browse':
                return '/recipes/browse';
            case 'all recipes':
                return '/recipes/all';
            case 'profile':
                return '/user/profile';
            case 'user recipes':
                return '/recipes/user'
            case 'add recipe':
                return '/recipes/add';
            case 'recipe info':
                return '/recipe/info';
            default:
                return '/';
        };
    };
};

export default UserLocation;
