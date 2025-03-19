import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioItemBoxComponent } from './portfolio-item-box.component';

describe('PortfolioItemBoxComponent', () => {
  let component: PortfolioItemBoxComponent;
  let fixture: ComponentFixture<PortfolioItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioItemBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortfolioItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});