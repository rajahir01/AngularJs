import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `<h1>
    From AppComponent-
  </h1>
  <app-test [parentData]="name"></app-test>`,


  styles: []
})
export class AppComponent {
  title = '2.binding';
  public name="\nraj"
}
