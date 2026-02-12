import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss'],
})
export class SectionSkillsComponent implements AfterViewInit, OnDestroy, OnInit {
  skills: any = [];
  @ViewChild('skillsSection', { static: true }) target!: ElementRef;
  private subscription: Subscription;

  constructor(
    private skillService: SkillsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skills = this.skillService.getSkills();
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToSkillsSection$.subscribe(() => {
  
      setTimeout(() => {
        const element = this.target.nativeElement;
       
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop;

        const adjustment = 150; 

        window.scrollTo({
          top: targetY - adjustment,
          behavior: 'smooth',
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