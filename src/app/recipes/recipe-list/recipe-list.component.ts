import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe One', 'A Test may be', 'http://www.appsgeyser.com/assets/5df9921a/icons/recipe-icon-6.png'),
    new Recipe('A Test Recipe Two', 'A Test may be', 'http://www.vivrebelle.com/assets/site/img/recipe-icon.png'),
    new Recipe('A Test Recipe Three', 'A Test may be', 'https://assets.materialup.com/uploads/710e2dd7-6b50-43a0-a3f5-5167a7e23d07/teaser.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
