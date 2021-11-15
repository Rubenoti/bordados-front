import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocemeComponent } from './conoceme.component';

describe('ConocemeComponent', () => {
  let component: ConocemeComponent;
  let fixture: ComponentFixture<ConocemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
