import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesrefuseesComponent } from './demandesrefusees.component';

describe('DemandesrefuseesComponent', () => {
  let component: DemandesrefuseesComponent;
  let fixture: ComponentFixture<DemandesrefuseesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandesrefuseesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandesrefuseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
