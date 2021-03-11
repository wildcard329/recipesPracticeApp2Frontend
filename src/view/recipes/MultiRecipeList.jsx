import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectSampleRecipes ,selectRecipeList, selectUserRecipeList, selectConveyorStatus, selectConveyorIncrementStatus } from '../../model/state/Selector.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import SampleRotator from '../../helpers/functions/sampleRotator.js';
import UserController from "../../controller/UserController.js";

import RecipeCard from './RecipeCard.jsx';
import ConveyorButtons from "../components/ConveyorButtons.jsx";

function RecipeList() {
    const history = useHistory();
    // const recipes = useSelector(selectRecipeList);
    // const userRecipes = useSelector(selectUserRecipeList);
    const userId = UserHelper.getUserId();
    const samples = useSelector(selectSampleRecipes);
    const filters = samples[0];
    const recipes = samples[1];
    const userRecipes = samples[2];
    const filter1 = samples[3];
    const filter2 = samples[4];
    const filter3 = samples[5];

    const runConveyor = useSelector(selectConveyorStatus);
    const incrementConveyor = useSelector(selectConveyorIncrementStatus);
    console.log('conveyor: ',runConveyor)

    // const recipeSamples = SampleRotator.iterateList(recipes && recipes, 0, 5)
    // const userSamples = SampleRotator.iterateList(userRecipes && userRecipes, 0, 5);
    // const filter1Samples = SampleRotator.iterateList(filter1 && filter1, 0, 5);
    // const filter2Samples = SampleRotator.iterateList(filter2 && filter2, 0, 5);
    // const filter3Samples = SampleRotator.iterateList(filter3 && filter3, 0, 5);
    // console.log('Samples: ',recipeSamples)

    const setUserRecipes = () => {
        UserController.getUserData(userId);
    };

    const toAllRecipes = () => {
        history.push('/recipes/all');
    }

    const toRecipeList = () => {
        history.push('/recipes/user');
    }

    useEffect(() => {
        console.log('conveyor: ',runConveyor)
    }, [runConveyor, incrementConveyor])

    useEffect(async () => {
        // await RecipeController.getRecipeList();
        // await RecipeController.getUserRecipeList(userId);
        await RecipeController.browseRecipes(userId);
    }, [userId]);

    return(
        <div>
            <div className='recipe-lists'>
                <h2 className='list-header' onClick={toAllRecipes}>Browse all recipes</h2>
                <ConveyorButtons list={recipes} />
                <RecipeCard recipes={recipes} />
            </div>
            <div className='recipe-lists' onClick={setUserRecipes}>
                <h2 className='list-header' onClick={toRecipeList}>Your Recipes</h2>
                <ConveyorButtons />
                <RecipeCard recipes={userRecipes} />
            </div>
            <div className='recipe-lists' onClick={null}>
                <h2 className='list-header' onClick={null}>Try {filters && filters[0]} Recipes</h2>
                {/* <ConveyorButtons /> */}
                <RecipeCard recipes={filter1} />
            </div>
            <div className='recipe-lists' onClick={null}>
                <h2 className='list-header' onClick={null}>Try {filters && filters[1]} Recipes</h2>
                {/* <ConveyorButtons /> */}
                <RecipeCard recipes={filter2} />
            </div>
            <div className='recipe-lists' onClick={null}>
                <h2 className='list-header' onClick={null}>Try {filters && filters[2]} Recipes</h2>
                {/* <ConveyorButtons /> */}
                <RecipeCard recipes={filter3} />
            </div>
        </div>
    )
}

export default RecipeList;
