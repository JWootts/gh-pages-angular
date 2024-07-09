import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometextfeedComponent } from './welcometextfeed.component';

describe('WelcometextfeedComponent', () => {
  let component: WelcometextfeedComponent;
  let fixture: ComponentFixture<WelcometextfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcometextfeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcometextfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
