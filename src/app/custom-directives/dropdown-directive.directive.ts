import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  @HostBinding('class.show') toggleDropdown: boolean = false;

  @HostListener('click') onClick() {
    this.toggleDropdown = !this.toggleDropdown;
  }

}
