import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonewizardComponent } from './clonewizard.component';

describe('ClonewizardComponent', () => {
  let component: ClonewizardComponent;
  let fixture: ComponentFixture<ClonewizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClonewizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClonewizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
