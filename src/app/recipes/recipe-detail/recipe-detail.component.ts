import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeModel;
  recipeId: number;
  isDropDownSelected = false;

  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.recipeId);
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe);
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }
}
