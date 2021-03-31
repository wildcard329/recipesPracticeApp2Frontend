import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import RecipeForm from './RecipeForm.jsx';

import { selectCreateRecipe, selectRegisterUser, selectRequestDelete } from '../../model/state/Selector.js';
import UserRegister from '../auth/UserRegister.jsx';
import DeleteRecipeConfirmation from './DeleteRecipeConfirmation.jsx';

function FormModal() {
    const [show, setShow] = useState(false);
    const createRecipe = useSelector(selectCreateRecipe);
    const userRegister = useSelector(selectRegisterUser);
    const deleteRecipe = useSelector(selectRequestDelete);

    useEffect(() => {
        setShow(createRecipe || userRegister || deleteRecipe);
    }, [createRecipe, userRegister, deleteRecipe]);
    return(
        <Modal show={show} dialogClassName={createRecipe ? 'create-recipe-form' : userRegister ? null : null}>
            {createRecipe ?
                <RecipeForm />
            : userRegister ?
                <UserRegister />
            : deleteRecipe ?
                <DeleteRecipeConfirmation />
            :
                null
            }
        </Modal>
    )
}

export default FormModal;
