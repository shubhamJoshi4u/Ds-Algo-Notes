import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature: string = 'recipe';

  isHeaderShoppingListTabToggle: boolean = false;

  onSelectFeature(selectedFeature: string) {
    this.loadedFeature = selectedFeature;
  }

}
