import store from '../store.js';
import * as Action from '../model/state/Action.js';

class FormController {
    async relayIngredient(ingredient) {
        store.dispatch(Action.relayIngredient(ingredient));
    };
    async deleteIngredient(ingredient) {
        store.dispatch(Action.deleteIngredient(ingredient));
    };
    async relayInstruction(instruction) {
        store.dispatch(Action.relayInstruction(instruction));
    };
    async deleteInstruction(instruction) {
        store.dispatch(Action.deleteInstruction(instruction));
    };
    async relayUserRegister(signal) {
        store.dispatch(Action.relayUserRegister(signal));
    };
    async relayCreateRecipe(signal) {
        store.dispatch(Action.relayCreateRecipe(signal));
    };
    async requestDeleteRecipe(signal) {
        store.dispatch(Action.requestDeleteRecipe(signal));
    };
};

export default new FormController();
