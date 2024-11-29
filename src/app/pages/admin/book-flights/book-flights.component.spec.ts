import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFlightsComponent } from './book-flights.component'; // Corrected import

describe('BookFlightComponent', () => { // Corrected component name
  let component: BookFlightsComponent;
  let fixture: ComponentFixture<BookFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookFlightsComponent] // Corrected component name
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookFlightsComponent); // Corrected component name
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
