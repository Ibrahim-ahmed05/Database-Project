import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachFlightsComponent } from './book-flights.component';

describe('SeachFlightsComponent', () => {
  let component: SeachFlightsComponent;
  let fixture: ComponentFixture<SeachFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeachFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeachFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
