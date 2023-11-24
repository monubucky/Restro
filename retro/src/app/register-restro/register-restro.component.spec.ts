import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRestroComponent } from './register-restro.component';

describe('RegisterRestroComponent', () => {
  let component: RegisterRestroComponent;
  let fixture: ComponentFixture<RegisterRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
