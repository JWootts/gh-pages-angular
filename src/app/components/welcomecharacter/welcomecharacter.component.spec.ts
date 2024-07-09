import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecharacterComponent } from './welcomecharacter.component';

describe('WelcomecharacterComponent', () => {
  let component: WelcomecharacterComponent;
  let fixture: ComponentFixture<WelcomecharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomecharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
