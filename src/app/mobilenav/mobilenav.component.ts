import { Component, Output, EventEmitter } from '@angular/core';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
})

export class MobilenavComponent {
  @Output() linkClick = new EventEmitter<void>();

  constructor(private scrollService: ScrollService, private imprintService: ImprintService,  private translate: TranslateService) { }

  toggleMobileNav() {
    this.linkClick.emit();
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    window.scrollTo(0, 4620);
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
    window.scrollTo(0, 2100);
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.toggleMobileNav();
    this.closeImprint();
    window.scrollTo(0, 925);
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  openImprint() {
    this.toggleMobileNav();
    this.imprintService.openImprint();
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}