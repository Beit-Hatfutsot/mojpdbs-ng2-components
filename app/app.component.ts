import { Component } from '@angular/core';
declare const process: any;

@Component({
  selector: 'my-app',
  template: `
    <mojp-container>
      <h1>{{ greeting }}</h1>
    </mojp-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של בית התפוצות';
}
