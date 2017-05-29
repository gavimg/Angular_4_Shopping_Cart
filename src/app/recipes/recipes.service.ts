import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe(
        'A Test Recipe', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Meat', 2),
            new Ingredient('French Fries', 20)
        ]
    ),
    new Recipe(
        'Another Test Recipe',
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Buns', 10),
            new Ingredient('Meat', 4)
        ]
        )
  ];


  getRecipes() {
      return this.recipes.slice();
  }
}