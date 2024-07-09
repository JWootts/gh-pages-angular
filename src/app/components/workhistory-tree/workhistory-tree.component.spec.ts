import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhistoryTreeComponent } from './workhistory-tree.component';

describe('WorkhistoryTreeComponent', () => {
  let component: WorkhistoryTreeComponent;
  let fixture: ComponentFixture<WorkhistoryTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkhistoryTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkhistoryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
