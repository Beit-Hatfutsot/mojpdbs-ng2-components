import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'mojp-container',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mojp-header *ngIf="showHeader"></mojp-header>
        <div class="app">
          <ng-content></ng-content>
        </div>
        <mojp-footer *ngIf="showFooter"></mojp-footer>
    `
})
export class AppContainerComponent {
    @Input() showHeader: boolean = true;
    @Input() showFooter: boolean = true;
}
