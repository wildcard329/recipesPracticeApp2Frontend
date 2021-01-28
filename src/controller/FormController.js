import store from '../store.js';
import * as Action from '../model/state/Action.js';

class FormController {
    async addRecipeIngredient(ingredient) {
        store.dispatch(Action.addIngredientToForm(ingredient));
    };
    async removeRecipeIngredient(ingredient) {
        store.dispatch(Action.removeIngredientFromForm(ingredient));
    };
    async removeRecipeIngredientId(id) {
        store.dispatch(Action.removeIngredientIdFromForm(id));
    };
    async addRecipeInstruction(instruction) {
        store.dispatch(Action.addInstructionToForm(instruction));
    };
    async removeRecipeInstruction(instruction) {
        store.dispatch(Action.removeInstructionFromForm(instruction));
    };
    async removeRecipeInstructionId(id) {
        store.dispatch(Action.removeInstructionIdFromForm(id));
    };
};

export default new FormController();
