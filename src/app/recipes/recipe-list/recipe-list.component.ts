import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'https://s-media-cache-ak0.pinimg.com/originals/f1/60/14/f1601412ddf7274ab46c5f43062979ad.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test',
            'https://s-media-cache-ak0.pinimg.com/originals/f1/60/14/f1601412ddf7274ab46c5f43062979ad.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
