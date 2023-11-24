import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestroComponent } from './login-restro.component';

describe('LoginRestroComponent', () => {
  let component: LoginRestroComponent;
  let fixture: ComponentFixture<LoginRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
