import { AfterViewInit, ViewChild, ElementRef, Component, OnDestroy, } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss'],
})

export class SectionContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contactSection', { static: true }) target: ElementRef;
  private subscription: Subscription;

  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToContactForm$.subscribe(() => {
      const elementPosition = getOffset(this.target.nativeElement); // Use helper function to get position
      const adjustment = 150;
      window.scrollTo({ top: elementPosition - adjustment, behavior: 'smooth' });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  scrollToTop() {
    this.scrollService.scrollToTop();
  }
}

function getOffset(el: HTMLElement): number {
  let offsetTop = 0;

  while (el) {
    offsetTop += el.offsetTop;
    el = el.offsetParent as HTMLElement;
  }

  return offsetTop;
}