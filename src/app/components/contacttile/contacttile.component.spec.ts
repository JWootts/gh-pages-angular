import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttileComponent } from './contacttile.component';

describe('ContacttileComponent', () => {
  let component: ContacttileComponent;
  let fixture: ComponentFixture<ContacttileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacttileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacttileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
