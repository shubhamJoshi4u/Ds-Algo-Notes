import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onRecipeSelected: EventEmitter<RecipeModel> = new EventEmitter();

  recipeList: Array<RecipeModel> = [
    new RecipeModel("My Recipe A", "Test Descr A", "https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg"),
    new RecipeModel("My Recipe B", "Test Descr B", "https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  emitRecipeItem(recipe: RecipeModel) {
    this.onRecipeSelected.emit(recipe);
  }

}
