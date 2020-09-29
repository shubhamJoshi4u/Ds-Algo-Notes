import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: "/header.component.html"
})
export class HeaderComponent {

    @Output() headerTabEvenEmitter = new EventEmitter<String>();

    onSelectFeature(featureSelected: string) {
        this.headerTabEvenEmitter.emit(featureSelected);
    }

}