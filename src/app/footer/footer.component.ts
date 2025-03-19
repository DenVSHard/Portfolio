import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bottomSection', { static: true }) target: ElementRef;
  private subscription: Subscription;
  year: Date = new Date();
  constructor(private scrollService: ScrollService, private imprintService: ImprintService, private router: Router) { }

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToBottomSection$.subscribe(
      () => {
        const elementPosition = this.target.nativeElement.offsetTop;
        const adjustment = 150;
        window.scrollTo({
          top: elementPosition - adjustment,
          behavior: 'smooth',
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}