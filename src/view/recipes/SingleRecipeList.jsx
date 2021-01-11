import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList, selectUserData, selectUserRecipeList } from '../../model/state/Selector.js';
import RecipeCard from './RecipeCard.jsx';

function SingleRecipeList() {
    const id = useSelector(selectUserData).id;
    const recipes = useSelector(selectRecipeList);
    const userRecipes = useSelector(selectUserRecipeList);
    const path = useLocation().pathname;
    const [list, setList] = useState(null);

    useEffect(() => {
        switch (path) {
            case '/recipes/all':
                setList('all')
                return RecipeController.getRecipeList();
            case '/recipes/user':
                setList('user');
                return RecipeController.getUserRecipeList(id);
            default:
                return;
            }
    }, [id]);
    return(
        <div>
            {list === 'all' ? 
            <div>
                <RecipeCard recipes={recipes} />
            </div>
            : list === 'user' ?
            <div>
                <RecipeCard recipes={userRecipes} />
            </div>
            :
            null
            }
        </div>
    )
}

export default SingleRecipeList;
