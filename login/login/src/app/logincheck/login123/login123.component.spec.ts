import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login123Component } from './login123.component';

describe('Login123Component', () => {
  let component: Login123Component;
  let fixture: ComponentFixture<Login123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login123Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
