import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesCardComponent } from './repositories-card.component';

describe('RepositoriesCardComponent', () => {
  let component: RepositoriesCardComponent;
  let fixture: ComponentFixture<RepositoriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
