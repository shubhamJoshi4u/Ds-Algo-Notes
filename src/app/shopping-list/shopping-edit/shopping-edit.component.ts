import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('recipeNameRef', { static: false }) ingridientName: ElementRef;
  @ViewChild('ingridientNameRef', { static: false }) ingridientAmmount: ElementRef;
  @Output() onIngridientAdd = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit() {
  }

  ingridientAdd() {
    const ingrName = this.ingridientName.nativeElement.value;
    const ingrAmm = this.ingridientAmmount.nativeElement.value;
    const ingridient = new Ingridient(ingrName, ingrAmm);

    this.onIngridientAdd.emit(ingridient);
  }

}
