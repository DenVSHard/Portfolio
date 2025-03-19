import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionPortfolioComponent } from './section-portfolio.component';

describe('SectionPortfolioComponent', () => {
  let component: SectionPortfolioComponent;
  let fixture: ComponentFixture<SectionPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionPortfolioComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SectionPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});