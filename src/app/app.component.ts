import { Component, OnInit } from '@angular/core';
import { ImprintService } from './services/imprint.service';
import { ScrollService } from './services/scroll.service';
import AOS from 'aos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  showImprint: boolean;
  shutImprint: boolean;
  title= 'portfolio-website';

  constructor(private scrollService: ScrollService, private imprintService: ImprintService, private location: Location) {

  }

  ngOnInit(): void {
    AOS.init();
    this.imprintService.showImprint.subscribe((value) => {
      this.showImprint = value;
    });
    this.imprintService.shutImprint.subscribe((value) => {
      this.shutImprint = value;
    });
  }

  scrollToBottom(): void {
    this.scrollService.scrollToBottom();
  }

  switchLanguage(lang: string) {
    const currentUrl = this.location.path();
    window.location.href = `${currentUrl}?lang=${lang}`;
  }

}