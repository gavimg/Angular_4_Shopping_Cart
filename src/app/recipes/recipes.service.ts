import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppinglistService } from './../shopping-list/shopping-list.service';


@Injectable()
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

  constructor(private shoppinService: ShoppinglistService) {}


  getRecipes() {
      return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinService.addIngredients(ingredients);
  }

}