import store from '../store.js';
import * as Action from '../model/state/Action.js';

class FormController {
    async addRecipeIngredient(ingredient) {
        store.dispatch(Action.addIngredientToForm(ingredient));
    };
    async removeRecipeIngredient(ingredient) {
        store.dispatch(Action.removeIngredientFromForm(ingredient));
    };
    async addRecipeInstruction(instruction) {
        store.dispatch(Action.addInstructionToForm(instruction));
    };
    async removeRecipeInstruction(instructio) {
        store.dispatch(Action.removeInstructionFromForm(instructio));
    };
};

export default new FormController();
