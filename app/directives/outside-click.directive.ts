import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]'
})
export class OutsideClickDirective {
  @Output()
  appOutsideClick = new EventEmitter();


  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.appOutsideClick.emit(true);
    } else {
      this.appOutsideClick.emit(false);
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p (appOutsideClick) = outsideClick($event)>
  Start editing to see some magic happen :)
</p>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  outsideClick(hasClickedOutside) {
    this.name = hasClickedOutside ? 'clicked outside' : 'clicked inside';
  }
}

/*

*/