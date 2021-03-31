import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { selectRecipeData } from '../../model/state/Selector.js';
import FormController from '../../controller/FormController.js';
import RecipeController from '../../controller/RecipeController.js';
import StorageHandler from '../../helpers/functions/storageHandler.js';

function DeleteRecipeConfirmation() {
    const name = useSelector(selectRecipeData).name;
    const id = useSelector(selectRecipeData).id;
    const history = useHistory();

    const deleteRecipe = async () => {
        await RecipeController.deleteRecipe(id)
        StorageHandler.removeRecipeId();
        FormController.requestDeleteRecipe(false);
        history.push('/recipes/browse');
    }

    const abort = () => {
        FormController.requestDeleteRecipe(false);
    }

    return(
        <div>
            <h2>Notice: {name} will be deleted.</h2>
            <p>Are you sure you want to delete {name}?</p>
            <Button variant='outline-dark' onClick={deleteRecipe}>Yes</Button>
            <Button variant='outline-dark' onClick={abort}>No</Button>
        </div>
    )
}

export default DeleteRecipeConfirmation;
