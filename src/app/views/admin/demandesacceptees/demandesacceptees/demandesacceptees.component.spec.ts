import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesaccepteesComponent } from './demandesacceptees.component';

describe('DemandesaccepteesComponent', () => {
  let component: DemandesaccepteesComponent;
  let fixture: ComponentFixture<DemandesaccepteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandesaccepteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandesaccepteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
