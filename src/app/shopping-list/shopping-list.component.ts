import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingService } from './shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingridients: Array<Ingridient> = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngridients();
    this.subscription = this.shoppingListService.onIngridientAdd.subscribe(
      (ingridients: Array<Ingridient>) => {
        this.ingridients = ingridients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onShoppingItemSelect(shoppingItemIndex: number) {
    this.shoppingListService.onShoppingItemSelect.next(shoppingItemIndex);
  }
}
