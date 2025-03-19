import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilenavComponent } from './mobilenav.component';

describe('MobilenavComponent', () => {
  let component: MobilenavComponent;
  let fixture: ComponentFixture<MobilenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobilenavComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MobilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});