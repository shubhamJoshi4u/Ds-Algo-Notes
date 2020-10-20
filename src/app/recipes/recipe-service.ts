import { RecipeModel } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingService } from '../shopping-list/shopping-list-service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    addRecipeEvent: Subject<RecipeModel[]> = new Subject();

    private recipeList: Array<RecipeModel> = [
        new RecipeModel(
            'Pizza',
            'Tasty Italian pizza!! just awesome',
            '../../assets/img/supreme-pizza.png',
            [
                new Ingridient('Mozerella blocks', 1),
                new Ingridient('Corn', 1),
                new Ingridient('Tomato sauce', 1)
            ]),
        new RecipeModel(
            'Burger',
            'Double decker loaded with spices and cheese',
            '../../assets/img/burger.jpg',
            [
                new Ingridient('Buns', 2),
                new Ingridient('Chicken', 1),
                new Ingridient('Mayo', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingService) { }

    getRecipeList() {
        return this.recipeList.slice();
    }

    getRecipeById(index: number) {
        return this.recipeList[index];
    }

    addToShoppingList(recipe: RecipeModel) {
        this.shoppingListService.addIngridients(recipe.ingridients);
    }

    addRecipe(recipe: RecipeModel) {
        this.recipeList.push(recipe);
        this.addRecipeEvent.next(this.recipeList.slice());
    }

    updateRecipe(index: number, recipe: RecipeModel) {
        this.recipeList[index] = recipe;
        this.addRecipeEvent.next(this.recipeList.slice());
    }

    deleteRecipe(index: number) {
        this.recipeList.splice(index, 1);
        this.addRecipeEvent.next(this.recipeList.slice());
    }
}
