import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-section-icons',
  templateUrl: './section-icons.component.html',
  styleUrls: ['./section-icons.component.scss']
})
export class SectionIconsComponent {

  constructor(private scrollService: ScrollService) {
  }

  scrollToContactForm(): void {
    this.scrollService.scrollToContact();
  }
}