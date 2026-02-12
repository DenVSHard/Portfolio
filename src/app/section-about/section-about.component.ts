import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})

export class SectionAboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection', { static: true }) target: ElementRef;
  private subscription: Subscription;
  constructor(private scrollService: ScrollService) { }

 ngAfterViewInit() {
  this.subscription = this.scrollService.scrollToAboutSection$.subscribe(() => {
    
    setTimeout(() => {
      const element = this.target.nativeElement;
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const adjustment = 50; 
      const targetY = rect.top + scrollTop - adjustment;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }, 10);
  });
}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}