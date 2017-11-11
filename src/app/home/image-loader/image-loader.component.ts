import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-loader',
  template: `<img class="spinner" *ngIf="!loaded"  src="../../assets/spinner.gif"/>
    <img  class="flicker-thump" [hidden]="!loaded" (load)="loaded = true" [src]="src"/>`
})
export class ImageLoaderComponent {
  @Input() src;
}
