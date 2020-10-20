import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  private recipeList: Array<RecipeModel> = [];
  private subscription: Subscription;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.addRecipeEvent.subscribe(
      recipeList => {
        this.recipeList = recipeList;
      }
    );
    this.recipeList = this.recipeService.getRecipeList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
