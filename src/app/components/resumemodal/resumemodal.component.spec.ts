import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumemodalComponent } from './resumemodal.component';

describe('ResumemodalComponent', () => {
  let component: ResumemodalComponent;
  let fixture: ComponentFixture<ResumemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumemodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
