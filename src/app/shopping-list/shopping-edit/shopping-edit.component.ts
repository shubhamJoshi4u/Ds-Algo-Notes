import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingService } from '../shopping-list-service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) form: NgForm;
  subscription: Subscription;
  isEditMode = false;
  selectedIndex: number;

  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.onShoppingItemSelect.subscribe(
      shoppingItemIndex => {
        this.isEditMode = true;
        this.selectedIndex = shoppingItemIndex;
        const ingr = this.shoppingListService.getIngridientByIndex(shoppingItemIndex);
        this.form.setValue({
          itemName: ingr.name,
          itemAmmount: ingr.ammount
        });
      }
    );
  }


  ingridientSubmit() {
    const ingrName = this.form.value.itemName;
    const ingrAmm = this.form.value.itemAmmount;
    if (this.isEditMode) {
      this.shoppingListService.updateIngridient(this.selectedIndex, ingrName, ingrAmm);
    } else {
      this.shoppingListService.addIngridient(ingrName, ingrAmm);
    }
    this.isEditMode = false;
    this.form.reset();
  }

  onClear() {
    this.isEditMode = false;
    this.form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngridient(this.selectedIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
