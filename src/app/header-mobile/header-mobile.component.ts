import { Component } from '@angular/core';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 1, transform: 'translate(0%)' })),
      state('false', style({ opacity: 0, transform: 'translate(100%)' })),
      transition('* <=> *', [animate('500ms ease-in-out')])
    ])
  ]
})

export class HeaderMobileComponent {
  displayMobileNav = false;
  iconMenu: string = '/assets/img/icons/mobile-menu.png';
  iconClose: string = '/assets/img/icons/mobilemenu-close-final.png';
  iconHeader: any = this.iconMenu;

  constructor(private scrollService: ScrollService, private imprintService: ImprintService) { }

  toggleMobileNav() {
    this.displayMobileNav = !this.displayMobileNav;
    if (this.iconHeader == this.iconMenu) {
      this.iconHeader = this.iconClose;
    } else this.iconHeader = this.iconMenu;
  }

  closeMobileNav() {
    this.displayMobileNav = false;
    if (this.iconHeader == this.iconMenu) {
      this.iconHeader = this.iconClose;
    } else this.iconHeader = this.iconMenu;

  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}