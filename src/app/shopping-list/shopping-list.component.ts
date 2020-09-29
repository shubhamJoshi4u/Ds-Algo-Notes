import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Array<Ingridient> = [

    new Ingridient("Almonds", 12),
    new Ingridient("Apples", 2)

  ];

  constructor() { }

  ngOnInit() {
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }

}
