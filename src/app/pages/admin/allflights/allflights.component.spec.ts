import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllFlightsComponent } from './allflights.component'; // Correct class name

describe('AllFlightsComponent', () => { // Correct class name here
  let component: AllFlightsComponent;   // Correct variable type
  let fixture: ComponentFixture<AllFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFlightsComponent ] // Correct class name
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
