import { Component } from '@angular/core';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(private translate: TranslateService, private scrollService: ScrollService, private imprintService: ImprintService, private location: Location) {
    this.translate.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'en';
    this.translate.use(lang);
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.closeImprint();
    window.scrollTo(0, 925);
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
    this.closeImprint();
    window.scrollTo(0, 1760);
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}