import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailwizardComponent } from './emailwizard.component';

describe('EmailwizardComponent', () => {
  let component: EmailwizardComponent;
  let fixture: ComponentFixture<EmailwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailwizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
