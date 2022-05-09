import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivitiesListsComponent} from './activities-lists.component';

describe('ActivitiesListsComponent', () => {
  let component: ActivitiesListsComponent;
  let fixture: ComponentFixture<ActivitiesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesListsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
