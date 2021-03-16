import RecipeCard from './RecipeCard.jsx';

function RecipeMapper({recipes}) {
    return(
            <div className='recipe-list'>
                {recipes && recipes.map(recipe => {
                    return(
                        <div className='card-wrapper'>
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        </div>
                    )
                })}            
            </div>
    )
}

export default RecipeMapper;
