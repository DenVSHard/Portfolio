/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function getOffset(el: HTMLElement): number {
  let offsetTop = 0;

  while (el) {
    offsetTop += el.offsetTop;
    el = el.offsetParent as HTMLElement;
  }

  return offsetTop;
}