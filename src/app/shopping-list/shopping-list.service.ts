import { Ingredient } from './../shared/ingredient.model';
import {EventEmitter} from '@angular/core'

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 15),
        new Ingredient('Oranges', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
        alert('The ingredients have been added to the shopping list')
    }
}