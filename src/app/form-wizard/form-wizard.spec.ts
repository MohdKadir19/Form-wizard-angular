import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWizard } from './form-wizard';

describe('FormWizard', () => {
  let component: FormWizard;
  let fixture: ComponentFixture<FormWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
