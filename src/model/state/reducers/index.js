import { combineReducers } from 'redux';

import { recipeReducer } from './RecipeReducer.js';
import { userReducer } from './UserReducer.js';

export const rootReducer = combineReducers({
    recipeReducer,
    userReducer
});
