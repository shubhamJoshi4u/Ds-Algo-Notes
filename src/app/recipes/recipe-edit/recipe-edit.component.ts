import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe-service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index: number;
  isEditMode = false;
  form: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.isEditMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let ingridients: FormArray = new FormArray([]);
    let recipe: RecipeModel = new RecipeModel('', '', '', []);

    if (this.isEditMode) {
      recipe = this.recipeService.getRecipeById(this.index);
      if (recipe.ingridients) {
        recipe.ingridients.forEach(
          ingridient => {
            ingridients.push(
              new FormGroup({
                name: new FormControl(ingridient.name, Validators.required),
                ammount: new FormControl(ingridient.ammount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        );
      }
    }
    this.form = new FormGroup({
      name: new FormControl(recipe.name, Validators.required),
      imgPath: new FormControl(recipe.imgPath, Validators.required),
      type: new FormControl(recipe.type, Validators.required),
      ingridients
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

  onAddIngr() {
    (<FormArray>this.form.get('ingridients')).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      ammount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }));
  }

  onDeleteIngr(index: number) {
    (<FormArray>this.form.get('ingridients')).removeAt(index);
  }

  onSubmit() {
    if (this.isEditMode) {
      this.recipeService.updateRecipe(this.index, this.form.value);
    } else {
      this.recipeService.addRecipe(this.form.value);
    }
    this.onCancel();
  }
}
