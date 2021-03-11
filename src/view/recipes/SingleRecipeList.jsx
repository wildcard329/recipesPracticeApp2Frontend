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
        }, [id, list]);
        
    return(
        <div>
            {list === 'all' ? 
                <div className='single-list'>
                    <RecipeCard recipes={recipes} />
                </div>
            : list === 'user' ?
                <div className='single-list'>
                    <RecipeCard recipes={userRecipes} />
                </div>
            :
                <h2 className='error'>
                    Error loading content
                </h2>
            }
        </div>
    )
}

export default SingleRecipeList;
