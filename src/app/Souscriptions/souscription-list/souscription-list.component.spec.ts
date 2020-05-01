import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscriptionListComponent } from './souscription-list.component';

describe('SouscriptionListComponent', () => {
  let component: SouscriptionListComponent;
  let fixture: ComponentFixture<SouscriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
