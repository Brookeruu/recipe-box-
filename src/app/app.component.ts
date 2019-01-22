import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-box';
  currentFocus: string = 'A box for all your recipes';

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  recipes: Recipe[] = [
    new Recipe('Mac & Cheese', 'A perfect blend of fine cheddar and noodles', ['cheddar', 'noodles', 'bacon bits', 'truffles'], 3),
    new Recipe('Banana Bread', 'A harmonious blend of banana and bread', ['banana', 'flour', 'almond milk', 'butter', 'maple syrup'], 1)
  ]

  selectedRecipe: Recipe = this.recipes[0];

  priorityColor(currentRecipe){
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
