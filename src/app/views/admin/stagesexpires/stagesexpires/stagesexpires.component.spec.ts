import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesexpiresComponent } from './stagesexpires.component';

describe('StagesexpiresComponent', () => {
  let component: StagesexpiresComponent;
  let fixture: ComponentFixture<StagesexpiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StagesexpiresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagesexpiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
