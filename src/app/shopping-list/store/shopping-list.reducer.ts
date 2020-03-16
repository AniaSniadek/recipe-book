import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 15),
        new Ingredient('Oranges', 5)
    ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {

    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        default:
            return state;
    }
}