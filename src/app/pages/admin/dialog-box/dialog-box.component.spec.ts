import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule

import { DialogBoxComponent } from './dialog-box.component';

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogBoxComponent],
      imports: [FormsModule, MatDialogModule], // Add necessary imports
    }).compileComponents();

    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
