import { EventEmitter } from "@angular/core";
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'https://s-media-cache-ak0.pinimg.com/originals/f1/60/14/f1601412ddf7274ab46c5f43062979ad.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test',
            'https://s-media-cache-ak0.pinimg.com/originals/f1/60/14/f1601412ddf7274ab46c5f43062979ad.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}