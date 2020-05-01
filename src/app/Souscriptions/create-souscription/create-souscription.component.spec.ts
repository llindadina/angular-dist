import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSouscriptionComponent } from './create-souscription.component';

describe('CreateSouscriptionComponent', () => {
  let component: CreateSouscriptionComponent;
  let fixture: ComponentFixture<CreateSouscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSouscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
