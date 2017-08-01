import {EventEmitter, Injectable} from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'http://kmetro.restaurantden.com/wp-content/uploads/sites/67/2016/03/dish_1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'http://bk-emea-prd.s3.amazonaws.com/sites/burgerking.co.uk/files/BK_Angus_Burger_500X540px.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}