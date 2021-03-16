import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList, selectUserData, selectUserRecipeList } from '../../model/state/Selector.js';
import RecipeMapper from './RecipeMapper.jsx';

function SingleRecipeList() {
    const id = useSelector(selectUserData).id;
    const recipes = useSelector(selectRecipeList);
    const userRecipes = useSelector(selectUserRecipeList);
    const path = useLocation().pathname;
    const [list, setList] = useState(null);
    
    useEffect(async () => {
        switch (path) {
            case '/recipes/all':
                await RecipeController.getRecipeList();
                setList(recipes)
                break;
            case '/recipes/user':
                await RecipeController.getUserRecipeList(id);
                setList(userRecipes);
                break;    
            default:
                return;
            }
        }, [id, list]);
        
    return(
        <div className='single-list'>
            <RecipeMapper recipes={list} />
        </div>
    )
}

export default SingleRecipeList;
